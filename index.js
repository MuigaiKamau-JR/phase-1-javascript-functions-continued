function saturdayFun(activity="roller-skate") { //create actual function
    return `This Saturday, I want to ${activity}!` //display after no arguments are passed?? i think
  } 
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }

  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
