import utils from "./utils";
import { canvas, ctx, groundHeight, backgroundGradient } from "./constants";
import Fragment from "./fragment";
import Spike from "./spike";

let spikes = [],
  fragments = [],
  timer = 0,
  randomSpawnRate = Math.floor(Math.random() * 25 + 60),
  rightPressed = false,
  leftPressed = false;

// Fullscreeen canvas
canvas.width = innerWidth;
canvas.height = innerHeight;

// Event Listeners
window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Player controls
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

// Player object
class Player {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height - groundHeight - this.height;
    this.velocity = 15;
  }

  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "red";
    ctx.fill();
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

// Player create
const player = new Player();

// Background color
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");

// Animation Loop
function animate() {
  // Background
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Ground
  ctx.fillStyle = "#0D0909";
  ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  // Player animation
  player.update();

  // Spikes animation
  spikes.forEach((spike, index) => {
    spike.update();
    // Collision Spike-Ground
    if (spike.y >= canvas.height - groundHeight) {
      spikes.splice(index, 1);
      for (let i = 0; i < 8; i++) {
        const radius = (Math.random() + 0.5) * 3;
        fragments.push(new Fragment(spike.x, spike.y - radius, radius));
      }
    }
    // Collision Spike-Player
    if (
      spike.x < player.x + player.width &&
      spike.x + spike.width > player.x &&
      spike.y < player.y + player.height &&
      spike.height + spike.y > player.y
    ) {
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
