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