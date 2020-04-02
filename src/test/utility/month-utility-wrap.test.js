import MonthUtility from '../../utility/month-utility';

test('month 11 wrap test', () => {
  const currMonth = 11;
  const nextMonth = MonthUtility.nextMonthWrap(currMonth);
  expect(nextMonth).toBe(0);
});