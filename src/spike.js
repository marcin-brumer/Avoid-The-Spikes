import { canvas, ctx } from "./constants";

class Spike {
  constructor() {
    this.x = canvas.width * Math.random();
    this.y = 0;
    this.width = 10;
    this.height = 50;
    this.color = "#fff";
    this.velocity = 20;
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.width, this.y);
    ctx.lineTo(this.x + this.width / 2, this.y + this.height);
    ctx.shadowColor = "#E3EAEF";
    ctx.shadowBlur = 10;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  update() {
    this.y += this.velocity;
    this.draw();
  }
}

export default Spike;
