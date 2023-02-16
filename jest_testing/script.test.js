const googleSearch = require('./script');

dbMock = [
  'dogs.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
]

it("is running", () => {
  expect(googleSearch("dogs", dbMock)).toExist;
});

it("it is working", () => {
  expect(googleSearch("dog", dbMock)).toEqual(['dogs.com', 'dogpictures.com']);
});