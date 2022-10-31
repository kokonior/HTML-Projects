// color customizer
document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themebuttons = document.querySelectorAll('.theme-buttons');
themebuttons.forEach(color => {
    color.addEventListener('click', () => {
        let datacolor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--primary-color', datacolor);
    })

});



// // filter
// const btns = document.querySelectorAll(".btn");
// const store= document.querySelectorAll("#store");

// for (i = 0; i< btns,length; i++){

//     btns[i].addEventListener("click" ,(e) =>{
//         e.preventDefault();

//         const filter = e.target.dataset.filter;
//         console.log(filter);
//         storeProducts.forEach(product) => {
//             if (filter == "all"){
//                 product.style.display = "block"
//             }else{
//                if (product.classList.contains(filter)){
//                    products.style.display = "block"
//                }
//                else{
//                    product.style.display="none"
//                }
//             }
//         }
//     })
// }


//search filter
// const search = document.getElementById("search");

// search.addEventListener("keyup",(e) => {
//     e.preventDefault();
//     const searchValue = search.ariaValueMax.toLowerCase().trim();

//     for (i = 0; i<storeProducts.length; i++){
//         if (storeProducts[i].classList.contains(searchValue)){
//             storeProducts[i].style.display="block";
//         }else if (searchValue == ""){
//             storeProducts[i].style.display = "block";
//         } else{
//             storeProducts[i].style.display = "none";
//         }
//     }
// })

filterStore("all");
function filterStore(c) {
    var x, i;
    x = document.getElementsByClassName("store");
    if (c == 'all') c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element , name){
    var i , arr1 , arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i<arr2.length ,i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className+= " "+ arr2[i];
        }
    }
}


function removeClass(element , name){
    var i , arr1 , arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i<arr2.length ,i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className = arr1.join(" ");
}