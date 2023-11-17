/*KEY POINTS --- 
1. Sends the SMALLEST to the beginning of an array instead of sending the largest elements up
2. For the same reason as bubbleSort selection sort is not efficient 
3. Time complexity of selection sort is O(n^2)
*/

/*PSUEDO --- 
1. Set MIN to location 0.
2. Search the minimum element in the list.
3. Swap with value at location MIN.
4. Increment MIN to point to next element.
5. Repeat until list is sorted.
*/

let array = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

const selectionSort = (arr) => {
  //iterate the array starting at index 0
  for (let i = 0; i < arr.length; i++) {
    //minIndex = 0
    let minIndex = i;
    //compare to the next value j
    for (let j = i + 1; j < arr.length; j++) {
      //if j < minIndex the minIndex is then j
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //minIndex has been updated and no longer equals i so a swap is set
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  //return arr at the end of iterations
  return arr;
};

console.log(selectionSort(array));
