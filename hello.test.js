const hello = require('./hello');

test('Hello equal Hello', () => {
  expect( hello() ).toBe("Hello");
});