let num1, num2, correctAnswer;
let score = 0;
let time = 30;

let operations = ["+", "-", "*"];

function generateQuestion() {
  let op = operations[Math.floor(Math.random() * operations.length)];

  num1 = Math.floor(Math.random() * 20);
  num2 = Math.floor(Math.random() * 20);

  if (op === "+") correctAnswer = num1 + num2;
  if (op === "-") correctAnswer = num1 - num2;
  if (op === "*") correctAnswer = num1 * num2;

  document.getElementById("question").innerText = `${num1} ${op} ${num2}`;
}

function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer").value);

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = `❌ Wrong! Ans: ${correctAnswer}`;
  }

  document.getElementById("score").innerText = score;
  document.getElementById("answer").value = "";

  generateQuestion();
}

function startTimer() {
  let interval = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;

    if (time <= 0) {
      clearInterval(interval);
      alert(`Game Over! Your score: ${score}`);
      location.reload();
    }
  }, 1000);
}

// Start game
generateQuestion();
startTimer();
