function urutkanAbjad(str) {
    // you can only write your code here!
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var strSplit = str.split("")

    for(var i = 0; i <= strSplit.length-1; i++) {
      for(var j = 0; j <= strSplit.length-i-2; j++) {
        if(alphabet.indexOf(strSplit[j]) > alphabet.indexOf(strSplit[j+1])) {
          var temp = strSplit[j]
          strSplit[j] = strSplit[j+1]
          strSplit[j+1] = temp
        }
       
      }
    }

    return strSplit.join("")
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'