# Wikiscrape

## Introduction

This is a Python script that scrapes the AC:NH Nookipedia for fish and bug
data.

## Running

Simply run the script with Python 3 and it will generate JSON files to use with
the web app.

Here's an example on how to use the script and what you should expect to see.

```text
$ python3 ./main.py
Requesting data from "https://nookipedia.com/wiki/Fish/New_Horizons"...DONE
Found 81 fishes. Parsing...DONE
Requesting data from "https://nookipedia.com/wiki/Bugs/New_Horizons"...DONE
Found 81 bugs. Parsing...DONE
Writing to fish.json...DONE
Writing to bug.json...DONE
All tasks finished!
```
