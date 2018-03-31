var Game = (function () {

    var numOfSquares = 6;
    var colors = generateRandomColors(numOfSquares);
    var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor();
    var colorDisplay = document.querySelector("#colorDisplay");
    colorDisplay.textContent = pickedColor;
    var displayMessage = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var resetBtn = document.querySelector("#reset");
    var modeBtns = document.querySelectorAll(".mode");

    resetBtn.addEventListener("click", function () {
        reset();
    });



    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            reset();
        })

    }



    function reset() {
        displayMessage.textContent = '';
        colors = generateRandomColors(numOfSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        h1.style.backgroundColor = "#4682B4";
        resetBtn.textContent = "New Colors";
        for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.background = colors[i];
                squares[i].style.display = "block";
            } else {
                squares[i].style.display = "none";
            }
        }
    }



    // at start and refresh assign the color background of squares from the colors array   
    // when click on color square check if it's right or wrong and update the interface

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                displayMessage.textContent = "Correct!";
                changeColorsDisplay(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323"
                displayMessage.textContent = "Try Again!"
            }
        })
    }



    // make an array with new 6 or 3 colors generated everytime

    function generateRandomColors(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(rgbCombination())
        }
        return arr;
    }
    function rgbCombination() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }



    //make computer pick one color to be the right one

    function pickColor() {
        var randomNum = Math.floor(Math.random() * colors.length);
        return colors[randomNum];
    }



    //when it's correct answer change all squares colors to the clicked color

    function changeColorsDisplay(color) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;
        }
    }

})();












