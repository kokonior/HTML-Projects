
score = 0;
cross = true;



//audio
audio = new Audio('gameover.mp3');
audiogo = new Audio('smash.mp3');
setTimeout(() => {
    audio.play();
    // audiogo.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is : ", e.keyCode)
    if (e.keyCode == 38) {
        ch = document.querySelector('.ch');
        ch.classList.add('animateCh');
        setTimeout(() => {
            ch.classList.remove('animateCh')
            var playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
            }

        }, 700);
    }
    if (e.keyCode == 39) {
        ch = document.querySelector('.ch');
        chX = parseInt(window.getComputedStyle(ch, null).getPropertyValue("left"));
        ch.style.left = chX + 112 + "px";
    }

    if (e.keyCode == 37) {
        ch = document.querySelector('.ch');
        chX = parseInt(window.getComputedStyle(ch, null).getPropertyValue("left"));
        ch.style.left = (chX - 112) + "px";
    }
}

// functionality
setInterval(() => {
    ch = document.querySelector('.ch');
    blink = document.querySelector(".blink");
    corona = document.querySelector(".corona");

    dx = parseInt(window.getComputedStyle(ch, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(ch, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(corona, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(corona, null).getPropertyValue("top"));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 52) {
        blink.style.visibility = 'visible';
        // blink.innerHTML = 'Game Over';
        corona.classList.remove('animateCorona')
        ch.classList.remove('animateCh')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();

        }, 1000);



    }

    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(corona, null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.2;
            corona.style.animationDuration = newDur + 's';
        }, 500);
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "your score : " + score;
}





