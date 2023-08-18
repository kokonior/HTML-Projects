// hide and showing navbar 
const menuIcon = document.querySelector('.menu__icon'); // selecting the button. 
const sidebar = document.querySelector('.sidebar'); // selecting the sidebar.
let is_sidebar_collapsed = false;

menuIcon.addEventListener('click' , () => {
    if(!is_sidebar_collapsed) {
        sidebar.classList.add('small__sidebar');
        is_sidebar_collapsed = true;
    }
    else {
        sidebar.classList.remove('small__sidebar');
        is_sidebar_collapsed = false;
    }
});