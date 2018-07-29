// Questions & answers

var questions = [

	{question:"What year was I born?",
	answer: 1966},

	{question:"What is my nickname?",
	answer: "Iron"},

	{question:"How many wins did I have in my prefessional boxing career?",
	answer: 50},

	{question:"Who's ear did I bite in 1997?",
	answer: "Evander Holyfield"},

	{question:"How many knockout wins did I have in my professional career?",
	answer: 44},

]
	// forloop to go to the next question
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question to
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// Displays the content of the questions
	el.textContent = question;
}


// Quiz results
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// stores the correct answer written on the comment box
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}





// for (var i = 0; i < questions.length; i++) {
// var question = questions[i].question;
// var el = document.getElementById ("question" + [i]);
// console.log (question, el);
// el.textContent = question;


// }