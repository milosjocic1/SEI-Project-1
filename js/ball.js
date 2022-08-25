const startVelocity = 0.03;
const acceleration = 0.000005;

export default class Ball {
  //javascript classes- new method
  constructor(pongBall) {
    this.pongBall = pongBall;
    this.positionReset();
  }

  get x() {
    return parseFloat(getComputedStyle(this.pongBall).getPropertyValue("--x")); // using custom variable from css - getComputedStyle - pass in ballPong element + getPropertyValue - pass name of css variable -new methods. parseFloat parses argument (converting to string if necessary) then returns a floating point number to GET x
  }
  set x(val) {
    this.pongBall.style.setProperty("--x", val); // using dom, access css and set property --x to new value
  }
  get y() {
    return parseFloat(getComputedStyle(this.pongBall).getPropertyValue("--y"));
  }

  set y(val) {
    this.pongBall.style.setProperty("--y", val);
  }

  positionReset() {
    //reset of ball position to roughly middle of screen
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 }; // direction of ball is given as a unit vector of x and y magnitudes
    while (
      Math.abs(this.direction.x) <= 0.3 ||
      Math.abs(this.direction.x) >= 0.7
    ) {
      // keep ball moving more horizontally than vertically
      const ballDirection = randomNumber(0, 2 * Math.PI); // direction will be expressed in radians, hence the range for random number generation is 0 to 2PI
      this.direction = {
        x: Math.cos(ballDirection),
        y: Math.sin(ballDirection),
      }; // gcse maths all over again
    }
    this.velocity = startVelocity;
  }
  updateTime(deltaTime, barBoxes) {
    //test to see if ball changes position
    this.x += this.direction.x * this.velocity * deltaTime;
    this.y += this.direction.y * this.velocity * deltaTime;
    this.velocity += acceleration * deltaTime; // this increases the ball's velocity gradually to make the game hard. multiplied by delta so that it accelerates with every frame

    const bounds = this.bounds();
    
    if (bounds.bottom >= window.innerHeight || bounds.top <= 0)
      this.direction.y = this.direction.y * -1; // if bottom is greater than height of window, reverse position of ball and vice versa

    if (barBoxes.some((b) => collision(b, bounds)))
      this.direction.x = this.direction.x * -1;
  }

  bounds() {
    // gets position of ball
    return this.pongBall.getBoundingClientRect();
  }
}
function collision(bounds1, bounds2) {
  return (
    bounds1.right >= bounds2.left &&
    bounds1.left <= bounds2.right &&
    bounds1.bottom >= bounds2.top &&
    bounds1.top <= bounds2.bottom
  );
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min; // this method ensures number is in correct range
}
