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
console.log("print left aligned right triangle with row numbers")
console.log("--------------------------------")

function printLeftAlignedRightTriangleWithRowNumbers(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + " " + j;
    }
    console.log(row);
  }
}

printLeftAlignedRightTriangleWithRowNumbers(5);

console.log("--------------------------------");
console.log("print left aligned right triangle with column numbers");
console.log("--------------------------------");

function printLeftAlignedRightTriangleWithColumnNumbers(num) {
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + " " + i;
    }
    console.log(row);
  }
}

printLeftAlignedRightTriangleWithColumnNumbers(5);

console.log("--------------------------------");
console.log("print left aligned upside down right triangle with row numbers");
console.log("--------------------------------");


function printLeftAlignedInvertedRightTriangleWithRowNumbers(num) {
  for (var i = 0; i < num; i++) {
    var row = "";
    for (var j = 0; j < num-i; j++) {
      row = row + " " + (j+1);
    }
    console.log(row);
  }
}

printLeftAlignedInvertedRightTriangleWithRowNumbers(5);


function printLeftAlignedInvertedRightTriangle(num) {
  for (var i = 0; i < num; i++) {
    var row = "";
    for (var j = 0; j < num - i; j++) {
      row = row + " " + ("*");
    }
    console.log(row);
  }
}

console.log("--------------------------------");
console.log("print left aligned upside down right triangle");
console.log("--------------------------------");
printLeftAlignedInvertedRightTriangle(5);

function printrightAlignedInvertedRightTriangle(num) {
  for (var i = 0; i < num; i++) {
    var row = "";
    for (var j = 0; j <= num; j++) {
      if (j < num - i) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }
    console.log(row);
  }
}

console.log("--------------------------------");
console.log("print right aligned upside down right triangle");
console.log("--------------------------------");
printrightAlignedInvertedRightTriangle(6);