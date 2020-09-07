const { calculateTip } = require('../src/math');

test('should calculate total with tip', () => {
  expect(calculateTip(10, .3)).toEqual(13);
});

test('should calculate total with default tip', () => {
  expect(calculateTip(10)).toEqual(12.5);
});
