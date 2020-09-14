const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require('../src/math');

test('should calculate total with tip', () => {
  expect(calculateTip(10, 0.3)).toEqual(13);
});

test('should calculate total with default tip', () => {
  expect(calculateTip(10)).toEqual(12.5);
});

test('Should convert 32 F to 0 C', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test('Should convert 0 C to 32 F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

// Async test demo, pass a callback function
test('Async test demo', (done) => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 2000);
});

test('should add two numbers', (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test('should add two numbers async/await', async () => {
  const result = await add(1, 2);
  expect(result).toBe(3);
});
