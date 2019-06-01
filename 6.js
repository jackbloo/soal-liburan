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
  // code below here
  var all1 = []
  var strings = strNum.split('-')
  console.log(strings)
  var sum = 0
  var sum2 = 0
    for (var i = 0; i < strings.length; i++ ){
        var sub = strings[i].split('+')
        console.log('kerja bagai kuda ' + sub)
        console.log('\n')
      for(var j = i; j < strings.length-1; j++){
        sum += (-strings[j]);
        console.log('cara kerjanya ' + sum)
        console.log('\n')
      }
  sum2 += (+sub[i])
  console.log('oye ' + sum2)
  console.log('\n')

}
all1.push(sum)
all1.push(sum2)
console.log(all1)
var all3 = all1[0] + all1[1]
return all3
}

console.log(calculateNumber("1+10+100")) // 111
console.log(calculateNumber("100")) // 100
console.log(calculateNumber("200-200+100")) // 100