import { calculation, sum } from "./challenge";

describe("calculation function", () => {
  test("calculate the correct fuel requirement", () => {
    expect(calculation(12)).toBe(2);
    expect(calculation(14)).toBe(2);
    expect(calculation(1969)).toBe(654);
    expect(calculation(100756)).toBe(33583);
  });

  describe("sum function", () => {
    test("return the correct sum of an array of numbers", () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });
  });
});
