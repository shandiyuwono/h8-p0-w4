function shoppingTime(memberId, money) {
    // you can only write your code here!
    var stacattu = 1500000
    var zoro =  500000
    var hn =  250000
    var unik =  175000
    var handphone = 50000

    if(memberId === "") {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }

    else if(memberId === undefined && money === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }

    else if(money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    }
      
    var listPurchased = []
    var changeMoney = money
    if(money >= stacattu) {
        listPurchased.push("Sepatu Stacattu")
        changeMoney -= stacattu
    }

    if(changeMoney >= zoro) {
        listPurchased.push("Baju Zoro")
        changeMoney -= zoro
    }

    if(changeMoney >= hn) {
        listPurchased.push("Baju H&N")
        changeMoney -= hn
    }

    if(changeMoney >= unik) {
        listPurchased.push("Sweater Uniklooh")
        changeMoney -= unik
    }

    if(changeMoney >= handphone) {
        listPurchased.push("Casing Handphone")
        changeMoney -= handphone
    }

    var obj = {
        "memberId" : memberId,
        "money" : money,
        listPurchased : listPurchased,
        changeMoney: changeMoney 
    }

    return JSON.stringify(obj,null,2)
  

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
//     // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja