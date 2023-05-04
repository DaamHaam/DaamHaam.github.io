let score = 0;
let timeLeft = 40;
let timer;

function generateOperation() {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;
    document.getElementById('operation').innerText = `${num1} + ${num2}`;
}

function checkAnswer() {
    let answer = parseInt(document.getElementById('answer').value);
    let operation = document.getElementById('operation').innerText.split(' ');
    let correctAnswer = parseInt(operation[0]) + parseInt(operation[2]);

    if (answer === correctAnswer) {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
    }
    generateOperation();
    document.getElementById('answer').value = '';
}

function countdown() {
    timeLeft--;
    document.getElementById('timer').innerText = `${timeLeft}s`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('submit').disabled = true;
        alert(`Temps écoulé ! Votre score est de ${score}`);
    }
}

function restartGame() {
  clearInterval(timer);
  score = 0;
  timeLeft = 30;
  document.getElementById('score').innerText = 'Score: 0';
  document.getElementById('timer').innerText = '40s';
  document.getElementById('submit').disabled = false;
  generateOperation();
  timer = setInterval(countdown, 1000);
}

document.getElementById('submit').addEventListener('click', checkAnswer);

// Initial setup
document.getElementById('answer').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      checkAnswer();
  }
});
generateOperation();
timer = setInterval(countdown, 1000);
