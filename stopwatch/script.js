let time = 0;
let hour = 0;
let minute = 0;
let second = 0;
let hasStarted = true;
let recordedTime = '';
let interval;

const startStop = document.querySelector("#startStop");
const record = document.querySelector("#record");
const reset = document.querySelector("#reset");
const pastRecords = document.querySelector("#pastRecords");
const timer = document.querySelector("#timer");

function handleStartStop() {
    if (hasStarted) {
        interval = setInterval(() => {
            time++;
            if (time >= 100) {
                second++;
                time = 0;
            }
            if (second >= 60) {
                minute++;
                second = 0;
            }
            if (minute >= 60) {
                hour++;
                minute = 0;
            }
            recordedTime = `${hour}:${minute}:${second}:${time}`;
            timer.innerHTML = recordedTime;
        }, 10)
        hasStarted = false;
    } else {
        clearInterval(interval);
        hasStarted = true;
    }
}

function renderPastRecords() {
    let li = document.createElement('li');
    li.innerHTML = recordedTime;
    pastRecords.append(li);
}

function resetPage() {
    time = 0;
    hour = 0;
    minute = 0;
    second = 0;
    hasStarted = true;
    recordedTime = '';
    pastRecords.innerHTML = "";
    timer.innerHTML = "0";
    clearInterval(interval);
}

startStop.addEventListener('click', handleStartStop);

record.addEventListener('click', renderPastRecords);

reset.addEventListener('click', resetPage);

document.onkeypress = function (e) {
    const key = e.key.toLowerCase();
    if (key === 's') handleStartStop();
    else if (key === 'r') resetPage();
    else if (key === 'p') renderPastRecords();
}
