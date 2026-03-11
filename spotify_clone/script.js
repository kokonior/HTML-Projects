// Initialize the variables
let songIndex = 0
let audioElement = new Audio('./songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    { songName: "Ishq-Bulawa", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg", duration: '05:03' },
    { songName: "Zehnaseeb", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg", duration: '03:37' },
    { songName: "Ye Tune Kya Kiya", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg", duration: '05:14' },
    { songName: "Fakira", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg", duration: '04:48' },
    { songName: "Sau Tarah Ke", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg", duration: '03:58' },
    { songName: "Zara Sa", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg", duration: '05:03' },
    { songName: "Samjhawan", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg", duration: '04:29' },
    { songName: "Main Hoon Na", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg", duration: '06:01' },
    { songName: "Kal ho na ho", filePath: "./songs/9.mp3", coverPath: "./covers/9.jfif", duration: '05:21' },
    { songName: "Chak de sare gum", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg", duration: '05:45' }
]

songItems.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
    element.getElementsByClassName('duration')[0].innerText = songs[i].duration
})

// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex + 1}.mp3`
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex == 9) {
        songIndex = 0;
    }
    else songIndex += 1
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    gif.style.opacity = 1
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 9;
    }
    else songIndex -= 1
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    gif.style.opacity = 1
})