// TRIVIA GAME PSEUDO CODE

// Global variables:
// 	Correct Answers
// 	Incorrect Answers
// 	Total questions 

var correctAnswer = 0;
var incorrectAnswers = 0;
var totalQuestions = 8;

// Game Start- OnClick Start, will start game and start timer. 


// Scope 1- Timer and timers condition that at zero the game will end. 

window.onload = function () {
	$("#starter").on("click", stopwatch.start);
};

var intervalID;
var clockRunning = false;

var stopwatch = {

	time: 60,

	start: function () {
		if (!clockRunning) {
			intervalId = setInterval(stopwatch.count, 1000);
			clockRunning = true;

		}

	},

	stop: function() {
		clearInterval(intervalID);
		clockRunning = false;
	},

	count: function() {
		stopwatch.time--;
		console.log(stopwatch.time);

		var converted = stopwatch.timeConverter(stopwatch.time);
		console.log(converted);

		$("#timer").html(converted);
	},
	timeConverter: function(t) {
		var minutes = Math.floor(t / 60);
		var seconds = t - (minutes * 60);

		if (seconds < 10) {
			seconds = "0" + seconds;

		}

		if (minutes === 0) {
			minutes = "00";
		}
		else if (minutes < 10) {
			minutes = "0" + minutes;
		}
		return minutes + ":" + seconds;
	},

};
// 	At timers end, the game will check for correct answers and provide a statistic


// Scope 2- Questions are displayed into the HTML with radio buttons

// 	variables
// 		Array/Object. 
// 		Questions variables are labeled q1, q2, q3, etc. 
// 		Question answers are given a numerical value to be checked against. 
// 			Example:
// 				q1: answers[answer1, answer2, answer3, answer4], correctAnswer="actual answer"
// 				etc. 

// when timer expires, then the check-answer ffunction will run. 

// 	it will check then push out the answers of the variables. 



		//Why use a for-loop at all? just check each answer... 
// 	for (var i=0, i < total questions, i++) {
// 		if (q1 === correct answer){
// 			correct answers ++
// 		}
// 		else {
// 			incorrect answers ++
// 		}
		
// 		unanswered questions = total questions less (correct + incorrect);

// 	}



// limit the set time outs, always clear the intervals, call backs end the game 






// What is a group of Kittens called? 
// 	Kindle

// How many hours does a cat spend sleeping?
// 12-16 hours

// How many bones does a cat have?
// 230 bones

// What does a cat mean when they Hiss?
// Defensiveness.

// What percentage of genes are shared between a Tiger and a housecat?
// 95.6%

// What are cat breeders called?
// Catteries

// What percentage of cats respond to catnip?
// 50%

// When was the first known cat video recorded?
// 1894

