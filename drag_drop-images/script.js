// required elements

const container=document.querySelector(".container");
const dragtext=container.querySelector("h1");
const btn=container.querySelector("button");
const ip=container.querySelector("input");

btn.onclick=()=>{
    ip.click();
}
let file;

//call activate function
ip.addEventListener("change",activate);
function activate(){
    file=this.files[0];     //select 1st one
    showFile();
}


container.addEventListener("dragover",(event)=>{
    event.preventDefault();
    dragtext.textContent = "Release to upload"
});

container.addEventListener("drop",(event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
});

//call showFile function

function showFile(){
    let fileT=file.type;
    let valid_ext=["image/jpeg","image/jpg","image/png","application/pdf"];

    if(valid_ext.includes(fileT)){
        let fileR= new FileReader();
        fileR.onload =()=>{
            let fileURL = fileR.result;
            let imgTag = `<div id="img-box"><img src="${fileURL}" alt=""></div>`;
            container.innerHTML = imgTag;
        }
        fileR.readAsDataURL(file);
    }
    else{
        alert("This is not a valid file for this !");
        dragtext.textContent = "Drag & Drop here";
    }
}
