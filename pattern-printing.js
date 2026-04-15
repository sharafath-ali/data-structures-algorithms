// pattern-printing.js
// Example pattern printing functions in JavaScript

function printLeftAlignedRightTriangle(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + "*"
    }
    console.log(row)
  }
}

printLeftAlignedRightTriangle(7)


console.log("print sqaure")

function printsqaure(num){
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= num; j++) {
      row = row + "*"
    }
    console.log(row)
  }
}

printsqaure(4)