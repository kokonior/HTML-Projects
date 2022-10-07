//value limit set for timer
let seconds = 10;
let minutes = 0;
let hours = 0;

let showSeconds = 0;
let showMinutes = 0;
let showHours = 0;

let interval = null;
//initial status
let status = "stopped";
//decrementing the set value
//decrement sec
function timer() {
  seconds--;
  //decrement min
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    //decrement hr
    if (minutes < 0) {
      minutes = 59;
      hours--;
      // display msg on time out
      if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        document.getElementById("show").innerHTML = "00:00:00 Timer Expired";
      }
    }
  }
  //add a 0 tens place when time is single digit
  if (seconds < 10) {
    showSeconds = "0" + seconds.toString();
  } else {
    showSeconds = seconds;
  }
  if (minutes < 10) {
    showMinutes = "0" + minutes.toString();
  } else {
    showMinutes = minutes;
  }
  if (hours < 10) {
    showHours = "0" + hours.toString();
  } else {
    showHours = hours;
  }
  //concatenated output
  document.getElementById("show").innerHTML =
    showHours + ":" + showMinutes + ":" + showSeconds;
}
//click to start timer
function start() {
  if (status === "stopped") interval = window.setInterval(timer, 1000);
  document.getElementById("start");
}
//pause to pause timer
function pause() {
  window.clearInterval(interval);
  document.getElementById("pause");
}
// resetting timer
function reset() {
  window.clearInterval(interval);
  seconds = 10;
  minutes = 00;
  hours = 0;
  document.getElementById("show").innerHTML = "00:00:10";
}
