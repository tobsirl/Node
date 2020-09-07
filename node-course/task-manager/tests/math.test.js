const { calculateTip } = require('../src/math');

test('should calculate the correct tip', () => {
  expect(calculateTip(10, .3)).toEqual(13);
});

test('should be a Number', () => {
  expect(calculateTip);
});
