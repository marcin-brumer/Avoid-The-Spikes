import utils from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// Event Listeners
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Spike {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.velocity = 20;
  }

  draw() {
    c.save();
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x - 10, this.y - 50);
    c.lineTo(this.x + 10, this.y - 50);
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

// Implementation
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");

let spikes = [],
  groundHeight = 100;

for (let i = 0; i < 1; i++) {
  spikes.push(new Spike(canvas.width / 2, 200, "#fff"));
}

// Animation Loop
function animate() {
  // Background
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);
  // Ground
  c.fillStyle = "#0D0909";
  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  spikes.forEach((spike, index) => {
    spike.update();
    if (spike.y >= canvas.height - groundHeight) {
      spikes.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
