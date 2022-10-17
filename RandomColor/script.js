
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


