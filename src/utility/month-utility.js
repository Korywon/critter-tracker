export default class MonthUtility {
  /**
   * Returns the next month after the given month and wraps after 11.
   * @param {Number} currMonth 
   */
  static getNextMonth(currMonth) {
    return currMonth + 1 > 11 ? 0 : currMonth + 1;
  }

  /**
   * Returns true if current month is in the timespan. False if not and if
   * the currMonth and timeSpan arguments are invalid.
   * @param {Number} currMonth 
   * @param {Number} timeSpan 
   */
  static inTimeSpan(currMonth, timeSpan) {
    /*
     * If current month is out of the range of valid month numbers.
     */
    if (currMonth < 0 || currMonth > 11) {
      console.error(
        `[ ERROR ]: Current month (${currMonth}) is invalid!`
      );
      return false;
    }

    /*
     * If time span from is out of the range of valid month numbers.
     */
    if (timeSpan.from < 0 || timeSpan.from > 11) {
      console.error(`[ ERROR ]: Time span from (${timeSpan.from}) is invalid!`);
      return false;
    }

    /*
     * If time span through is out of the range of valid month numbers.
     */
    if (timeSpan.through < 0 || timeSpan.through > 11) {
      console.error(
        `[ ERROR ]: Time span through (${timeSpan.through}) is invalid!`
      );
      return false;
    }
      
    /*
     * If the range goes over into the next year, e.g. December to Jenuary. Else
     * if the range is between the two values.
     */
    if (timeSpan.from > timeSpan.through) {
      /*
       * If the current month is between the two values. 
       */
      if (currMonth >= timeSpan.from || currMonth <= timeSpan.through) {
        return true;
      }
    } else if (currMonth >= timeSpan.from && currMonth <= timeSpan.through) {
      return true;
    } else if (timeSpan.from === timeSpan.through) {
      return true;
    }

    return false;
  }

  /**
   * Returns the status object based on the months object and current month.
   * @param {Number} currMonth 
   * @param {Object} months 
   */
  static getStatusTimeSpans (currMonth, timeSpans) {
    const nextMonth = this.getNextMonth(currMonth);
    let status = {
      available: false,
      lastMonth: false,
      new: false,
      soon: false
    };

    if (!timeSpans || timeSpans.length === 0) {
      status.available = true;
      return status;
    }

    /*
     * Loops through each time span in the months array and assigns values for
     * the statuses object.
     */
    for (let index in timeSpans) {
      let span = timeSpans[index];

      /*
       * If time span object has from and through key, or has in key.
       */
      if (span.hasOwnProperty('from') && span.hasOwnProperty('through')) {
        /*
         * If the current month is within the time span.
         */
        if (this.inTimeSpan(currMonth, span)) {
          status.available = true;
        }

        /*
         * If the time span start is this month. 
         */
        if (span.from === currMonth) {
          status.new = true;
        }

        /*
         * If the time span starts next month. 
         */
        if (span.from === nextMonth) {
          status.soon = true;
        }

        /*
         * If the current month is at the last month.
         */
        if (span.through === currMonth) {
          status.lastMonth = true;
        }

      } else if (span.hasOwnProperty('in')) {
        /*
         * If the current month is in the same month.
         */
        if (span.in === currMonth) {
          status.available = true;
          status.lastMonth = true;
          status.new = true;
        }

        /*
         * If the span is next month.
         */
        if (span.in === nextMonth) {
          status.soon = true;
        }
      } else {
        continue;
      }
    }


    /*
     * If the lastMonth and soon flag are true, set them both to false. It does
     * not make sense if the object is available next month and is available
     * soon.
     */
    if (status.lastMonth && status.soon) {
      status.lastMonth = false;
      status.soon = false;
    }

    return status;
  }

  /**
   * 
   * @param {*} currMonth 
   * @param {*} months 
   */
  static getStatusHemispheres(currMonth, months) {
    let status = {
      north: {},
      south: {}
    };

    if (!months) {
      months = {};
      months.north = [];
      months.south = [];
    }

    status.north = this.getStatusTimeSpans(currMonth, months.north);
    status.south = this.getStatusTimeSpans(currMonth, months.south);
    
    return status;
  }

  /**
   * Returns the month name based on the given month number.
   * @param {Number} month 
   */
  static getMonthName(month) {
    let names = [
      'january', 'february', 'march',
      'april', 'may', 'june',
      'july', 'august', 'september',
      'october', 'november', 'december'
    ]

    if (month < 0 || month > 11) {
      return null;
    }
    
    return names[month];
  }

  static getMonthSeason(currMonth) {
    switch (currMonth) {
      case 11:
      case 0:
      case 1:
        return 'winter';
      case 2:
      case 3:
      case 4:
        return 'spring';
      case 5:
      case 6:
      case 7:
        return 'summer';
      case 8:
      case 9:
      case 10:
        return 'fall';
      default:
        return null;
    }
  }
}
