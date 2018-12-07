class Spike {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = this.canvas.width * Math.random();
    this.y = 0;
    this.width = 10;
    this.height = 50;
    this.color = "#fff";
    this.velocity = 20;
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
  }
}

export default Spike;
