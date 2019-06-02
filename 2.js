/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 6.3 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/


function sortIqbal(arr){
  var n = arr.length-1
  for(i = 0; i < n; i++){
      for(j = 0; j < n; j++){
          if(arr[j] > arr[j+1]){
              var tampung = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = tampung
          }
      }
    
  }
  return arr
}


function winner (cars, totalKM) {
//code below here
var sisa = []
var sisa1 = []
var newArr = []
for(i = 0; i < cars.length; i++){
sisa = (totalKM - cars[i][2])/cars[i][1]
sisa1[sisa1.length] = [sisa, cars[i][0]]
}
sortIqbal(sisa1)
for(j = 0; j < cars.length; j++){
sisa1[j].shift()
}
for(var k = 0; k < sisa1.length; k++){
newArr = newArr.concat(sisa1[k]);
}
return newArr
};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/