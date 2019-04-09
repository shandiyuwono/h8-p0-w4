function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var output = ""
    for(var i = 0; i <= kata.length-1; i++) {
        var indexKata = alphabet.indexOf(kata[i])
        if(kata[i] === "z") {
            output += "a"
        } 
        else{
        output += alphabet[indexKata+1]
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu