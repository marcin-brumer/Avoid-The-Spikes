import { canvas, ctx, groundHeight } from "./constants";

class Fragment {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.velocity = {
      x: (Math.random() - 0.5) * 4,
      y: 4
    };
    this.friction = 0.4;
    this.gravity = 0.4;
    this.opacity = 1;
    this.timeToLive = 50;
    this.color = `rgba(255,255,255,${this.opacity})`;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (
      this.y + this.velocity.y + this.radius >=
      canvas.height - groundHeight
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
