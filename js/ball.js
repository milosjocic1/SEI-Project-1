const startVelocity = 0.03;
const acceleration = 0.000005;

export default class Ball {
  constructor(pongBall) {
    this.pongBall = pongBall;
    this.positionReset();
  }

  get x() {
    return parseFloat(getComputedStyle(this.pongBall).getPropertyValue("--x"));
  }
  set x(val) {
    this.pongBall.style.setProperty("--x", val);
  }
  get y() {
    return parseFloat(getComputedStyle(this.pongBall).getPropertyValue("--y"));
  }

  set y(val) {
    this.pongBall.style.setProperty("--y", val);
  }

  positionReset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 };
    while (
      Math.abs(this.direction.x) <= 0.3 ||
      Math.abs(this.direction.x) >= 0.7
    ) {
      const ballDirection = randomNumber(0, 2 * Math.PI);
      this.direction = {
        x: Math.cos(ballDirection),
        y: Math.sin(ballDirection),
      };
    }
    this.velocity = startVelocity;
  }
  updateTime(deltaTime, barBoxes) {
    this.x += this.direction.x * this.velocity * deltaTime;
    this.y += this.direction.y * this.velocity * deltaTime;
    this.velocity += acceleration * deltaTime;

    const bounds = this.bounds();

    if (bounds.bottom >= window.innerHeight || bounds.top <= 0)
      this.direction.y = this.direction.y * -1;
    if (barBoxes.some((b) => collision(b, bounds)))
      this.direction.x = this.direction.x * -1;
  }

  bounds() {
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
  return Math.random() * (max - min) + min;
}
