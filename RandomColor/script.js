
function randomRGB(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

//changing the color of each letter
const letters = document.querySelectorAll('.letters');
setInterval(function(){
for (let letter of letters){
    letter.style.color = randomRGB()
}
}, 1000)


//How to change the color of the entire H1
// const h1 = document.querySelector('h1');

// setInterval(function(){
//     h1.style.color = randomRGB()
// }, 1000);



//NOTE 
//the setInterval function returns a reference ID. You can
//use this to stop the interval. ex: clearInterval(name of variable you saved the fucntion under)
