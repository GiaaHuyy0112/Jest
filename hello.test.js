const say = require('./hello');
const sad = require('./hello');
test('Hello equal Hello', () => {
	var s = sad();
  expect( s ).toMatch(':((');
});