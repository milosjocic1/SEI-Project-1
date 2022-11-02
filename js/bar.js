const computerBarLimit = 0.01; 

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
    this.position +=
      computerBarLimit * deltaTime * (ballPositionY - 5 - this.position); 
  }
}
