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

it("works with undefines  and null input", () => {
  expect(googleSearch(undefined, dbMock)).toEqual([]);
  expect(googleSearch(null, dbMock)).toEqual([]);
});