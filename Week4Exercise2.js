function fpb(angka1, angka2) {
    // you can only write your code here!
    var angka1Faktor = []
    var angka2Faktor = []
    var faktorTotal = []
    for(var i = 1; i <= angka1; i++) {
        if(angka1 % i === 0) {
            angka1Faktor.push(i)
        }
    }
    
    for(var i = 1; i <= angka2; i++) {
        if(angka2 % i === 0) {
            angka2Faktor.push(i)
        }
    }

    for(var i = 0; i <= angka1Faktor.length-1; i++) {
        for (var j = 0; j <= angka2Faktor.length-1; j++) {
            if(angka1Faktor[i] === angka2Faktor[j]) {
                faktorTotal.push(angka1Faktor[i])
            }
        }
    }  
    return Math.max.apply(Math, faktorTotal)
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1