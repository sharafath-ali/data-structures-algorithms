function findBiggestNumber(arr) {
  if (arr.length === 0) {
    return null; // or throw an error, depending on requirements
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const numbers = [-3, 12, 0, -9, 5];
console.log(findBiggestNumber(numbers)); // Output: 12