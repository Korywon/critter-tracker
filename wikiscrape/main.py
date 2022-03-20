#!/opt/homebrew/bin/python3

from bs4 import BeautifulSoup
import requests
import shutil
import json

wiki_url = 'https://nookipedia.com'
fish_list_path = '/wiki/Fish/New_Horizons'
bug_list_path = '/wiki/Bugs/New_Horizons'
table_class = 'sortable'

def get_html_soup(path: str):
    response = requests.get(path)
    return BeautifulSoup(response.text, 'html.parser')


def get_available_months(cell):
    north_spans = cell.span.find_all('span')
    south_spans = cell.p.span.find_all('span')

    months = {
        'north': [],
        'south': []
    }

    for i, month in enumerate(north_spans):
        if 'font-weight' in month['style']:
            months['north'].append(i+1)
    for i, month in enumerate(south_spans):
        if 'font-weight' in month['style']:
            months['south'].append(i+1)

    return months

def get_fish_data():
    soup = get_html_soup(f'{wiki_url}{fish_list_path}')

    fish_table = soup.find('table', attrs={'class': table_class})
    rows = fish_table.find('tbody').find_all('tr')

    fish_data = []

    for row in rows:
        cells = row.find_all('td')

        if len(cells) == 0:
            continue

        number = cells[0].text.strip().lower()
        name = cells[1].text.strip().lower()
        image_path = cells[2].a['href']
        price = cells[3].text.strip().lower()
        size = cells[4].text.strip().lower()
        location = cells[5].text.strip().lower()
        time = cells[6].text.strip().lower()
        months = get_available_months(cells[7])
        total_catches = cells[8].text.strip().lower()


        fish_data.append({
            'number': int(number),
            'name': name,
            'image': f'{wiki_url}{image_path}',
            'price': int(''.join(filter(str.isdigit, price))),
            'size': size,
            'location': location,
            'time': time,
            'months': months,
            'total_catches': total_catches
        })

    return fish_data


def get_bug_data():
    soup = get_html_soup(f'{wiki_url}{bug_list_path}')

    bug_table = soup.find('table', attrs={'class': table_class})
    rows = bug_table.find('tbody').find_all('tr')

    bug_data = []

    for row in rows:
        cells = row.find_all('td')

        if len(cells) == 0:
            continue

        number = cells[0].text.strip().lower()
        name = cells[1].text.strip().lower()
        image_path = cells[2].a['href']
        price = cells[3].text.strip().lower()
        location = cells[4].text.strip().lower()
        weather = cells[5].text.strip().lower()
        time = cells[6].text.strip().lower()
        months = get_available_months(cells[7])
        total_catches = cells[8].text.strip().lower()


        bug_data.append({
            'number': int(number),
            'name': name,
            'image': f'{wiki_url}{image_path}',
            'price': int(''.join(filter(str.isdigit, price))),
            'location': location,
            'weather': weather,
            'time': time,
            'months': months,
            'total_catches': total_catches
        })

    return bug_data

def write_json_file(filename: str, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=2)

if __name__ == '__main__':
    fish_data = get_fish_data()
    bug_data = get_bug_data()
    write_json_file('fish.json', fish_data)
    write_json_file('bug.json', bug_data)
