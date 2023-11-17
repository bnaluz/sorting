/*Keypoints ---
1. Quicksort uses divide and conquer strategy 
2. Easy to sort elements in an array relative to particular target value
3. Array length of 0 || 1 are sorted
*/

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

let array = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log(quickSort(array));
