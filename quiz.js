// function checkAnswer () {
//     const correctAnswer = "4";
//     const userAnswer = document.querySelector('name=quiz').value;
//     let feedback = document.getElementById('feedback')

//     if (userAnswer === correctAnswer) {
//         feedback.textContent = "Correct! Well done."
//  } else {
//     feedback.textContent = "That's incorrect. Try again!"
//  }
// }

// document.getElementById('submit-answer').addEventListener('click', checkAnswer);
// A BASIC QUIZ APPLICATION
function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the learner's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an Event Listener to the Submit Button:
    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
