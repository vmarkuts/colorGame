var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init () {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	//add listeners
		squares[i].addEventListener('click', function () {
			//grab color
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor, pickedColor);
			//compare w pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = 'Play Again'
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset () {
	colors = generateRandomColors(numSquares);
	//pick a new color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors';
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];	
		} else {
			squares[i].style.display = 'none';
		}
	}
	//change h1 color to default
	h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function(){
	reset();
});

function changeColors (color) {
	//loop through all squares
	for (var i = 0; i < colors.length; i++) {
		//change each color to match correct
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = [];
	//add num rand colors to arr
	for (var i = 0; i < num; i++) {
		//get random color
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}