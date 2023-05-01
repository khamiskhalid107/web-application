const questions = [
	{
		question: "What is the capital of France?",
		answers: {
			a: "London",
			b: "Paris",
			c: "Madrid"
		},
		correctAnswer: "b"
	},
	{
		question: "What is the largest planet in our solar system?",
		answers: {
			a: "Jupiter",
			b: "Earth",
			c: "Mars"
		},
		correctAnswer: "a"
	},
	{
		question: "What is the smallest country in the world?",
		answers: {
			a: "USA",
			b: "Russia",
			c: "Vatican City"
		},
		correctAnswer: "c"
	}
];

const quizContainer = document.querySelector("main");

function buildQuiz() {
	// code to dynamically generate the questions and answer options goes here
}

function showResults() {
	// code to calculate the score and display the results goes here
}

function handleSubmit() {
	// code to handle the form submission goes here
}
buildQuiz();

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", handleSubmit);
