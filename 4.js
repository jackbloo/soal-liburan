/*
GET COORDINATES
=======================

fungsi getCoordinates adalah sebuah fungsi untuk mendapatkan koordinat
dari setiap titik "x". Output yang dikembalikan pada fungsi ini adalah
sebuah array dengan koordinat dengan format "<huruf><angka>" pada board.

EXAMPLE:
var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", " ", " ", " "],
  ["3", "x", " ", " "],
]
console.log(getCoordinates(array))
// ["B1", "A3"]
*/
function getCoordinates(arr) {
  // code below here
  var result = [];
    if(arr.length === 4){
 for(i = 3; i < arr.length; i++){
    if(arr[1][1] === "x"){
      result.push('A1')
    }
    if(arr[1][2] === "x"){
      result.push('B1')
    }
    if(arr[1][3] === "x"){
      result.push('C1')
    }
    if(arr[2][1] === "x"){
      result.push('A2')
    }
    if(arr[2][2] === "x"){
      result.push('B2')
    }
    if(arr[2][3] === "x"){
      result.push('C2')
    }
    if(arr[3][1] === "x"){
      result.push('A3')
    }
    if(arr[3][2] === "x"){
      result.push('B3')
    }
    if(arr[3][3] === "x"){
      result.push('C3')
    }
  }

}
else if(arr.length === 5){
 for(i = arr.length-1; i < arr.length; i++){
    if(arr[1][1] === "x"){
      result.push('A1')
    }
    if(arr[1][2] === "x"){
      result.push('B1')
    }
    if(arr[1][3] === "x"){
      result.push('C1')
    }
    if(arr[1][4] === "x"){
      result.push('D1')
    }
    if(arr[2][1] === "x"){
      result.push('A2')
    }
    if(arr[2][2] === "x"){
      result.push('B2')
    }
    if(arr[2][3] === "x"){
      result.push('C2')
    }
    if(arr[2][4] === "x"){
      result.push('D2')
    }
    if(arr[3][1] === "x"){
      result.push('A3')
    }
    if(arr[3][2] === "x"){
      result.push('B3')
    }
    if(arr[3][3] === "x"){
      result.push('C3')
    }
    if(arr[3][4] === "x"){
      result.push('D3')
    }
    if(arr[4][1] === "x"){
      result.push('A4')
    }
    if(arr[4][2] === "x"){
      result.push('B4')
    }
    if(arr[4][3] === "x"){
      result.push('C4')
    }
    if(arr[4][4] === "x"){
      result.push('D4')
    }
 }
}
  return result
}

var array = [
  [" ", "A", "B", "C", "D"],
  ["1", " ", " ", "x", " "],
  ["2", " ", "x", " ", " "],
  ["3", " ", " ", " ", "x"],
  ["4", " ", " ", "x", " "],
]
console.log(getCoordinates(array))
// [ 'C1', 'B2', 'D3', 'C4' ]

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"],
]
console.log(getCoordinates(array2))
// [ 'A1', 'C1', 'B2', 'A3', 'C3' ]
