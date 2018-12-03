import utils from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// Event Listeners
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

// Objects
class Spike {
  constructor() {
    this.x = canvas.width * Math.random();
    this.y = 0;
    this.width = 20;
    this.height = 50;
    this.color = "#fff";
    this.velocity = 20;
  }

  draw() {
    c.save();
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x - this.width / 2, this.y - this.height);
    c.lineTo(this.x + this.width / 2, this.y - this.height);
    c.shadowColor = "#E3EAEF";
    c.shadowBlur = 10;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.y += this.velocity;
    this.draw();
  }
}

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
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `rgba(255,255,255,${this.opacity})`;
    c.fill();
    c.closePath();
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

// Implementation
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");

let spikes = [],
  fragments = [],
  groundHeight = 100;

for (let i = 0; i < 1; i++) {
  spikes.push(new Spike());
}

// Animation Loop
function animate() {
  // Background
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Ground
  c.fillStyle = "#0D0909";
  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  // Spikes animation
  spikes.forEach((spike, index) => {
    spike.update();
    if (spike.y + spike.velocity >= canvas.height - groundHeight) {
      spikes.splice(index, 1);
      for (let i = 0; i < 8; i++) {
        const radius = (Math.random() + 0.5) * 3;
        fragments.push(new Fragment(spike.x, spike.y - radius, radius));
      }
    }
  });

  // Fragments animation
  fragments.forEach((fragment, index) => {
    fragment.update();
    if (fragment.timeToLive <= 0) {
      fragments.splice(index, 1);
    }
  });

  console.log(fragments);
  requestAnimationFrame(animate);
}

animate();
