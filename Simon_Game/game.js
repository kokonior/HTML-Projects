var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 1;
var index = 0;
var start = true;

//Generating New Level
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  $("#level-title").text("Level " + level);
  level++;
  userClickedPattern = [];
  index = 0;
}

//Detecting Keyboard Press Event for starting game
$(document).on("keydown", function() {
  if (start) {
    nextSequence();
    start = false;
  }
})

//Detecting Mouse Click Event
$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(index);
  index++;
})

//Playing Sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Applying animation to the pressed button
function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

//Checking for Correct Sequence
function checkAnswer(currentLevel) {
  if ((userClickedPattern[currentLevel]) === (gamePattern[currentLevel])) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

//Restarting Game
function startOver() {
  level = 1;
  gamePattern = [];
  start = true;
}
