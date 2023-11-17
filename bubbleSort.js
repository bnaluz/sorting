/*KEY POINTS ---
1. Bubble Sort almost never used - not efficient 
2. Every movement requires an individual pass through array 
3. Average time complexity of O(n^2)
4. Moves the SMALLEST elements to the beginning of array, and manipulates array by swapping position of the two elements 
 */

/*PSUEDO --- 
1. If the current value is greater than its neighbor to the right
2. Swap those values
3. If you get to the end of the array and no swaps have occurred, return
4. Otherwise, repeat from the beginning
*/

//12345678910
let array = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

const bubbleSort = (arr) => {
  //setting a boolean basecase
  let done = true;

  //iterate through the array
  for (let i = 0; i < arr.length; i++) {
    //check if curr val is greater than neighbor

    if (arr[i] > arr[i + 1]) {
      //if true, swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

      //if we enter the conditional a swap has occured, and we must check if any other swaps need to occur again, set done = false
      done = false;
    }
  }

  //recurse if done is false otherwise return the array
  if (!done) {
    return bubbleSort(arr);
  } else {
    return arr;
  }
};

console.log(bubbleSort(array));
