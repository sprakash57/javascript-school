var numOfSquares = 6;
var colors = generateColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var playAgainBtn = document.querySelector("#reset");
var stripe = document.querySelector("#stripe");
var modeBtn = document.querySelectorAll(".mode");

for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
        reset();
    });
}

playAgainBtn.addEventListener("click", function () {
    reset();
});

// easyBtn.addEventListener("click", function(){
//     numOfSquares = 3;
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateColor(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     numOfSquares = 6;
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors = generateColor(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i<squares.length;i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";    
//     }
// });


colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    //Add initial colors
    squares[i].style.backgroundColor = colors[i];
    //Add click event listener to every tiles
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.innerHTML = "Correct!!";
            message.style.color = "white";
            squares.forEach(function (square) {
                square.style.backgroundColor = pickedColor;
            });
            h1.style.backgroundColor = pickedColor;
            playAgainBtn.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            message.innerText = "Try again!!";
            message.style.color = "white";
        }
    });
}

function reset() {
    colors = generateColor(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    playAgainBtn.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
