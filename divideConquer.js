
function countZeroes(inArr) {
    /*
    Given an array of 1s and 0s which has all 1s first followed by all 0s, 
    write a function called countZeroes, which returns the number of zeroes 
    in the array.

    Constraints: Time Complexity: O(log N) <- that means binary searches!

    Examples:
    countZeroes([1,1,1,1,0,0]) // 2
    countZeroes([1,0,0,0,0]) // 4
    countZeroes([0,0,0]) // 3
    countZeroes([1,1,1,1]) // 0
    */

    let idxStart = 0;
    let idxEnd = inArr.length - 1;
    let idx;
    let runaway = 0;

    while ((idxStart <= idxEnd) && (runaway < 20)) {

        idx = Math.floor((idxStart + idxEnd) / 2)

        // move to the next section of the array.
        // REMEMBER the 1's come first THEN zeros
        //      0   1   2   3   4        
        //      1,  0,  0,  0,  0
        //      s       m       e  s0, e4, m2 new start is (0+2)/2), end is 2
        //          s,m e          s1, e2, m1
        // The trick is the window moves, but the complete array length is used
        //  when calculating number of 0's.
        if (inArr[idx] > 0) {
            // move to the right
            idxStart = idx + 1;
        } else {
            // Whe array has 1's followed by 0's
            // We found a 0, but we need to find the 
            //  FIRST 0
            if (idx === 0) {
                // we are at the start of the array, and the element is 0
                return inArr.length;
            } else {

                // look at value at (idx - 1). If it's 1, we're done.
                if (inArr[idx - 1] === 1) {
                    return inArr.length - idx;
                } else {
                    // move the starting point to the left, halfway
                    //  between 0 and current idx, end is idx
                    idxStart = Math.floor((0 + idx) / 2);
                    idxEnd = idx;
                }
            }
        }

        runaway++;
    }

    return 0;
}

function sortedFrequency(inArr, nbrToFindFreq) {
    /*
    Given a sorted array and a number, write a function called sortedFrequency that counts 
    the occurrences of the number in the array.

    Constraints: Time Complexity: O(log N) <- that means binary searches!

    Examples:
    sortedFrequency([1,1,2,2,2,2,3],2) // 4
    sortedFrequency([1,1,2,2,2,2,3],3) // 1
    sortedFrequency([1,1,2,2,2,2,3],1) // 2
    sortedFrequency([1,1,2,2,2,2,3],4) // -1
    */

    let idxStart = 0;
    let idxEnd = inArr.length - 1;
    let idx;
    let ctr = 0;
    let runaway = 0;

    while ((idxStart <= idxEnd) && (runaway < 20)) {

        idx = Math.floor((idxStart + idxEnd) / 2)

        // binary search, once nbrToFindFreq is found, start count loop.

        if (inArr[idx] === nbrToFindFreq) {
            ctr++;

            // count up elements before idx and after idx
            let idxHold = idx;
            idx--;
            while (idx > -1) {
                if (inArr[idx] === nbrToFindFreq) {
                    ctr++;
                } else {
                    // end the while
                    idx = -1;
                }

                idx--;
            }

            idx = idxHold + 1;
            while (idx < inArr.length - 1) {
                if (inArr[idx] === nbrToFindFreq) {
                    ctr++;
                } else {
                    // end the while
                    idx = inArr.length;
                }

                idx++;
            }

            return ctr;
        } else {
            // move window
            if (inArr[idx] < nbrToFindFreq) {
                // move window to the right
                idxStart = idx + 1;
            } else {
                // move window to the left
                idxEnd = idx - 1;
            }
        }

        runaway++;
    }

    return -1;

}


function findRotatedIndex(inArr, nbr) {
    /*
    Write a function called findRotatedIndex which accepts a rotated array of 
    sorted numbers and an integer. The function should return the index of num 
    in the array. If the value is not found, return -1.

    Constraints: Time Complexity: O(log N) <- that means binary searches!

    Examples:
    findRotatedIndex([3, 4, 1, 2], 4) // 1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
    findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
    
    */

    // get the start, middle and end values

    let idxStart = 0;
    let idxEnd = inArr.length - 1;
    let idx;
    let runaway = 0;

    while ((idxStart <= idxEnd) && (runaway < 20)) {

        idx = Math.floor((idxStart + idxEnd) / 2)

        runaway++;
    }

    return -1;

}


function findRotationCount(inArr) {
    /*
    Write a function called findRotationCount which accepts an array of distinct 
    numbers sorted in increasing order. The array has been rotated counter-clockwise 
    n number of times. Given such an array, find the value of n.

    Constraints: Time Complexity: O(log N) <- that means binary searches!

    Examples:
    findRotationCount([15, 18, 2, 3, 6, 12]) // 2
    findRotationCount([7, 9, 11, 12, 5]) // 4
    findRotationCount([7, 9, 11, 12, 15]) // 0
    
    */

    let idxStart = 0;
    let idxEnd = inArr.length - 1;
    let idx;
    let runaway = 0;

    while ((idxStart <= idxEnd) && (runaway < 20)) {

        idx = Math.floor((idxStart + idxEnd) / 2)

        runaway++;
    }

    return 0;

}


function findFloor(inArr, value) {
    /*
    Write a function called findFloor which accepts a sorted array and a value x, and 
    returns the floor of x in the array. The floor of x in an array is the largest element 
    in the array which is smaller than or equal to x. If the floor does not exist, return -1.

    Constraints: Time Complexity: O(log N) <- that means binary searches!

    Examples:
    findFloor([1,2,8,10,10,12,19], 9) // 8
    findFloor([1,2,8,10,10,12,19], 20) // 19
    findFloor([1,2,8,10,10,12,19], 0) // -1
    */

    let idxStart = 0;
    let idxEnd = inArr.length - 1;
    let idx;
    let runaway = 0;

    let floor = -1;

    while ((idxStart <= idxEnd) && (runaway < 20)) {

        idx = Math.floor((idxStart + idxEnd) / 2)

        if (inArr[idx] === value) {
            return value;
        } else {
            // move the window
            if (inArr[idx] > value) {
                // shift the winow left
                idxEnd = idx - 1;
            } else {
                // shift right, but remember value at idx
                if (inArr[idx] > floor) floor = inArr[idx];
                idxStart = idx + 1;
            }

        }
        runaway++;
    }

    return floor;

}


function binarySearch(inArr, searchFor) {

    // Array must be sorted for a binary search.

    // Steps:
    // Look at the middle value of in the array
    // if the middle value matches, end
    // if the middle value is too big, eliminate all values to the right of middle
    // if the middle value is too small, eliminate all values to the left of middle
    // position to the correct 'half' and repeat

    // the key is to average the start and end indexes.

    let runaway = 0;

    let idxStart = 0;
    let idxEnd = inArr.length - 1;
    let idx;

    //  idx: 0     1     2     3     4     5
    //       10    20    30    40    50    60     want 10
    //       s           m                 e        Is 30 > 10? YES end becomes M - 1
    //       s,m    e                               middle idx is floor ((s + e) / 2), floor of 0.5 which is 0    
    //                                            10 === 10, return middle idx
    //       10    20    30    40    50    60     want 40                 
    //       s           m                 e        30 != 40; is 30 > 40? NO, start becomes mid idx + 1
    //                         s     m     e        50 != 30; is 50 > 40? YES, end becomes mid idx -1
    //                         s,e                  start, middle, end indexes are all at 3 and 40 = 40
    //                                            want 45, picking up from above, start, end, middle are all at 3     
    //                         s,e,m                40 != 45; is 40 > 45? NO start becomes mid idx + 1
    //                         e     s              once start and end cross each other, the loop needs to end

    while ((idxStart <= idxEnd) && (runaway < 25)) {

        idx = Math.floor((idxEnd + idxStart) / 2);

        // Look at the middle value of in the array
        if (inArr[idx] === searchFor) {
            // if the middle value matches, end
            return idx;
        } else {
            // split

            if (inArr[idx] > searchFor) {
                // if the middle value is too big, eliminate all values to the right of middle
                // position to the correct 'half' and repeat
                idxEnd = idx - 1;
            } else {
                // if the middle value is too small, eliminate all values to the left of middle
                // position to the correct 'half' and repeat
                idxStart = idx + 1
            }
        }

        runaway++;
    }

    // searchFor was not found in the array.
    // console.log("runaway=", runaway);

    return -1;

}

module.exports = {
    countZeroes,
    sortedFrequency,
    findRotatedIndex,
    findRotationCount,
    findFloor,
    binarySearch
}
