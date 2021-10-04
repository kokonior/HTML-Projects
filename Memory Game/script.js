var gamerange = document.getElementById('gamerange')
var subtitle = document.getElementById('subtitle')
var gameselect = document.getElementById('gameselect')
var startgame = document.getElementById('startgame')
var counter = document.getElementById('counter')

var openedCards = [];

var matchedCards = 0 ;

let moves = 0;

gamerange.oninput = function () {
    subtitle.innerHTML = `${this.value}</code>`
}

startgame.onclick = () => {
    gameselect.style.display = "none"
    for (let index = 0; index < gamerange.value; index++) {
        const seatelement = document.createElement("div");
        seatelement.setAttribute('id', index)
        seatelement.setAttribute('class', "column is-one-quarter")
        document.getElementById('gcards').insertAdjacentElement('beforeend', seatelement)
    }

    startTime = new Date();
    setTimeout(displaytime, 1000);

    openedCards = [];
    shuffle()
    startlogic()
}

var displayCard = function (){
    this.classList.toggle("hidden");
};

shuffle=()=>{
    var emojis = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10', '11', '12', '13', '14', '15', '16','17','18','19','20']
    var she = emojis.sort(()=> Math.random() - 0.9 ).slice(0,gamerange.value/2)
    she.concat(she).forEach((element, i) => {
        var ele = document.getElementById(i)
        ele.innerHTML = `
        <div class="card emojicard hidden animate__animated hidden"  id="${element}>
            <div class="card-image">
                <figure class="image is-4by3">
                <img src="./images/${element}.jpg" alt="Image Card">
                </figure>
            </div>
        </div>

        `;
    });
}

function moveCounter(){
    moves++;
    counter.innerHTML = moves;
}

cardOpen=()=>{
    console.log(this);
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].innerText === openedCards[1].innerText){
            matched();
        } else {
            unmatched();
        }
    }
}

startlogic=()=>{
    var allcards = document.querySelectorAll(".emojicard")
    Array.from(allcards).forEach((element,index) => {
        element.addEventListener("click", (x) => {
            element.classList.toggle("hidden");
            openedCards.push(element);
            var len = openedCards.length;
            if(len === 2){
                moveCounter();
                if(openedCards[0].id === openedCards[1].id){
                    matchedCards +=2
                    matched();
                } else {
                    unmatched();
                }
            }
            if(matchedCards == gamerange.value){
                document.getElementById('congo').style.display = 'block'
                document.getElementById('info').innerText = `You took ${moves} Moves in ${document.getElementById('timer').innerText}`
            } 
        })
    })
}

matched=()=>{
    openedCards[0].classList.add("match","animate__bounceIn");
    openedCards[1].classList.add("match","animate__bounceIn");
    openedCards = [];
}

unmatched=()=>{

    // disable();
    setTimeout(function(){
        openedCards[0].classList.add("hidden","animate__flipInY");
        openedCards[1].classList.add("hidden","animate__flipInY");
        openedCards = [];
    },200);
}

var startTime;

function displaytime() {
    var endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;
    var seconds = Math.round(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    var minutes = Math.round(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    var hours = Math.round(timeDiff % 24);
    timeDiff = Math.floor(timeDiff / 24);
    var days = timeDiff;

    document.getElementById('timer').innerHTML = minutes + ":" + seconds
    setTimeout(displaytime, 1000);
}