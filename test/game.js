'use strict'

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 10;

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

let brickRowCount = 5;
let brickColumnCount = 3;

const brickWidth = 75;
const brickHeight = 20;

const brickPadding = 10;

const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;
let lives = 3;

const bricks = [];

/**
 * Create the bricks arrays.
 */
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];

  for (let r = 0; r < brickRowCount; r++) bricks[c][r] = { x: 0, y: 0, status: 1 };
}

/**
 * Add the event listeners for the controls.
 */
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

/**
 * When a key is pressed, check the direction and set that direction's boolean to true.
 * 
 * @param {Event} e The keydown event object.
 */
function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") rightPressed = true;

  else if (e.key == "Left" || e.key == "ArrowLeft") leftPressed = true;
}

/**
 * When a key is released, check the direction and set that direction's boolean to false.
 * 
 * @param {Event} e The keyup event object.
 */
function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") rightPressed = false;

  else if (e.key == "Left" || e.key == "ArrowLeft") leftPressed = false;
}

/**
 * When the mouse moves change the position of the paddle to move with it.
 * 
 * @param {Event} e The mousemove event object.
 */
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;

  if (relativeX > 0 && relativeX < canvas.width) paddleX = relativeX - paddleWidth / 2;
}

/**
 * Check to see if the ball has collided with any bricks.
 */
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];

      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;

          b.status = 0;

          score++;

          if (score == brickRowCount * brickColumnCount) {
            // alert("YOU WIN, CONGRATS!");
            // document.location.reload();
          }
        }
      }
    }
  }
}

/**
 * Draw the ball at the position it's supposed to be at.
 */
function drawBall() {
  ctx.beginPath();

  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";

  ctx.fill();
  ctx.closePath();
}

/**
 * Draw the paddle at the position it's supposed to be at.
 */
function drawPaddle() {
  ctx.beginPath();

  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";

  ctx.fill();
  ctx.closePath();
}

/**
 * Draw the bricks at the position they're supposed to be at.
 */
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        const brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
        const brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;

        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        ctx.beginPath();

        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";

        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

/**
 * Write the score to the the game.
 */
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

/**
 * Write the amount of lives left to the game.
 */
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}