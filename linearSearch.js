function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage
const array = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(array, target);
console.log(`Element ${target} found at index: ${result}`); // Output: Element 30 found at index: 2

const notFound = linearSearch(array, 60);
console.log(`Element 60 found at index: ${notFound}`); // Output: Element 60 found at index: -1