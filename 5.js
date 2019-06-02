/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/

function palindrome(str) {

  var len = str.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ ) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }

  return true;
}

function palindromeChanger(numbers) {
// code below here
newArr = []
for( i = 0; i < numbers.length; i++){
  var cond = true
while(cond === true){
for(j = 0; j < numbers.length; j++){
  numbers[j] = '' + numbers[j]
}
  if(palindrome(numbers[i]) === true ){
    cond = false
    numbers[i] = +numbers[i]
    newArr[newArr.length] = (parseInt(numbers[i]))
  } else {
   numbers[i]++
}
}
}
      return newArr
}

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]


