let numbers = [1, 2, 3, 1, 2, 4, 3, 5, 5];
let ready = true;
let time = 0;
let started = false;
let timeInterval;
let clickedCells = [];
let cellCompleted = 0;

const gridContainer = document.querySelector("#gridContainer");
const resetBtn = document.querySelector("#reset");
const timerMessage = document.querySelector("#timer");

setupGrid();
loadGame();

function setupGrid() {
    const fragment = new DocumentFragment();
    for (let i = 1; i < 10; i++) {
        const gridItem = document.createElement('div');
        gridItem.innerHTML = "";
        gridItem.id = 'gridItem';
        gridItem.style.backgroundColor = 'aqua';
        fragment.append(gridItem);
    }
    gridContainer.append(fragment);
}

function startTimer() {
    if (!started) {
        timeInterval = setInterval(() => {
            time++;
            timerMessage.innerHTML = `Time Elapsed: ${time}`;
        }, 1000);
        started = true;
    }
}

function showValue(cell) {
    cell.style.backgroundColor = 'red';
    cell.style.color = 'white';
    cell.style.padding = '35px';
    cell.innerHTML = cell.value;
    cell.clicked = true;
}

function hideValue(cell) {
    cell.style.backgroundColor = 'aqua';
    cell.style.padding = '50px';
    cell.innerHTML = "";
    cell.clicked = false;
}

function found(cell) {
    cellCompleted++;
    cell.completed = true;
    cell.style.backgroundColor = 'green';
}

function loadGame() {
    const gridItems = document.querySelectorAll('#gridItem');
    gridItems.forEach((item, i) => {
        item.clicked = false;
        item.completed = false;
        item.value = numbers[i];

        item.addEventListener('mouseenter', function () {
            if (!this.completed && !this.clicked) {
                this.style.backgroundColor = 'orange';
            }
        });

        item.addEventListener('mouseleave', function () {
            if (!this.completed && !this.clicked) {
                this.style.backgroundColor = 'aqua';
            }
        });

        item.addEventListener('click', function () {
            if (!ready) return;
            startTimer();
            if (!this.clicked && !this.completed) {
                clickedCells.push(this);
                showValue(this);
            }
            if (clickedCells.length === 2) {
                if (clickedCells[0].value === clickedCells[1].value) {
                    found(clickedCells[0]);
                    found(clickedCells[1]);
                    clickedCells = [];
                    if (cellCompleted === 8) {
                        alert(`You have won in ${time} seconds`);
                        clearInterval(timeInterval);
                    }
                } else {
                    ready = false;
                    gridContainer.style.border = '4px solid red';
                    setTimeout(() => {
                        hideValue(clickedCells[0]);
                        hideValue(clickedCells[1]);
                        clickedCells = [];
                        ready = true;
                        gridContainer.style.border = '3px solid black'
                    }, 500)
                }
            }
        });
    })
}

resetBtn.onclick = function () {
    numbers = [1, 2, 3, 1, 2, 4, 3, 5, 5];
    ready = true;
    time = 0;
    started = false;
    timeInterval;
    clickedCells = [];
    cellCompleted = 0;
    gridContainer.innerHTML = "";
    timerMessage.innerHTML = "";
    clearInterval(timeInterval);
    setupGrid();
    loadGame();
}
