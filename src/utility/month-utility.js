export default class MonthUtility {
  /**
   * Returns the next month after the given month and wraps after 11.
   * @param {Number} currMonth 
   */
  static nextMonthWrap(currMonth) {
    return currMonth + 1 > 11 ? 0 : currMonth + 1;
  }

  /**
   * Returns the status object based on the months object and current month.
   * @param {Number} currMonth 
   * @param {Object} months 
   */
  static getStatusHemispheres (currMonth, months) {
    const nextMonth = this.nextMonthWrap(currMonth);
    let status = {
      available: false,
      lastMonth: false,
      new: false,
      soon: false
    };

    if (months.length === 0) {
      status.available = true;
      return status;
    }

    /*
     * Loops through each time span in the months array and assigns values for
     * the statuses object.
     */
    for (let index in months) {
      let span = months[index];

      /*
       * If time span object has from and through key, or has in key.
       */
      if (span.hasOwnProperty('from') && span.hasOwnProperty('through')) {
        /*
         * If the current month is within the time span.
         */
        if (span.from >= currMonth && currMonth <= span.through) {
          status.available = true;
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
  static getStatusMonths(currMonth, months) {
    let status = {
      north: {},
      south: {}
    };

    if (!months) {
      months = {};
      months.north = [];
      months.south = [];
    }

    status.north = this.getStatusHemispheres(currMonth, months.north);
    status.south = this.getStatusHemispheres(currMonth, months.south);
    
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
}
