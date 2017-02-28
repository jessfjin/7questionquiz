
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
		question: "Where does a programmer usually spend 60% of their time?",
		answer: "debugging"
	},
	{
		question: "With dedication, persistence, and hardwork, can anyone become a programming jedi?",
		answer: "yes"
	}	]

// For loop that pushes the above questions & answers from the array onto the page
for (var i=0; i<quizArray.length; i++) {
	document.getElementById("question"+i).innerHTML = quizArray[i].question 
}

// Function that checks if the inputted answers are correct or incorrect (& counts the total correct & incorrect)
// first, variables holding # of correct & incorrect answers
var numCorrect = 0 
var numIncorrect = 0
function checkAnswers() {
	// for (every question)
	for (var i = 0; i < quizArray.length; i++) {
		if (document.getElementById("guess"+i).value.toLowerCase() == quizArray[i].answer) {
		console.log("yay, correct - it works")
		// marks inputted answer as correct
		var correct = document.getElementById("guess"+i).value.toLowerCase()
		console.log(correct)
		// adds a classname (to turn it green)
		correct.className = "correct"
		// add it to the total CORRECT count
		numCorrect = numCorrect + 1
		console.log(numCorrect)
		} else {
		console.log("incorrect! but at least it works")
		// mark inputted answer as incorrect
		var incorrect = document.getElementById("guess"+i).value.toLowerCase()
		console.log(incorrect)
		// adds classname (to turn it red)
		incorrect.className = "incorrect"
		// add it to the total INCORRECT count
		numIncorrect = numIncorrect + 1
		console.log(numIncorrect)
		}
	}
}

// good test code that shows this if statement condition works! 
	// if (document.getElementById("guess0").value.toLowerCase() == quizArray[0].answer) {
	// 	console.log("yay! this is correct")
	// } else {
	// 	console.log("no, this isn't working")
	// }



