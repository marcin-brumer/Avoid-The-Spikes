// Player object
class Player {
  constructor(sprite, canvas, ctx, groundHeight) {
    this.frameWidth = 90;
    this.frameHeight = 113.5;
    this.x = canvas.width / 2;
    this.y = canvas.height - groundHeight - this.frameHeight;
    this.velocity = 10;
    this.sprite = sprite;
    this.ctx = ctx;
    this.canvas = canvas;
    this.groundHeight = groundHeight;
    this.frameNr = 1;
    this.runFrameCount = 20;
    this.idleFrameCount = 16;
    this.frameXpos = [0, 90, 180, 270];
    this.state = {
      runningLeft: false,
      runningRight: false,
      idleLeft: false,
      idleRight: false
    };
  }

  draw(frameXpos, frameCount) {
    if (this.frameNr > frameCount) {
      this.frameNr = 1;
    }
    const frameYpos = (this.frameNr - 1) * this.frameHeight;
    this.ctx.drawImage(
      this.sprite,
      frameXpos,
      frameYpos,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth,
      this.frameHeight
    );
    this.frameNr++;
  }

  update() {
    if (this.state.runningRight) {
      this.draw(this.frameXpos[2], this.runFrameCount);
      if (this.x + this.frameWidth < this.canvas.width) {
        this.x += this.velocity;
      }
    } else if (this.state.runningLeft) {
      this.draw(this.frameXpos[3], this.runFrameCount);
      if (this.x > 0) {
        this.x -= this.velocity;
      }
    } else if (this.state.idleLeft) {
      this.draw(this.frameXpos[1], this.idleFrameCount);
    } else {
      this.draw(this.frameXpos[0], this.idleFrameCount);
    }
    // Keeps player Y position when screen is resized
    this.y = this.canvas.height - this.groundHeight - this.frameHeight;
  }
}

export default Player;
