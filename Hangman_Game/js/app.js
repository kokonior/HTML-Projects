var sharedData;
var guessedLetters = [];
var currentPart = 0;
var badGuesses = 0;
var goodGuesses = 0;
var endOfGame = false;

function generateGame() {
	guessedLetters = [];
	currentPart = 0;
	badGuesses = 0;
	goodGuesses = 0;
	endOfGame = false;
	document.getElementById("guesses").innerHTML = ``;
	clearCanvas();

	var url = `https://random-word-api.herokuapp.com/word?number=1&length=${Math.floor(Math.random() * (12 - 5) + 5)}`;
	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			data = data.toString();

			document.getElementById("word").innerHTML = data.replace(/./g, "_ ");
			document.getElementById("word").style.fontSize = "50px";
			sharedData = btoa(data);
		})
		.catch(function (err) {
			console.log(err);
			generateGame();
		});
}

function buttonPressed(letter) {
	if (letter == "reset") {
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		for (var i = 0; i < alphabet.length; ++i) {
			document.getElementById(alphabet[i]).style.backgroundColor = "#212529";
			document.getElementById(alphabet[i]).style.color = "white";
			document.getElementById(alphabet[i]).style.fontWeight = "normal";
		}
		return;
	}
	if (endOfGame) return;
	if (guessedLetters.includes(letter)) return;
	var replaceword = [];
	var openSplitData = atob(sharedData).split("");
	var word = document.getElementById("word");
	var isFalse;
	replaceword = openSplitData.join(" ");
	for (var i = 0; i < openSplitData.length; i++) {
		if (openSplitData[i] != letter) {
			if (!guessedLetters.includes(openSplitData[i])) {
				replaceword = replaceword.replace(openSplitData[i], "_ ");
			}
		}
	}
	if (!openSplitData.includes(letter)) {
		isFalse = true;
	}

	word.innerHTML = replaceword;

	if (isFalse) {
		nextPart();
		badGuesses++;
		document.getElementById(letter).style.backgroundColor = "rgb(255,70,10)";
	} else {
		goodGuesses++;
		document.getElementById(letter).style.backgroundColor = "rgb(2,190,25)";
		document.getElementById(letter).style.color = "black";
		document.getElementById(letter).style.fontWeight = "bold";
	}

	word = document.getElementById("word");
	if (word.innerHTML == atob(sharedData).split("").join(" ")) {
		endGame();
	}
	guessedLetters.push(letter);
	document.getElementById("guesses").innerHTML = `Guesses: ${goodGuesses + badGuesses
		} (Correct: ${goodGuesses}, Incorrect: ${badGuesses})`;
}

function clearCanvas() {
	var canvas = document.getElementById("stickcanvas");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(part) {
	var canvas = document.getElementById("stickcanvas");
	var context = canvas.getContext("2d");
	switch (part) {
		case "gallows":
			context.strokeStyle = "#000";
			context.lineWidth = 8;
			context.beginPath();
			context.moveTo(175, 225);
			context.lineTo(5, 225);
			context.moveTo(40, 225);
			context.lineTo(25, 5);
			context.lineTo(100, 5);
			context.lineTo(100, 25);
			context.stroke();
			break;

		case "head":
			context.lineWidth = 5;
			context.beginPath();
			context.arc(100, 50, 25, 0, Math.PI * 2, true);
			context.closePath();
			context.stroke();
			break;

		case "body":
			context.beginPath();
			context.moveTo(100, 75);
			context.lineTo(100, 140);
			context.stroke();
			break;

		case "rightHarm":
			context.beginPath();
			context.moveTo(100, 85);
			context.lineTo(60, 100);
			context.stroke();
			break;

		case "leftHarm":
			context.beginPath();
			context.moveTo(100, 85);
			context.lineTo(140, 100);
			context.stroke();
			break;

		case "rightLeg":
			context.beginPath();
			context.moveTo(100, 140);
			context.lineTo(80, 190);
			context.stroke();
			break;

		case "rightFoot":
			context.beginPath();
			context.moveTo(82, 190);
			context.lineTo(70, 185);
			context.stroke();
			break;

		case "leftLeg":
			context.beginPath();
			context.moveTo(100, 140);
			context.lineTo(125, 190);
			context.stroke();
			break;

		case "leftFoot":
			context.beginPath();
			context.moveTo(122, 190);
			context.lineTo(135, 185);
			context.stroke();
			break;
	}
}

function nextPart() {
	var draws = [
		"gallows",
		"head",
		"body",
		"rightHarm",
		"leftHarm",
		"rightLeg",
		"leftLeg",
		"rightFoot",
		"leftFoot",
	];
	draw(draws[currentPart]);
	currentPart++;
	if (currentPart >= 9) {
		endGame();
	}
}

function endGame() {
	endOfGame = true;
	var output = document.getElementById("word");
	document.getElementById("word").style.fontSize = "25px";
	if (currentPart > 8) {
		output.innerHTML = `You ran out of guesses! Game over - The word was ${atob(
			sharedData
		)}. Press New Word to play again`;
		return;
	}
	output.innerHTML = `Well done! The word was ${atob(
		sharedData
	)}. Press New Word to play again`;
}
