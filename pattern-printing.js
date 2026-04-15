// pattern-printing.js
// Example pattern printing functions in JavaScript

console.log("print left aligned right triangle")
console.log("-------------------------------")
function printLeftAlignedRightTriangle(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + "*"
    }
    console.log(row)
  }
}

printLeftAlignedRightTriangle(5)

console.log("--------------------------------")
console.log("print square")
console.log("-------------")

function printSquare(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= num; j++) {
      row = row + " * "
    }
    console.log(row)
  }
}

printSquare(4)


console.log("--------------------------------")
console.log("print left aligned right triangle with numbers")
console.log("--------------------------------")

function printLeftAlignedRightTriangleWithNumbers(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + " " + j
    }
    console.log(row)
  }
}

printLeftAlignedRightTriangleWithNumbers(5)


console.log("--------------------------------")
console.log("print left aligned right triangle with row numbers")
console.log("--------------------------------")

function printLeftAlignedRightTriangle2WithNumbers(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + " " + i
    }
    console.log(row)
  }
}

printLeftAlignedRightTriangle2WithNumbers(5)