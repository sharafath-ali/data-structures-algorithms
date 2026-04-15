function isPalindromeNumber(num) {
  if (num < 0) {
    return false;
  }
  const number = num
  let reverse = 0
  while (num > 0) {
    let rem = num % 10
    reverse = (reverse * 10) + rem;
    num = Math.floor(num / 10);
  }

  if (number === reverse) {
    return true
  } else {
    return false
  }
}

// Example usage
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false
console.log(isPalindromeNumber(-1221)); // false
console.log(isPalindromeNumber(10)); // false
console.log(isPalindromeNumber(0)); // true 