function countDigits(num) {
  var number = Math.abs(num)
  if (num === 0) {
    return 1;
  }

  var count = 0

  console.log(number)
  while (number > 0) {
    number = Math.floor(number / 10)
    count++
  }

  return count

}

var count = countDigits(-88999)
console.log(count)