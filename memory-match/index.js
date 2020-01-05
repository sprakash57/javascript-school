let clickedCells = [];
let matched = 0;
function answers() {
    let count = 0, init = [], num = 0, result = [], pairs = [];
    while (count < 5) {
        num = Math.floor(Math.random() * 9);
        if (init.indexOf(num) === -1) {
            init.push(num);
            count++;
        }
    }
    init = [...init, ...init]
    count = 0;
    while (count < 9) {
        num = Math.floor(Math.random() * 9);
        if (result.indexOf(num) === -1) {
            result.push(num);
            pairs[num] = init[count];
            count++;
        }
    }
    return pairs;
}

function setup() {
    const pairs = answers();
    let grid = document.getElementsByTagName('td');
    for (let i = 0; i < pairs.length; i++) {
        let cell = grid[i];
        cell.value = pairs[i];
        // cell.addEventListener("mouseenter", function () {
        //     this.style.background = 'orange';
        // })
        // cell.addEventListener('mouseleave', function () {
        //     this.style.background = 'blue';
        // })
        cell.addEventListener('click', function () {
            this.style.background = 'red';
            this.innerText = pairs[i];
            clickedCells.push(cell);
            if (clickedCells.length === 2) {
                setTimeout(() => reveal(clickedCells), 700);
            }
        })
    }
}

setup();

function reveal(cells) {
    if (cells[0].value === cells[1].value) {
        cells[0].style.background = 'purple';
        cells[1].style.background = 'purple';
        matched = matched + 2;
    } else {
        cells[0].style.background = 'blue';
        cells[1].style.background = 'blue';
        cells[0].innerText = '';
        cells[1].innerText = '';
    }
    clickedCells = [];
    if (matched === 8) alert('You won')
}