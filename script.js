const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const messageElement = document.querySelector("#message");

const winningScore = 7;
const keys = new Set();

const game = {
  running: false,
  paused: true,
  over: false,
  lastFrame: 0,
  playerScore: 0,
  computerScore: 0,
};

const paddle = {
  width: 16,
  height: 112,
  speed: 520,
};

const player = {
  x: 36,
  y: canvas.height / 2 - paddle.height / 2,
  dy: 0,
};

const computer = {
  x: canvas.width - 36 - paddle.width,
  y: canvas.height / 2 - paddle.height / 2,
  dy: 0,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 16,
  speed: 440,
  dx: 440,
  dy: 260,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setMessage(text) {
  messageElement.textContent = text;
  messageElement.classList.toggle("hidden", !text);
}

function updateScoreboard() {
  playerScoreElement.textContent = game.playerScore;
  computerScoreElement.textContent = game.computerScore;
}

function resetBall(direction = Math.random() > 0.5 ? 1 : -1) {
  ball.x = canvas.width / 2 - ball.size / 2;
  ball.y = canvas.height / 2 - ball.size / 2;
  ball.speed = 440;
  ball.dx = direction * ball.speed;
  ball.dy = (Math.random() * 320 - 160) || 160;
}

function resetPaddles() {
  player.y = canvas.height / 2 - paddle.height / 2;
  computer.y = canvas.height / 2 - paddle.height / 2;
}

function startMatch() {
  game.running = true;
  game.paused = false;
  game.over = false;
  game.lastFrame = performance.now();
  setMessage("");
  requestAnimationFrame(loop);
}

function restartMatch() {
  game.playerScore = 0;
  game.computerScore = 0;
  updateScoreboard();
  resetPaddles();
  resetBall();
  startMatch();
}

function togglePause() {
  if (game.over) {
    restartMatch();
    return;
  }

  if (!game.running) {
    startMatch();
    return;
  }

  game.paused = !game.paused;
  game.lastFrame = performance.now();
  setMessage(game.paused ? "Paused" : "");
  requestAnimationFrame(loop);
}

function movePlayer(deltaTime) {
  const upPressed = keys.has("w") || keys.has("arrowup");
  const downPressed = keys.has("s") || keys.has("arrowdown");

  player.dy = 0;

  if (upPressed) {
    player.dy -= paddle.speed;
  }

  if (downPressed) {
    player.dy += paddle.speed;
  }

  player.y = clamp(player.y + player.dy * deltaTime, 0, canvas.height - paddle.height);
}

function moveComputer(deltaTime) {
  const target = ball.y + ball.size / 2 - paddle.height / 2;
  const distance = target - computer.y;
  const maxMove = paddle.speed * 0.72 * deltaTime;
  computer.dy = clamp(distance, -maxMove, maxMove);
  computer.y = clamp(computer.y + computer.dy, 0, canvas.height - paddle.height);
}

function collidesWithPaddle(target) {
  return (
    ball.x < target.x + paddle.width &&
    ball.x + ball.size > target.x &&
    ball.y < target.y + paddle.height &&
    ball.y + ball.size > target.y
  );
}

function bounceOffPaddle(target, direction) {
  const ballCenter = ball.y + ball.size / 2;
  const paddleCenter = target.y + paddle.height / 2;
  const normalizedHit = (ballCenter - paddleCenter) / (paddle.height / 2);
  const angle = normalizedHit * 0.9;

  ball.speed = Math.min(ball.speed + 24, 720);
  ball.dx = direction * ball.speed;
  ball.dy = angle * ball.speed;
  ball.x = direction > 0 ? target.x + paddle.width : target.x - ball.size;
}

function scorePoint(winner) {
  if (winner === "player") {
    game.playerScore += 1;
  } else {
    game.computerScore += 1;
  }

  updateScoreboard();

  if (game.playerScore >= winningScore || game.computerScore >= winningScore) {
    game.over = true;
    game.running = false;
    setMessage(`${winner === "player" ? "You win" : "Computer wins"} - press R`);
    return;
  }

  resetPaddles();
  resetBall(winner === "player" ? -1 : 1);
}

function moveBall(deltaTime) {
  ball.x += ball.dx * deltaTime;
  ball.y += ball.dy * deltaTime;

  if (ball.y <= 0) {
    ball.y = 0;
    ball.dy = Math.abs(ball.dy);
  }

  if (ball.y + ball.size >= canvas.height) {
    ball.y = canvas.height - ball.size;
    ball.dy = -Math.abs(ball.dy);
  }

  if (ball.dx < 0 && collidesWithPaddle(player)) {
    bounceOffPaddle(player, 1);
  }

  if (ball.dx > 0 && collidesWithPaddle(computer)) {
    bounceOffPaddle(computer, -1);
  }

  if (ball.x + ball.size < 0) {
    scorePoint("computer");
  }

  if (ball.x > canvas.width) {
    scorePoint("player");
  }
}

function update(deltaTime) {
  movePlayer(deltaTime);
  moveComputer(deltaTime);
  moveBall(deltaTime);
}

function drawCourt() {
  context.fillStyle = "#05070c";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = "rgba(255, 255, 255, 0.22)";
  context.lineWidth = 4;
  context.setLineDash([18, 18]);
  context.beginPath();
  context.moveTo(canvas.width / 2, 24);
  context.lineTo(canvas.width / 2, canvas.height - 24);
  context.stroke();
  context.setLineDash([]);

  context.strokeStyle = "rgba(100, 244, 172, 0.18)";
  context.lineWidth = 2;
  context.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);
}

function drawPaddle(target) {
  context.fillStyle = "#f5f7fb";
  context.fillRect(target.x, target.y, paddle.width, paddle.height);
}

function drawBall() {
  context.fillStyle = "#64f4ac";
  context.fillRect(ball.x, ball.y, ball.size, ball.size);
}

function draw() {
  drawCourt();
  drawPaddle(player);
  drawPaddle(computer);
  drawBall();
}

function loop(timestamp) {
  if (!game.running || game.paused) {
    return;
  }

  const deltaTime = Math.min((timestamp - game.lastFrame) / 1000, 0.032);
  game.lastFrame = timestamp;

  update(deltaTime);
  draw();

  if (game.running) {
    requestAnimationFrame(loop);
  }
}

function handleKeyDown(event) {
  const key = event.key.toLowerCase();

  if (["arrowup", "arrowdown", " "].includes(key)) {
    event.preventDefault();
  }

  if (key === " ") {
    togglePause();
    return;
  }

  if (key === "r") {
    restartMatch();
    return;
  }

  keys.add(key);
}

function handleKeyUp(event) {
  keys.delete(event.key.toLowerCase());
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

resetBall();
updateScoreboard();
draw();
