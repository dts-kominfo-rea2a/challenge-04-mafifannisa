const { dates, createDate } = require("./index.js");

const mockDates = ["2022-01-01 UTC+7", "2021-12-31 00:00:00 UTC+2"];

describe("Test Case #1", () => {
  it("test case using mock data", () => {
    expect(typeof createDate).toBe("function");

    expect(createDate(mockDates)).toBe("1640901600-1640970000");
    expect(createDate(mockDates, 0)).toBe("1640970000");
    expect(createDate(mockDates, 1)).toBe("1640901600");
  });
});