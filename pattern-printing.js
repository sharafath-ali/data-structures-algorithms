// pattern-printing.js
// Example pattern printing functions in JavaScript

function printRightAngledTriangle(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + "*"
    }
    console.log(row)
  }
}

printRightAngledTriangle(7)
