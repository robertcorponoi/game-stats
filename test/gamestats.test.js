'use strict'

import GameStats from '../game-stats.js';

let gameStats = new GameStats();

beforeEach(() => draw());

describe('Getting Statistics', () => {
  it('should get the game loop info', function (done) {
    this.timeout(10000);

    setTimeout(() => {
      const stats = gameStats.stats();

      chai.expect(stats.browser.name).to.not.be.null && chai.expect(stats.browser.version).to.not.be.null &&

        chai.expect(stats.timestamp).to.be.greaterThan(2000) && chai.expect(stats.timestamp).to.be.lessThan(2500) &&

        chai.expect(stats.prevTimestamp).to.be.greaterThan(2000) && chai.expect(stats.prevTimestamp).to.be.lessThan(2500) &&

        chai.expect(stats.predictedNextTimestamp).to.be.greaterThan(2000) && chai.expect(stats.predictedNextTimestamp).to.be.lessThan(2500) &&

        chai.expect(stats.delta).to.be.greaterThan(16) && chai.expect(stats.delta).to.be.lessThan(17) &&

        chai.expect(stats.deltaAverage).to.be.greaterThan(16) && chai.expect(stats.deltaAverage).to.be.lessThan(17) &&

        chai.expect(stats.frame).to.be.greaterThan(119) && chai.expect(stats.frame).to.be.lessThan(123) &&

        chai.expect(stats.fps).to.be.greaterThan(50) && chai.expect(stats.fps).to.be.lessThan(70) &&

        chai.expect(stats.fpsAverage).to.be.greaterThan(50) && chai.expect(stats.fpsAverage).to.be.lessThan(70) &&

        chai.expect(stats.history.timestamps.length).to.equal(10) &&

        chai.expect(stats.history.deltas.length).to.equal(10);

        done();
    }, 2000);
  });
});

/**
 * Runs once every frame and draws the objects to the board at their new positions.
 * 
 * @param {DOMHighResTimestamp} timestamp The timestamp returned from requestAnimationFrame.
 */
function draw(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;

  if (y + dy < ballRadius) dy = -dy;

  else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) dy = -dy;

    else {
      lives--;

      if (!lives) {
        // alert("GAME OVER");
        // document.location.reload();
      }
      else {
        x = canvas.width / 2;
        y = canvas.height - 30;

        dx = 3;
        dy = -3;

        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) paddleX += 7;

  else if (leftPressed && paddleX > 0) paddleX -= 7;

  x += dx;
  y += dy;

  requestAnimationFrame(draw);

  gameStats.record(timestamp);
}