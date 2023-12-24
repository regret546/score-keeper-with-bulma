const resetButton = document.querySelector("#resetBtn");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const p1 = {
  score: 0,
  button: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2Display"),
};

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      startConfetti();
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

const startConfetti = function () {
  setTimeout(function () {
    confetti.start();
  }),
    1000;
};

const stopConfetti = function () {
  setTimeout(function () {
    confetti.stop();
  }),
    5000;
};

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  stopConfetti();
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
    p.display.classList.remove("has-text-success", "has-text-danger");
  }
}
