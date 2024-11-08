const { sort } = require("./sort");

const unsortedData = [
  ["2023-06-25 11:00", "1abc.txt"],
  ["2023-06-25 13:00", "01abc.txt"],
];

const expectedSortedData = [
  ["2023-06-25 11:00", "1abc.txt"],
  ["2023-06-25 13:00", "01abc.txt"],
];

test("Sort", () => {
  expect(sort("FILE_NAME_DESC", unsortedData)).toEqual(expectedSortedData);
});
