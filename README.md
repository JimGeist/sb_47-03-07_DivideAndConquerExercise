# sb_47-03-07_DivideAndConquerExercise
 
## Technology Stack
- **Front-end**: n/a
- **Back-end**: n/a

## Assignment Details

Assignment involved utilizing a 'divide and conquer' approach to coding challenges involving arrays. It looks like when the time complexity constraint is `O(log n)`, the solution has to involve a binary search.

`findRotatedIndex` and `findRotationCount` functions were not implemented. I find it pretty lousy that the school solution for this entire assignment utilized recursion when recursion was yet covered -- recursion is covered in 47-06. The solution provided for this unit SHOULD NOT HAVE UTILIZED RECURSION. 


### countZeros
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called `countZeroes`, which returns the number of zeroes in the array.

A binary search. The catch was that even though the 'window' moved and got smaller as it usually does, the end point for purposes of calculating the count of zeros had to remain the length of the input array.


### sortedFrequency
Given a sorted array and a number, write a function called `sortedFrequency` that counts the occurrences of the number in the array

Another tweak on the binary search and also a strong case for testing! The tweak is that if the value is found, we then need to look at values before the current index and after the current index and increment the counter while the value matches the value we are determining the frequency for.


### findRotatedIndex
Write a function called `findRotatedIndex` which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

**function skipped**
A binary search is involved somehow. The split had to get determined (somehow). I was curious and took a look at the solution, and as I said above, the solution should not have been a recursive solution.


### findRotationCount
Write a function called `findRotationCount` which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

**function skipped**
A binary search is involved somehow. The solution should not have been a recursive solution.


### findFloor
Write a function called `findFloor` which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Yet again, a binary search. The trick was that when the 'search' window shifted right because the midpoint value was less than x, we need to at least retain that value as a possible floor.



## Additional Details

**Enhancements**
- None.

**Difficulties**
- Again, it just stunk to get stuck and turn to the solution to see that the solution provided by the school is not applicable to this assignment since recursion has not yet been covered. 


