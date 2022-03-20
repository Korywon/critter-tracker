import MonthUtility from '../../utility/month-utility';


test('december (11) season', () => {
  const monthNumber = 11;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('winter');
});

test('january (0) season', () => {
  const monthNumber = 0;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('winter');
});

test('february (1) season', () => {
  const monthNumber = 1;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('winter');
});

test('march (2) season', () => {
  const monthNumber = 2;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('spring');
});

test('april (3) season', () => {
  const monthNumber = 3;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('spring');
});

test('may (4) season', () => {
  const monthNumber = 4;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('spring');
});

test('june (5) season', () => {
  const monthNumber = 5;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('summer');
});

test('july (6) season', () => {
  const monthNumber = 6;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('summer');
});

test('august (7) season', () => {
  const monthNumber = 7;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('summer');
});

test('september (8) season', () => {
  const monthNumber = 8;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('fall');
});

test('october (9) season', () => {
  const monthNumber = 9;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('fall');
});

test('november (10) season', () => {
  const monthNumber = 10;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe('fall');
});

test('-11 null test', () => {
  const monthNumber = -5;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe(null);
});

test('13 null test', () => {
  const monthNumber = 13;
  const season = MonthUtility.getMonthSeason(monthNumber);
  expect(season).toBe(null);
});