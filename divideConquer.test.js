// const divideConquer = require("./divideConquer");
const { countZeroes, sortedFrequency, findRotatedIndex, findRotationCount, findFloor } = require("./divideConquer.js");

describe("#divideConquer functions", function () {

  it("is a function", function () {
    expect(typeof countZeroes).toEqual("function");
  });

  it("is a function", function () {
    expect(typeof sortedFrequency).toEqual("function");
  });

  it("is a function", function () {
    expect(typeof findRotatedIndex).toEqual("function");
  });

  it("is a function", function () {
    expect(typeof findRotationCount).toEqual("function");
  });

  it("is a function", function () {
    expect(typeof findFloor).toEqual("function");
  });

});

describe("countZeroes tests", () => {

  // countZeroes([1,1,1,1,0,0]) // 2
  // countZeroes([1,0,0,0,0]) // 4
  // countZeroes([0,0,0]) // 3
  // countZeroes([1,1,1,1]) // 0

  test("countZeroes([1,1,1,1,0,0]) // 2 returns 2", () => {
    expect(countZeroes([1, 1, 1, 1, 0, 0])).toEqual(2);
  });

  test("countZeroes([1,0,0,0,0]) // 4 returns 4", () => {
    expect(countZeroes([1, 0, 0, 0, 0])).toEqual(4);
  });

  test("countZeroes([0,0,0]) // 3 returns 3", () => {
    expect(countZeroes([0, 0, 0])).toEqual(3);
  });

  test("countZeroes([1,1,1,1]) returns 0", () => {
    expect(countZeroes([1, 1, 1, 1])).toEqual(0);
  });

});

describe("sortedFrequency tests", () => {

  // sortedFrequency([1,1,2,2,2,2,3],2) // 4
  // sortedFrequency([1,1,2,2,2,2,3],3) // 1
  // sortedFrequency([1,1,2,2,2,2,3],1) // 2
  // sortedFrequency([1,1,2,2,2,2,3],4) // -1

  test("sortedFrequency of ([1,1,2,2,2,2,3],2) returns 4", () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toEqual(4);
  });

  test("sortedFrequency of ([1,1,2,2,2,2,3],3) returns 1", () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toEqual(1);
  });

  test("sortedFrequency of ([1,1,2,2,2,2,3],1) returns 2", () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toEqual(2);
  });

  test("sortedFrequency of ([1,1,2,2,2,2,3],4) returns -1", () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toEqual(-1);
  });

});


describe("findRotatedIndex tests", () => {

  // findRotatedIndex([3, 4, 1, 2],4) // 1
  // findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
  // findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
  // findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
  // findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

  test("findRotatedIndex not implemented -> findRotatedIndex of ([3, 4, 1, 2],4) returns 1", () => {
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toEqual(1);
  });

  test("findRotatedIndex not implemented -> findRotatedIndex of ([6, 7, 8, 9, 1, 2, 3, 4], 8) returns 1", () => {
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toEqual(2);
  });

  test("findRotatedIndex not implemented -> findRotatedIndex of ([6, 7, 8, 9, 1, 2, 3, 4], 3) returns 6", () => {
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toEqual(6);
  });

  test("findRotatedIndex not implemented -> findRotatedIndex of ([37, 44, 66, 102, 10, 22], 14) returns -1", () => {
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toEqual(-1);
  });

  test("findRotatedIndex not implemented -> findRotatedIndex of ([6, 7, 8, 9, 1, 2, 3, 4], 12) 1 returns -1", () => {
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toEqual(-1);
  });

});


describe("findRotationCount tests", () => {

  // findRotationCount([15, 18, 2, 3, 6, 12]) // 2
  // findRotationCount([7, 9, 11, 12, 5]) // 4
  // findRotationCount([7, 9, 11, 12, 15]) // 0

  test("findRotationCount not implemented -> findRotationCount of ([15, 18, 2, 3, 6, 12]) returns 2", () => {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toEqual(2);
  });

  test("findRotationCount not implemented -> findRotationCount of ([7, 9, 11, 12, 5]) returns 4", () => {
    expect(findRotationCount([7, 9, 11, 12, 5])).toEqual(4);
  });

  test("findRotationCount not implemented -> findRotationCount of ([7, 9, 11, 12, 15]) returns 0", () => {
    expect(findRotationCount([7, 9, 11, 12, 15])).toEqual(0);
  });

});


describe("findFloor tests", () => {

  // findFloor([1,2,8,10,10,12,19], 9) // 8
  // findFloor([1,2,8,10,10,12,19], 20) // 19
  // findFloor([1,2,8,10,10,12,19], 0) // -1

  test("findFloor of ([1,2,8,10,10,12,19], 9) is 8", () => {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 9)).toEqual(8);
  });

  test("findFloor of ([1,2,8,10,10,12,19], 20) is 19", () => {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toEqual(19);
  });

  test("findFloor of ([1,2,8,10,10,12,19], 0) is -1", () => {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toEqual(-1);
  });


});



// describe("test thrown errors", () => {

//   const squareIsh = [
//     [1, 2, 3, 4],
//     [5, 6, 7],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];

//   test("An empty array throws an Empty array error", () => {

//     const unrollWrapper = () => {
//       unroll([]);
//     }

//     expect(unrollWrapper).toThrowError(new Error("ERROR: Array is empty."));

//   });

// });
