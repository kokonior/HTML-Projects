// required elements

const container=document.querySelector("body");
const dragtext=container.querySelector("h1");
const btn=container.querySelector("button");
const ip=container.querySelector("input");

button.onclick=()=>{ip.click();}
let file;

//call activate function
ip.addEventListener("change",activate);
function activate(){
    file=this.files[0];     //select 1st one
    showFile();
}

//call showFile function

function showFile(){
    let fileT=file.type;
    let valid_ext=["images/jpeg","images/jpg","images/png","application/pdf"];

    if(valid_ext.includes(fileT)){
        let fileR= new FileReader();
        fileR.onload =()=>{
            let fileURL = fileR.result;
            let imgTag = `<img src="$(fileURL)" alt="">`;
            container.innerHTML = imgTag;
        }
        fileR.readAsDataURL(file);
    }
    else{
        alert("This is not a valid file for this !");
        dragtext.textContent = "Drag & Drop here";
    }
}