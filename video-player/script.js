const video = document.querySelector('video');
const toggleBtn = document.querySelector("button[title='Toggle Play']");
const viewer = document.querySelector('.viewer');
const skipBtns = document.querySelectorAll('[data-skip]');
const sliders = document.querySelectorAll('.player__slider');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

function toggleVideo() {
    if (video.paused) {
        video.play();
        toggleBtn.textContent = '||'
    }
    else {
        video.pause();
        toggleBtn.textContent = '>'
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleSlider() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function handleScrub(e) {
    console.log(e.offsetX)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

toggleBtn.addEventListener('click', toggleVideo);
viewer.addEventListener('click', toggleVideo);
video.addEventListener('timeupdate', handleProgress);
skipBtns.forEach(btn => btn.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('mousemove', handleSlider));
sliders.forEach(slider => slider.addEventListener('change', handleSlider));
progress.addEventListener('click', handleScrub);
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', e => mousedown && handleScrub(e));
