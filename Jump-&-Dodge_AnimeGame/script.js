var container = document.querySelector("#container");
var mainBeyblade = document.querySelector("#mainBeyblade");
var block = document.querySelector("#block");
var road = document.querySelector("#road");
var cloud = document.querySelector("#cloud");
var score = document.querySelector("#score");
var gameOver = document.querySelector("#gameOver");

//declaring variable for score
var interval = null;
var playerScore = 0;



//function for score counter increase
var scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//start Game
window.addEventListener("keydown", (start) => {

    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 400);
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (mainBeyblade.classList != "mainBeybladeActive") {
            mainBeyblade.classList.add("mainBeybladeActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                mainBeyblade.classList.remove("mainBeybladeActive");
            }, 500);

        }
});

//'Game Over' if 'Character' hit The 'Block'
var result = setInterval(() => {
    var BayBottom = parseInt(getComputedStyle(mainBeyblade).getPropertyValue("bottom"));


    var blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));


    if (BayBottom <= 90 && blockLeft >= 20 && blockLeft <= 125) {


        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
