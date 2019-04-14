function changeMe(arr) {
    // you can only write your code here!

    for(var i = 0; i <= arr.length-1; i++) {
        console.log( i + 1 + ". " + arr[i][0] + " " +  arr[i][1] + ":")
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: 0
        }

        if(arr[i][3] === undefined) {
            obj.age = "Invalid Birth Year"
        }
        else {
        obj.age = 2019 - arr[i][3]
        }
    

        console.log(obj)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  // 

  changeMe([]); // ""

