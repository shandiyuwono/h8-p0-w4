function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here


    var arr = []

    for(var i = 0; i <= arrPenumpang.length-1; i++) {
        var bayar = 0
        var obj = {}
        for(var j = 0; j <= arrPenumpang[i].length-1; j++) {
            bayar = Math.abs((rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]))) * 2000
            obj["penumpang"] = arrPenumpang[i][0]
            obj["naikDari"] = arrPenumpang[i][1]
            obj["tujuan"] = arrPenumpang[i][2]
            obj["bayar"] = bayar
        }
        arr.push(obj)   
    }
    return arr
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]