const say = require('./hello');
const sad = require('./hello');



test('Hello equal Hello', () => {
	var s = say();
  expect( s ).toMatch(':((');
});

test('Emotion', () =>{
  var e = sad();
  expect(e).toMatch(':((');
});

test("Wrong emotion", () => {
  var e = sad();
  expect(e).toMatch('xD');
});