/*

CALCULATE NUMBER
================

Calculate number adalah sebuah fungsi untuk melakukan operasi matematika.
Fungsi akan menerima input berupa persamaan matematika dan mengembalikan nilai
berupa hasil kalkulasi.

RULES:
  - fungsi hanya menghandle operasi tambah dan kurang saja
  - fungsi dapat menerima angka satuan, puluhan, dan ratusan

EXAMPLE:
  console.log(calculateNumber("2+3+4+5-4-3-2"))
  OUTPUT: 5

*/



function calculateNumber(strNum) {
  var plusArr = []
  var totalPlus = 0
  var minArr = []
  var totalMin = 0
  var minArrNew = []
  var result = []
  var strings = strNum.split('+')
  console.log('habis split plus ' + strings)
  for (i = 0; i < strings.length; i++) {
    if (!isNaN(strings[i])) {
      plusArr.push(strings[i])
      console.log('ini plus ' + plusArr)
    } else {
      minArr.push(strings[i])
      console.log(minArr)
      minArrNew = minArr[i].split('-')
      console.log('ini min ' + minArrNew)
      totalMin = parseInt(minArrNew[0] - minArrNew[1])
      console.log('ini total min ' + totalMin)
    }
  }
  for (j = 0; j < plusArr.length; j++) {
    totalPlus += parseInt(plusArr[j])
    console.log('ini yang plus ' + totalPlus)
  }
  result = totalPlus + totalMin
  return result
}

console.log(calculateNumber("1+10+100")) // 111
console.log(calculateNumber("100")) // 100
console.log(calculateNumber("200-200+100")) // 100