function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    angkaFaktor = []
    for(var i = 1; i <= angka; i++) {
        if(angka % i === 0) {
            angkaFaktor.push(i)
        }
    }
    faktorPasangan = []
    for(var i = 0; i <= angkaFaktor.length-1; i++) {
        faktorPasangan.push(angka / angkaFaktor[i])
    }

    
    var faktorGabungan = []
    
    for(var i = 0; i <= angkaFaktor.length-1; i++) {
        faktorGabungan.push(String(angkaFaktor[i]) + String(faktorPasangan[i]))
    }
    

    var digit = []
    for(var i = 0; i <= faktorGabungan.length-1; i++) {
        digit.push(faktorGabungan[i].length)
    }
    return Math.min.apply(Math,digit) 
  }

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
