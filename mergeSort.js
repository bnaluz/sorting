/*KEYPOINTS --- 
1. Better time complexity sort 
2. Easy to merge elements of 2 sorted arrays into single sorted array 
3. Single element arrays are already sorted 
4. Empty arrays are sorted
*/

let array = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

function mergeSort(arr) {
  let copy = [...arr];

  if (copy.length < 2) return copy;

  const half = copy.length / 2;

  const left = copy.splice(0, half);
  //the right half is now the remainder in copy

  return merge(mergeSort(left), mergeSort(copy));
}

// Takes in two sorted arrays and returns them merged into one
function merge(arr1, arr2) {
  let arr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }
  let result = [...arr, ...arr1, ...arr2];
  return result;
}

console.log(mergeSort(array));
