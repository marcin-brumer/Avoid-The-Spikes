import { scale } from "./utils";

class Star {
  constructor(canvas, ctx, groundHeight) {
    this.canvas = canvas;
    this.x = canvas.width * Math.random();
    this.y = 0;
    this.radius = scale(15, this.canvas);
    this.velocity = scale(5, this.canvas);
    this.ctx = ctx;
    this.opacity = 1;
    this.timeToLive = 50;
    this.groundHeight = groundHeight;
  }

  draw() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.x, this.y);
    this.ctx.moveTo(0, 0 - this.radius);
    for (var i = 0; i < 5; i++) {
      this.ctx.rotate(Math.PI / 5);
      this.ctx.lineTo(0, 0 - this.radius * 0.5);
      this.ctx.rotate(Math.PI / 5);
      this.ctx.lineTo(0, 0 - this.radius);
    }
    this.ctx.shadowColor = `rgba(255, 234, 70, ${this.opacity})`;
    this.ctx.shadowBlur = 10;
    this.ctx.fillStyle = `rgba(255, 234, 70, ${this.opacity})`;
    this.ctx.fill();
    this.ctx.restore();
  }

  update() {
    if (this.y + this.radius < this.canvas.height - this.groundHeight) {
      this.y += this.velocity;
    } else {
      this.timeToLive--;
      this.opacity -= 1 / this.timeToLive;
    }

    this.draw();

    // Keeps variables updated
    this.radius = scale(15, this.canvas);
    this.velocity = scale(5, this.canvas);
  }
}

export default Star;
