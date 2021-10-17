

const advice = [
    "If you`re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It`s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

// generate random light colors: 
let adviceEye = document.getElementById('adviceEye'),
    adviceDisplay = document.getElementById('adviceDisplay'),
    snd = new Audio("magic.mp3"),
    adviceBtn = document.getElementById('adviceBtn');
    


adviceBtn.addEventListener("click",function(e){
   snd.play();
   snd.currentTime=0;
   adviceEye.style.backgroundColor = randomColor({luminosity: 'light', alpha:0.4, format: 'rgba'});
   adviceDisplay.textContent = advice[Math.floor(Math.random() * advice.length)];
 },false);