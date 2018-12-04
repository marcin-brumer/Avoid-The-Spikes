import utils from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let rightPressed = false;
let leftPressed = false;

// Event Listeners
window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

// Objects
class Player {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height - groundHeight - 50;
    this.velocity = 15;
  }

  draw() {
    c.beginPath();
    c.rect(this.x, this.y, 50, 50);
    c.fillStyle = "red";
    c.fill();
  }

  update() {
    if (rightPressed && this.x + 50 < canvas.width) {
      this.x += this.velocity;
    } else if (leftPressed && this.x > 0) {
      this.x -= this.velocity;
    }
    this.y = canvas.height - groundHeight - 50;
    this.draw();
  }
}

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
  groundHeight = 100,
  timer = 0,
  randomSpawnRate = Math.floor(Math.random() * 25 + 60);

const player = new Player();

// Animation Loop
function animate() {
  // Background
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Ground
  c.fillStyle = "#0D0909";
  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  // Player animation
  player.update();

  // Spikes animation
  spikes.forEach((spike, index) => {
    spike.update();
    if (spike.y >= canvas.height - groundHeight) {
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

  // Random spawn of Spikes
  timer++;
  if (timer % randomSpawnRate === 0) {
    spikes.push(new Spike());
    randomSpawnRate = Math.floor(Math.random() * 25 + 60);
  }

  requestAnimationFrame(animate);
}

animate();
