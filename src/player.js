import { scale } from "./utils";

class Player {
  constructor(sprite, canvas, ctx, groundHeight) {
    this.canvas = canvas;
    this.frameWidth = 90;
    this.frameHeight = 113.5;
    this.scaledFrameWidth = scale(this.frameWidth, this.canvas);
    this.scaledFrameHeight = scale(this.frameHeight, this.canvas);
    this.x = this.canvas.width / 2;
    this.y =
      this.canvas.height -
      this.groundHeight -
      scale(this.frameHeight, this.canvas);
    this.velocity = scale(10, this.canvas);
    this.sprite = sprite;
    this.ctx = ctx;

    this.groundHeight = groundHeight;
    this.frameNr = 1;
    this.runFrameCount = 20;
    this.idleFrameCount = 16;
    this.deadFrameCount = 30;
    this.frameXpos = {
      idleRight: 0,
      idleLeft: 90,
      runningRight: 180,
      runningLeft: 270,
      dead: 360
    };
    this.state = {
      runningLeft: false,
      runningRight: false,
      idleLeft: false,
      idleRight: true,
      dead: false
    };
  }

  deathAnim() {
    if (this.frameNr > 30) {
      this.frameNr = 30;
    }
    const frameYpos = (this.frameNr - 1) * 125.5;
    this.ctx.drawImage(
      this.sprite,
      this.frameXpos.dead,
      frameYpos,
      150,
      125.5,
      this.x,
      this.y,
      scale(150, this.canvas),
      scale(125.5, this.canvas)
    );
    this.frameNr++;
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
      this.scaledFrameWidth,
      this.scaledFrameHeight
    );
    this.frameNr++;
  }

  update() {
    if (this.state.runningRight) {
      this.draw(this.frameXpos.runningRight, this.runFrameCount);
      if (this.x + this.scaledFrameWidth < this.canvas.width) {
        this.x += this.velocity;
      }
    } else if (this.state.runningLeft) {
      this.draw(this.frameXpos.runningLeft, this.runFrameCount);
      if (this.x > 0) {
        this.x -= this.velocity;
      }
    } else if (this.state.idleLeft) {
      this.draw(this.frameXpos.idleLeft, this.idleFrameCount);
    } else if (this.state.idleRight) {
      this.draw(this.frameXpos.idleRight, this.idleFrameCount);
    } else if (this.state.dead) {
      this.deathAnim();
    }

    // Keeps variables updated
    this.scaledFrameWidth = scale(this.frameWidth, this.canvas);
    this.scaledFrameHeight = scale(this.frameHeight, this.canvas);
    this.y =
      this.canvas.height -
      this.groundHeight -
      scale(this.frameHeight, this.canvas);
    this.velocity = scale(10, this.canvas);
  }
}

export default Player;
