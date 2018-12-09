class Star {
  constructor(canvas, ctx) {
    this.x = canvas.width * Math.random();
    this.y = 0;
    this.radius = 15;
    this.velocity = 5;
    this.ctx = ctx;
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
    this.ctx.shadowColor = "#FFEA46";
    this.ctx.shadowBlur = 10;
    this.ctx.fillStyle = "#FFEA46";
    this.ctx.fill();
    this.ctx.restore();
  }

  update() {
    this.y += this.velocity;
    this.draw();
  }
}

export default Star;
