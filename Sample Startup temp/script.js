window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

const year=new Date()
const CurrentYear=year.getFullYear();

const spanElement=document.getElementById("year");
spanElement.innerHTML=CurrentYear;

document.querySelector('.checkbox').addEventListener("click",function(){
	const hiddenElement=["main-cover","about","feautures","other-feautures","footer"];
	hiddenElement.forEach(function(element){
		const elementName="."+element;
		const aboutSection=document.querySelector(elementName);
		aboutSection.classList.toggle("hide");
               
	})
	const ch=document.querySelector(".checkbox")
	const li=document.querySelectorAll(".navi_link")
	li.forEach((lis,i)=>{
		lis.addEventListener("click",function(){
			
			document.querySelector(".navi").classList.add("hide");
			document.querySelector(".bg").classList.add("hide");
			ch.checked=false;
			
			hiddenElement.forEach(function(element){
				const elementNames="."+element;
				const aboutSections=document.querySelector(elementNames);
				aboutSections.classList.remove("hide");
		
		})
	
		
	})
	document.querySelector(".navi").classList.remove("hide");
			document.querySelector(".bg").classList.remove("hide");
	})
	

	
})

