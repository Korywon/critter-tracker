import MonthUtility from '../../utility/month-utility';

test('in time span', () => {
  const currMonth = 6;
  const timeSpan = { from: 5, through: 9 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(true);
});

test('in time span left edge', () => {
  const currMonth = 2;
  const timeSpan = { from: 2, through: 10 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(true);
});

test('in time span right edge', () => {
  const currMonth = 11;
  const timeSpan = { from: 9, through: 11 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(true);
});

test('in time span wrap', () => {
  const currMonth = 1;
  const timeSpan = { from: 8, through: 2 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(true);
});

test('out of time span wrap', () => {
  const currMonth = 7;
  const timeSpan = { from: 9, through: 6 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(false);
});

test('time span same', () => {
  const currMonth = 7;
  const timeSpan = { from: 3, through: 3 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(true);
});

test('current month and time span same', () => {
  const currMonth = 10;
  const timeSpan = { from: 10, through: 10 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(true);
});

test('invalid over current month', () => {
  const currMonth = 13;
  const timeSpan = { from: 5, through: 2 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(false);
});

test('invalid under current month', () => {
  const currMonth = -5;
  const timeSpan = { from: 3, through: 10 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(false);
});

test('invalid time span from over', () => {
  const currMonth = 3;
  const timeSpan = { from: 15, through: 2 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(false);
});

test('invalid time span from under', () => {
  const currMonth = 6;
  const timeSpan = { from: -1, through: 4 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(false);
});

test('invalid time span from over', () => {
  const currMonth = 6;
  const timeSpan = { from: 4, through: 19 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(false);
});

test('invalid time span from over', () => {
  const currMonth = 6;
  const timeSpan = { from: 3, through: -6 }
  const inTimeSpan = MonthUtility.inTimeSpan(currMonth, timeSpan);
  expect(inTimeSpan).toBe(false);
});