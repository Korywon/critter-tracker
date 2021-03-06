const hourDay = 5;
const hourNight = 19;

export default class TimeUtility {
  static get12HourTime(hour) {
    let hourNumber =  hour % 12;
    let meridiem = "am";

    if (hour >= 12) {
      meridiem = "pm";
    }

    if (hourNumber === 0) {
      hourNumber = 12;
    }

    return ({
      hour: hourNumber,
      meridiem: meridiem
    });
  }

  static isDay(hour) {
    if (hour >= hourDay && hour < hourNight) {
      return true;
    } else {
      return false;
    }
  }
}