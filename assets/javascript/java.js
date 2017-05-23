TRIVIA GAME PSEUDO CODE

Global variables:
	Correct Answers
	Incorrect Answers
	Total questions 


Game Start- OnClick Start, will start game and start timer. 


Scope 1- Timer and timers condition that at zero the game will end. 

	At timers end, the game will check for correct answers and provide a statistic


Scope 2- Questions are displayed into the HTML with radio buttons

	variables
		Array/Object. 
		Questions variables are labeled q1, q2, q3, etc. 
		Question answers are given a numerical value to be checked against. 
			Example:
				q1: 2, answer1, answer2, answer3, answer4,
				q2: 3, answer1, answer2, answer3, answer4,
				q3: 1, answer1, answer2, answer3, answer4,
				etc. 

when timer expires, then the check-answer ffunction will run. 

	it will check then push out the answers of the variables. 

	for (var i=0, i < total questions, i++) {
		if (q1 = correct answer){
			correct answers ++
		}
		else {
			incorrect answers ++
		}
		
		unanswered questions = total questions less (correct + incorrect);

	}