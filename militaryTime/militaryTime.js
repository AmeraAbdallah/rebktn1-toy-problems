/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  if(time.endsWith('pm')){
    return time.slice(0, time.length - 2).split(':').map((element, i) => {
      if(i === 0){
        return parseInt(element) + 12;
      } 
      return element;
    }).join(':');
  } else if(time.endsWith('am')){
    if(time.startsWith('12')) return "00" + time.slice(2,time.length - 2);  //edge case
    return time.slice(0, time.length - 2);
  } else {
    return time;
  }
}

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
