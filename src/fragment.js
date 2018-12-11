class Fragment {
  constructor(x, y, radius, canvas, ctx, groundHeight, scale) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.groundHeight = groundHeight;
    this.x = x;
    this.y = y;
    this.radius = radius * scale;
    this.velocity = {
      x: (Math.random() - 0.5) * 4 * scale,
      y: 4 * scale
    };
    this.friction = 0.4;
    this.gravity = 0.4;
    this.opacity = 1;
    this.timeToLive = 50;
    this.color = `rgba(255,255,255,${this.opacity})`;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    if (
      this.y + this.velocity.y + this.radius >=
      this.canvas.height - this.groundHeight
    ) {
      this.velocity.y = -this.velocity.y * this.friction;
      this.velocity.x *= 0.9;
    } else {
      this.velocity.y += this.gravity;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.draw();

    this.timeToLive--;
    this.opacity -= 1 / this.timeToLive;
  }
}

export default Fragment;
