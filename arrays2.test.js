const {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
} = require("./arrays2.js");

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
      expect(addLailaToArray(["Mshary", "Hasan"])).toEqual([
        "Mshary",
        "Hasan",
        "Laila",
      ]);
    });
  });

  describe("eliminateTeam", () => {
    it("removes the last element from the array and returns it", () => {
      const teams = ["Brazil", "Germany", "Italy"];
      expect(eliminateTeam(teams)).toBe("Italy");
      expect(teams).toEqual(["Brazil", "Germany"]);
    });
  });

  describe("secondHalfOfArrayIfItIsEven", () => {
    it("returns the second half of the array if the length is even", () => {
      expect(
        secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"])
      ).toEqual(["banana", "kiwi"]);
    });

    it("returns an empty array if the length is odd", () => {
      expect(
        secondHalfOfArrayIfItIsEven([
          "apple",
          "orange",
          "banana",
          "kiwi",
          "blueberry",
        ])
      ).toEqual([]);
    });
  });

  describe("youGottaCalmDown", () => {
    it("returns the string with at most one exclamation mark at the end", () => {
      expect(youGottaCalmDown("HI!!!!!!!!!!")).toBe("HI!");
      expect(youGottaCalmDown("Taylor Schwift!!!!!!!!!!!")).toBe(
        "Taylor Schwift!"
      );
      expect(youGottaCalmDown("Hellooooo")).toBe("Hellooooo");
    });
  });
});
