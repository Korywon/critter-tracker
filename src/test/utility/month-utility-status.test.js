import MonthUtility from '../../utility/month-utility';

test('null timespans array', () => {
  const currMonth = 5;
  const span = null;
  const expectStatus = {
    available: true,
    lastMonth: false,
    new: false,
    soon: false
  }

  const status = MonthUtility.getStatusTimeSpans(currMonth, span);

  expect(status).toStrictEqual(expectStatus);
});

test('undefined timespans array', () => {
  const currMonth = 5;
  const span = null;
  const expectStatus = {
    available: true,
    lastMonth: false,
    new: false,
    soon: false
  }

  const status = MonthUtility.getStatusTimeSpans(currMonth, undefined);

  expect(status).toStrictEqual(expectStatus);
});

test('available', () => {
  const currMonth = 3;
  const span = [
    { from: 2, through: 5 }
  ];
  const expectStatus = {
    available: true,
    lastMonth: false,
    new: false,
    soon: false
  }
  
  const status = MonthUtility.getStatusTimeSpans(currMonth, span);
  
  expect(status).toStrictEqual(expectStatus);
});

test('available, last month time span wrap', () => {
  const currMonth = 3;
  const span = [
    { from: 10, through: 3 },
  ];
  
  const expectStatus = {
    available: true,
    lastMonth: true,
    new: false,
    soon: false
  }
  
  const status = MonthUtility.getStatusTimeSpans(currMonth, span);
  
  expect(status).toStrictEqual(expectStatus);
});