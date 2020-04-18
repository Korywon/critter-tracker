import TimeUtility from '../../utility/time-utility.js';

test('24 hour conversion (0)', () => {
  const hourNum = 0;
  const expectTime = {
    hour: 12,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (1)', () => {
  const hourNum = 1;
  const expectTime = {
    hour: 1,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (2)', () => {
  const hourNum = 2;
  const expectTime = {
    hour: 2,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (3)', () => {
  const hourNum = 3;
  const expectTime = {
    hour: 3,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (4)', () => {
  const hourNum = 4;
  const expectTime = {
    hour: 4,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (5)', () => {
  const hourNum = 5;
  const expectTime = {
    hour: 5,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (6)', () => {
  const hourNum = 6;
  const expectTime = {
    hour: 6,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (7)', () => {
  const hourNum = 7;
  const expectTime = {
    hour: 7,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (8)', () => {
  const hourNum = 8;
  const expectTime = {
    hour: 8,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (9)', () => {
  const hourNum = 9;
  const expectTime = {
    hour: 9,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (10)', () => {
  const hourNum = 10;
  const expectTime = {
    hour: 10,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (11)', () => {
  const hourNum = 11;
  const expectTime = {
    hour: 11,
    meridiem: "am"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (12)', () => {
  const hourNum = 12;
  const expectTime = {
    hour: 12,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (13)', () => {
  const hourNum = 13;
  const expectTime = {
    hour: 1,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (14)', () => {
  const hourNum = 14;
  const expectTime = {
    hour: 2,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (15)', () => {
  const hourNum = 15;
  const expectTime = {
    hour: 3,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (16)', () => {
  const hourNum = 16;
  const expectTime = {
    hour: 4,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (17)', () => {
  const hourNum = 17;
  const expectTime = {
    hour: 5,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (18)', () => {
  const hourNum = 18;
  const expectTime = {
    hour: 6,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(hourNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (19)', () => {
  const monthNum = 19;
  const expectTime = {
    hour: 7,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(monthNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (20)', () => {
  const monthNum = 20;
  const expectTime = {
    hour: 8,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(monthNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (21)', () => {
  const monthNum = 21;
  const expectTime = {
    hour: 9,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(monthNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (22)', () => {
  const monthNum = 22;
  const expectTime = {
    hour: 10,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(monthNum);
  expect(time).toStrictEqual(expectTime);
});

test('24 hour conversion (23)', () => {
  const monthNum = 23;
  const expectTime = {
    hour: 11,
    meridiem: "pm"
  };

  const time = TimeUtility.get12HourTime(monthNum);
  expect(time).toStrictEqual(expectTime);
});