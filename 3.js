/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  //code below here
  var b = ['B'];
  var resultB = 0;
  var d = ['D'];
  var resultD = 0;
  var a = ['A'];
  var resultA = 0;
  var c = ['C'];
  var resultC = 0;
  var total =[];
  for(i = 0; i < cars.length; i++){
    if (cars[i] === 'B'){
        resultB += 1
        
    }if (cars[i] === 'D'){
        resultD += 1
        
    }if (cars[i] === 'A'){
        resultA += 1
        
    }if (cars[i] === 'C'){
        resultC += 1
        
    }
  }
  b[b.length] = resultB/cars.length*100
  d[d.length] = resultD/cars.length*100
  a[a.length] = resultA/cars.length*100
  c[c.length] = resultC/cars.length*100
  total[total.length] = b
  total[total.length] = d
  total[total.length] = c
  total[total.length] = a
  return total
}
console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/