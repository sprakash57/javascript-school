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

startStop.onclick = function () {
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

record.onclick = function () {
    let li = document.createElement('li');
    li.innerHTML = recordedTime;
    pastRecords.append(li);
}

reset.onclick = function () {
    pastRecords.innerHTML = "";
    timer.innerHTML = "0";
    clearInterval(interval);
}
