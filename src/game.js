import utils from "./utils";
import Fragment from "./fragment";
import Spike from "./spike";
import Player from "./player";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const groundHeight = 100;
const backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
const sprite = new Image();
sprite.src = "./img/sprite.png";

let spikes = [];
let fragments = [];
let timer = 0;
let randomSpawnRate = Math.floor(Math.random() * 25 + 60);

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
    player.state.runningRight = true;
    player.state.idleLeft = false;
    player.state.idleRight = false;
  } else if (e.keyCode == 37) {
    player.state.runningLeft = true;
    player.state.idleLeft = false;
    player.state.idleRight = false;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    player.state.runningRight = false;
    player.state.idleLeft = false;
    player.state.idleRight = true;
  } else if (e.keyCode == 37) {
    player.state.runningLeft = false;
    player.state.idleLeft = true;
    player.state.idleRight = false;
  }
}

// Player create
const player = new Player(sprite, canvas, ctx, groundHeight);

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
        fragments.push(
          new Fragment(
            spike.x,
            spike.y - radius,
            radius,
            canvas,
            ctx,
            groundHeight
          )
        );
      }
    }
    // Collision Spike-Player
    if (
      spike.x < player.x + player.frameWidth &&
      spike.x + spike.width > player.x &&
      spike.y < player.y + player.frameHeight &&
      spike.height + spike.y > player.y
    ) {
      spikes.splice(index, 1);
      for (let i = 0; i < 8; i++) {
        const radius = (Math.random() + 0.5) * 3;
        fragments.push(
          new Fragment(
            spike.x,
            spike.y - radius,
            radius,
            canvas,
            ctx,
            groundHeight
          )
        );
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
    spikes.push(new Spike(canvas, ctx));
    randomSpawnRate = Math.floor(Math.random() * 25 + 60);
  }

  requestAnimationFrame(animate);
}

animate();
