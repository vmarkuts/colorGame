var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var hardBtn = document.querySelector('#hardBtn');
var easyBtn = document.querySelector('#easyBtn');

hardBtn.addEventListener('click', function(){
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
});

easyBtn.addEventListener('click', function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	colors = generateRandomColors(6)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
});

resetButton.addEventListener('click', function(){
	//generate colors
	colors = generateRandomColors(6);
	//pick a new color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	//change h1 color to default
	h1.style.backgroundColor = '#232323';
	messageDisplay.textContent = '';
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

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
			resetButton.textContent = 'Play Again!'
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

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