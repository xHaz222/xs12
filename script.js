// Music Player functionality

const playPauseBtn = document.querySelector('.play-pause-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const volumeControl = document.querySelector('.volume-control');

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
    "https://www.youtube.com/watch?v=ssVCtZBQyus",
    "https://youtu.be/mm29aBe71SI?si=3P_AcZ0jZb7mcRs2",
    "https://youtu.be/nP8ZVJxiJlU?si=mDvCgd-e93pcWumS",
    "https://youtu.be/6SHIrbtXY1U?si=UEzcSUUzHNjFI7KU",
    "https://youtu.be/dTbONq0zxRA?si=j7FKiWa9Ts-hQ2Do",
    "https://youtu.be/XQ0D_QD_DhM?si=jwr_mIG-zZwSPk-S"
];

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        playPauseBtn.textContent = '⏯';
        isPlaying = false;
    } else {
        playPauseBtn.textContent = '⏸';
        isPlaying = true;
    }
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    playSong();
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    playSong();
});

volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value;
    console.log('Volume: ', volume);
});

function playSong() {
    console.log('Playing song: ', songs[currentSongIndex]);
    // Here we would use a method to load the song into a player (YouTube or other)
}
