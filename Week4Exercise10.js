function changeMe(arr) {
    // you can only write your code here!
    
    if(arr.length < 1) {
        console.log("\"\"")
    }

    else{ 
    if(arr[0][3] > 2019 || arr[0] === "") {
        var age = "Invalid Birth Year"
    } else {
        var age = 2019 - arr[0][3]
    }
    
    arr1 = {
        firstName: arr[0][0],
        lastName: arr[0][1],
        gender: arr[0][2],
        age: age  
    }

    arr2 = {
        firstName: arr[1][0],
        lastName: arr[1][1],
        gender: arr[1][2],
        age: age 
    }
    console.log("1. " + arr[0][0] + " " + arr[0][1] + ":")
    console.log(arr1)

    console.log("2. " + arr[1][0] + " " + arr[1][1] + ":")
    console.log(arr2)
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

