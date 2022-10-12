const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;


//add leading zero
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}



//run a standard timer
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 60 * 100))

}



//match text
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        testArea.style.borderColor = "green";
        clearInterval(interval);
    } else {
        if (textEntered == originTextMatch) {
            testArea.style.borderColor = "green";
        } else {
            testArea.style.borderColor = "red";
        }
    }
}



//start a timer
function start() {
    var textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}



//reset button
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;
    theTimer.innerHTML = "00:00:00";
    testArea.style.borderColor = "silver";
    testArea.value = "";
}


//TODO: add event listener(s) to keyboard input
