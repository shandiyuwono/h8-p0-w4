function highestScore (students) {
    // Code disini
    
    var obj = {}
    
    for(var i = 0; i <= students.length-1; i++) {
        if(obj[students[i]["class"]] === undefined) {
            obj[students[i]["class"]] = []
        }
        obj[students[i]["class"]].push({
            name: students[i].name,
            score: students[i].score,
        })
    }

    var final = {}
    for(var x in obj) {
        var topScore = 0
        var topName = ""
        for(var i = 0; i <= obj[x].length-1; i++) {
            if(obj[x][i].score > topScore) {
                topScore = obj[x][i].score
                topName = obj[x][i].name
            }
        }
        final[x] = {
            name: topName,
            score: topScore
        }
    }
    return final
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  