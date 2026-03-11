btn1=document.getElementById("btn");

btn1.addEventListener("click",()=>{
	document.body.style.background=randomBg();
});

function randomBg(){
	return `rgb(${Math.floor(Math.random()*255)},10,100)`;
}