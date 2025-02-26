import {
  addLailaToArray,
  eliminateTeam,
  isArrayLengthEven,
  isArrayLengthOdd,
} from "../arrays";

describe("Array and String Manipulation Functions", () => {
  describe("isArrayLengthOdd", () => {
    it("returns true if the array length is odd", () => {
      expect(isArrayLengthOdd([1, 2, 3])).toBe(true);
    });

    it("returns false if the array length is even", () => {
      expect(isArrayLengthOdd([1, 2, 3, 4])).toBe(false);
    });
  });

  describe("isArrayLengthEven", () => {
    it("returns true if the array length is even", () => {
      expect(isArrayLengthEven([1, 2, 3, 4])).toBe(true);
    });

    it("returns false if the array length is odd", () => {
      expect(isArrayLengthEven([1, 2, 3])).toBe(false);
    });
  });

  describe("addLailaToArray", () => {
    it('adds "Laila" to the end of the array', () => {
      const instructors = ["Mshary", "Hasan"];
      addLailaToArray(instructors);
      expect(instructors).toEqual(["Mshary", "Hasan", "Laila"]);
    });

    it("returns the modified array", () => {
      expect(addLailaToArray(["Mshary", "Hasan"])).toEqual([
        "Mshary",
        "Hasan",
        "Laila",
      ]);
    });
  });

  describe("eliminateTeam", () => {
    it("returns the last element from the array ", () => {
      const teams = ["Brazil", "Germany", "Italy"];
      expect(eliminateTeam(teams)).toBe("Italy");
    });

    it("removes the last element from the array", () => {
      const teams = ["Brazil", "Germany", "Italy"];
      eliminateTeam(teams);
      expect(teams).toEqual(["Brazil", "Germany"]);
    });
  });
});
