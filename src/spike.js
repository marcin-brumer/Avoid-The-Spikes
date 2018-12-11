import { scale } from "./utils";

class Spike {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = this.canvas.width * Math.random();
    this.y = 0;
    this.color = "#fff";
    this.width = scale(10, this.canvas);
    this.height = scale(50, this.canvas);
    this.velocity = scale(15, this.canvas);
  }

  draw() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.width, this.y);
    this.ctx.lineTo(this.x + this.width / 2, this.y + this.height);
    this.ctx.shadowColor = "#E3EAEF";
    this.ctx.shadowBlur = 10;
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  update() {
    this.y += this.velocity;
    this.draw();

    // Keeps variables updated
    this.width = scale(10, this.canvas);
    this.height = scale(50, this.canvas);
    this.velocity = scale(15, this.canvas);
  }
}

export default Spike;
