function reverseNumber(num) {
  var isnegative = false;
  if (num < 0) {
    isnegative = true;
    num = Math.abs(num);
  }
  let reverse = 0;
  while (num > 0) {
    let rem = num % 10;
    reverse = (reverse * 10) + rem;
    num = Math.floor(num / 10);
  }
  if (isnegative) {
    reverse = -reverse;
  }
  return reverse;
}

// Example usage
console.log(reverseNumber(-123)); // -321
console.log(reverseNumber(121)); // 121
console.log(reverseNumber(100)); // 1