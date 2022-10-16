// Intro Animation

const tl = gsap.timeline({ defaults: { ease: "power1." } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

// Nav Bar

const navSlide = () => {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    bar.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Lines
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 1}s`;
            }
        });
        // Bar Animation
        bar.classList.toggle('toggle');
    });
};

navSlide();

// Scroll Animation

function scrollAppear() {
    var ourInfo = document.querySelector('.our-info');
    var ourPosition = ourInfo.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if (ourPosition < screenPosition) {
        ourInfo.classList.add('our-info-appear');
    }
}

window.addEventListener('scroll', scrollAppear);