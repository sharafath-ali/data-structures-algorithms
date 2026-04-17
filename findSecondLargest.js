function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    if (secondLargest === -Infinity) {
        return null; // All elements are the same
    }
    return secondLargest;
}

// Example usage:
const numbers = [-30, -7, -2, -9, -5];
console.log(findSecondLargest(numbers)); // Output: 7