
// Array of objects holding the 7 questions and answers
quizArray = [
	{
		question: "Which programming language is the basic backbone of all websites we browse online today?",
		answer: "html"
	},
	{
		question: "Which programming language is currently the most commonly used for front-end development?",
		answer: "javascript"
	},
	{
		question: "What does DOM stand for?",
		answer: "document object model"
	},
	{
		question: "Where can I find all the files that enable a website to function, so long as I have internet access and a URL?",
		answer: "server"
	},
	{
		question: "CSS allows programmers to develop the look and feel of a site, but what does it exactly stand for?",
		answer: "cascading style sheets"
	},
	{
		question: "How do programmers usually spend the majority of their time?",
		answer: "debugging"
	},
	{
		question: "With dedication, persistence, and hardwork, can you become a programming jedi?",
		answer: "yes"
	}	]

// For loop that pushes the above questions & answers from the array onto the page
for (var i=0; i<quizArray.length; i++) {
	document.getElementById("question"+i).innerHTML = quizArray[i].question 
}

// Function that checks if the inputted answers are correct or incorrect (& counts the total correct & incorrect)
var numCorrect = 0 
var numIncorrect = 0
function checkAnswers() {
	// for (every question)
	for (var i = 0; i < quizArray.length; i++) {
		if (document.getElementById("guess"+i).value.toLowerCase() == quizArray[i].answer) {
			// add a classname (to turn it green)
			$('#question'+i).addClass('turngreen');
			// add it to the total CORRECT count
			numCorrect = numCorrect + 1
		} else {
			// add classname to the question (to turn it red)
			$('#question'+i).addClass('turnred');
			// add it to the total INCORRECT count
			numIncorrect = numIncorrect + 1	
		}
	}
		// push the total # correct & incorrect onto the HTML page
		document.getElementById('numCor').innerHTML = numCorrect
		document.getElementById('numInc').innerHTML = numIncorrect
}



