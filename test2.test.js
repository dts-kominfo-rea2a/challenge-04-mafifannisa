const { dates, createDate } = require("./index.js");

describe("Test Case #2", () => {
  it("test case using real data", () => {
    expect(createDate(dates, 1)).toBe("1651802400");
    expect(createDate(dates, 4)).toBe("1580662800");
    expect(createDate(dates)).toBe(
      "1546387200-1580662800-1614841200-1617573600-1651802400"
    );
  });
});
