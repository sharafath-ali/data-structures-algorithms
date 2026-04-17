function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Example usage (array must be sorted)
const sortedArray = [10, 20, 30, 40, 50];
const target = 30;
const result = binarySearch(sortedArray, target);
console.log(`Element ${target} found at index: ${result}`); // Output: Element 30 found at index: 2

const notFound = binarySearch(sortedArray, 60);
console.log(`Element 60 found at index: ${notFound}`); // Output: Element 60 found at index: -1