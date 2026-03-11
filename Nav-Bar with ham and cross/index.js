document.querySelector('.cross').style.display = "none"
document.querySelector('#nav-images').addEventListener("click" , ()=>{
    document.querySelector('.navigation-bar').classList.toggle('nav-go')

    if(document.querySelector('.navigation-bar').classList.contains('nav-go')){
        document.querySelector('.cross').style.display = "none"
        document.querySelector('.ham').style.display = "inline"
    }else{
        document.querySelector('.ham').style.display = "none"
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline"
        }, 300);
    }
})
    
