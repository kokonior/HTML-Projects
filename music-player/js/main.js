var audio = document.getElementById("audio-track");
audio.volume = 0.5;
var isPlaying = false;

const timelineContainer = document.getElementById('song-timeline');
const seekSlider = document.getElementById('seek-slider');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
let animationFrame = null;

// Toggle play / pause button and audio

function togglePlayPause(pathClass) {
    var paths = document.querySelectorAll('.' + pathClass);
    for (var i = 0; i < paths.length; i++) {
        paths[i].classList.toggle('active');
    }
    if (isPlaying) {
        audio.pause();
        cancelAnimationFrame(animationFrame);
    }
    else {
        audio.play();
        requestAnimationFrame(whilePlaying);
    }
}

audio.onplaying = function () {
    isPlaying = true;
}

audio.onpause = function () {
    isPlaying = false;
}

// Set different color for before the slider circle

const showRangeProgress = (rangeInput) => {
    timelineContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});

// Audio player functionality

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const displayBufferedAmount = () => {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
    timelineContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
}

const whilePlaying = () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    timelineContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
    animationFrame = requestAnimationFrame(whilePlaying);
}

if (audio.readyState > 0) {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
} else {
    audio.addEventListener('loadedmetadata', () => {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    });
}

audio.addEventListener('progress', displayBufferedAmount);

seekSlider.addEventListener('input', () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    if (!audio.paused) {
        cancelAnimationFrame(animationFrame);
    }
});

// Toggle active / inactive color of buttons

function toggleColor(buttonId) {
    document.getElementById(buttonId).classList.toggle('active');
}