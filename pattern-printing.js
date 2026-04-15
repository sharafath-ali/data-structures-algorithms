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

function printSquare(num){
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= num; j++) {
      row = row + " * "
    }
    console.log(row)
  }
}

printSquare(4)