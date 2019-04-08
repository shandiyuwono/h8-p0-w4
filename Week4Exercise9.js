function checkAB(num) {
    // you can only write your code here!
    var indexA = []
    var indexB = []

    for(var i = 0; i <= num.length-1; i++) {
        if(num[i] === "a") {
            indexA.push(i)
        } else if(num[i] === "b") {
            indexB.push(i)
        }
    }

    var selisih = []

    for(var i = 0; i <= indexA.length-1; i++) {
        for(var j = 0; j <= indexB.length-1;j++) {
            selisih.push(Math.abs(indexA[i] - indexB[j]))
        }
    }

    for(var i = 0; i <= selisih.length-1; i++) {
        if(selisih[i] === 4){
            return true
        } 
    }
    return false 
   
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false