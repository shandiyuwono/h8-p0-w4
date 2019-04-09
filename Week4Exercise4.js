function cariModus(arr) {
    // you can only write your code here!

    mode = 0
    count = 0
    for(var i = 0; i <= arr.length-1; i++){
        count2 = 0
        for(var j = 0; j <= arr.length-1; j++) {
            if(arr[j] === arr[i]) {
                count2++
                if(count2 > count) {
                    count = count2
                    mode = arr[j]
                }
            }   
        }      
    }
    
    if(count <= 1 || count === arr.length) {
        return -1
    }
      return mode  
  }
  
//   // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

