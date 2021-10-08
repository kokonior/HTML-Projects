// Theme Toggler

icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "./assets/logo/theme/moon.png";
    }
    else{
        icon.src = "./assets/logo/theme/sun.png";
    }
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Navbar
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
      link.classList.toggle('fade');
    });
    hamburger.classList.toggle('toggle');
});
  

