/*KEYPOINTS ---
1. Insertion sort gradually builds up a larger and larger sorted region at the left-most end of the array
2. Focuses on sorting each element in the order they appear from left to right regardless of value - then inserting them into the most appropriate position in the already sorted region
3. Time complexity of O(n) 
*/

/*PSUEDO ---
1. If it is the first element, it is already sorted; return 1.
2. Pick next element.
3. Compare with all elements in the sorted sub-list.
4. Shift all the elements in the sorted sub-list that is greater than the value
  to be sorted.
5. Insert the value.
6. Repeat until list is sorted.
*/

let array = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

const insertionSort = (arr) => {
  //iterate the array starting after 0
  for (let i = 1; i < arr.length; i++) {
    //currVal index1
    let currentValue = arr[i];
    let j;
    //starting at 0
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort(array));
