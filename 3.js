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
        console.log(resultB)
        
    }if (cars[i] === 'D'){
        resultD += 1
        console.log(resultD)
        
    }if (cars[i] === 'A'){
        resultA += 1
        console.log(resultA)
        
    }if (cars[i] === 'C'){
        resultC += 1
        console.log(resultC)
        
    }
  }
  b.push(resultB/cars.length*100)
  d.push(resultD/cars.length*100)
  a.push(resultA/cars.length*100)
  c.push(resultC/cars.length*100)
  total.push(b)
  total.push(d)
  total.push(a)
  total.push(c)
  return total
};
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