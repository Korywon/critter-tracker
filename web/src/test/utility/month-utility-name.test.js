import MonthUtility from '../../utility/month-utility';

test('month number 0 to january', () => {
  const monthNumber = 0;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('january');
});

test('month number 1 to february', () => {
  const monthNumber = 1;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('february');
});

test('month number 2 to march', () => {
  const monthNumber = 2;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('march');
});

test('month number 3 to april', () => {
  const monthNumber = 3;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('april');
});

test('month number 4 to may', () => {
  const monthNumber = 4;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('may');
});

test('month number 5 to june', () => {
  const monthNumber = 5;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('june');
});

test('month number 6 to july', () => {
  const monthNumber = 6;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('july');
});

test('month number 7 to august', () => {
  const monthNumber = 7;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('august');
});

test('month number 8 to september', () => {
  const monthNumber = 8;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('september');
});

test('month number 9 to october', () => {
  const monthNumber = 9;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('october');
});

test('month number 10 to november', () => {
  const monthNumber = 10;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('november');
});

test('month number 11 to december', () => {
  const monthNumber = 11;
  const monthName = MonthUtility.getMonthName(monthNumber);
  expect(monthName).toBe('december');
});