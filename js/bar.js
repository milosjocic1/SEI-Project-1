const computerBarLimit = 0.01; // this constant is created to make the game winnable - if there's no limit to the computer bar's ability to match the y position of the ball, the game would be unwinnable

export default class Bar {
  constructor(pongBar) {
    this.pongBar = pongBar;
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.pongBar).getPropertyValue("--position")
    );
  }

  set position(val) {
    this.pongBar.style.setProperty("--position", val);
  }

  bounds() {
    return this.pongBar.getBoundingClientRect();
  }

  updateTime(deltaTime, ballPositionY) {
    // computer bar must follow the y position of the ball
    this.position +=
      computerBarLimit * deltaTime * (ballPositionY - 5 - this.position); // not the best way of centering bar to hit ball but running out of time!
  }
}
