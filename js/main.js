import Ball from "./ball.js";
import Bar from "./bar.js";

const ball = new Ball(document.getElementById("ball")); // setting constant of ball to a new instance of html property ball
const playerBar = new Bar(document.getElementById("player-bar"));
const computerBar = new Bar(document.getElementById("computer-bar"));
const playerPoint = document.getElementById("player-points");
const computerPoint = document.getElementById("computer-points");

let timePrevious; //timeprevious set to null

function updateTime(time) {
  if (timePrevious != null) {
    const deltaTime = time - timePrevious;
    ball.updateTime(deltaTime, [playerBar.bounds(), computerBar.bounds()]); // UNCOMMENT THIS TO START GAME LOOP
    computerBar.updateTime(deltaTime, ball.y);

    if (pointComputer()) pointReload();
  }
  timePrevious = time;
  window.requestAnimationFrame(updateTime);
} // the above are created to make the game run smoothly- as long as something can be changed on the screen, the update loop will run for the time
// logging the updated time to the console gives an infinite loop of times which all have a similar difference between them. this can be identified as deltaTime
// delta slightly fluctuates, so using it ensures that all movements of elements are based on the same timings
const countdown = document.getElementById("timer");

function pointComputer() {
  const bounds = ball.bounds();
  return bounds.right >= window.innerWidth || bounds.left <= 0;
}

function pointReload() {
  const bounds = ball.bounds();
  if (bounds.right >= window.innerWidth) {
    playerPoint.innerText = parseInt(playerPoint.innerText) + 1;
  } else {
    computerPoint.innerText = parseInt(computerPoint.innerText) + 1;
  }

  ball.positionReset();
}

// player bar movement successful
document.addEventListener("keydown", (e) => {
  var name = e.key;
  var code = e.code;
  if (name == "ArrowUp") {
    return (playerBar.position -= 10);
  } else if (name == "ArrowDown") {
    return (playerBar.position += 10);
  }
});

window.requestAnimationFrame(updateTime);
