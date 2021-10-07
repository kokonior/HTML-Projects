var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var userClickedPattern=[];
var level=0;
var started=false;


$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

    
})

// $(".btn").click(function(){
//     checkAnswer(userClickedPattern[userClickedPattern.length-1]);
        
// })


$(document).on("keypress",function(event){
    if(started===false){
        $("h1").text("Level "+ level);
        nextSequence();
        started=true;
    }

})


// FUNCTIONS
function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+ level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    // var sound=new Audio("sounds/"+randomChosenColor+".mp3");
    // sound.play();
    playSound(randomChosenColor);
}

function playSound(name){

    var sound=new Audio("sounds/"+name+".mp3");
    sound.play();

}

function animatePress(currentColor)
{
   $("#"+currentColor).addClass("pressed"); 
   setTimeout(function(){
       $("#"+currentColor).removeClass("pressed");
   },100);

}

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
   
        console.log("SUCCESS");
        if(gamePattern.length===userClickedPattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);

        }
    }
    else{
  
       playSound("wrong");
       $("body").addClass("game-over");
       $("h1").text("Game Over, Press Any Key To Restart");
      setTimeout(function(){
          $("body").removeClass("game-over");
      },1000);
      startOver();

    }

}

function startOver()
{
    level=0;
    started=false;
    gamePattern=[];
}


