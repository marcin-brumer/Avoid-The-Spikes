import utils from "./utils";
import Fragment from "./fragment";
import Spike from "./spike";
import Player from "./player";
import Star from "./star";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const groundHeight = 100;
const backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
const sprite = new Image();
sprite.src = "./img/sprite.png";

let spikes = [];
let fragments = [];
let stars = [];
let timer = 0;
let spikeRandomSpawnRate = utils.randomIntFromRange(20, 40);
let starRandomSpawnRate = utils.randomIntFromRange(120, 180);

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
  } else if (e.keyCode == 37) {
    player.state.runningLeft = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    player.state.runningRight = false;
    player.state.idleRight = true;
    player.state.idleLeft = false;
  } else if (e.keyCode == 37) {
    player.state.runningLeft = false;
    player.state.idleRight = false;
    player.state.idleLeft = true;
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

  // Spikes animation
  spikes.forEach((spike, index) => {
    spike.update();
    // Collision Spike-Ground
    if (spike.y + spike.height >= canvas.height - groundHeight) {
      // Destroy Spike
      spikes.splice(index, 1);
      // Create fragments
      for (let i = 0; i < 8; i++) {
        const radius = (Math.random() + 0.5) * 3;
        fragments.push(
          new Fragment(
            spike.x,
            spike.y + spike.height - radius,
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
      // Destroy Spike
      spikes.splice(index, 1);
      // Create fragments
      for (let i = 0; i < 8; i++) {
        const radius = (Math.random() + 0.5) * 3;
        fragments.push(
          new Fragment(
            spike.x,
            spike.y + spike.height - radius,
            radius,
            canvas,
            ctx,
            groundHeight
          )
        );
      }
      // Player death
      player.state = {
        runningLeft: false,
        runningRight: false,
        idleLeft: false,
        idleRight: false,
        dead: true
      };
    }
  });

  // Stars animation
  stars.forEach((star, index) => {
    star.update();
    // Collision Star-Ground
    if (star.y + star.radius >= canvas.height - groundHeight) {
      // Destroy Star
      stars.splice(index, 1);
    }
    // Collision Star-Player
    if (
      star.x - star.radius < player.x + player.frameWidth &&
      star.x + star.radius > player.x &&
      star.y - star.radius < player.y + player.frameHeight &&
      star.y + star.radius > player.y
    ) {
      // Destroy Star
      stars.splice(index, 1);
    }
  });

  // Fragments animation
  fragments.forEach((fragment, index) => {
    fragment.update();
    if (fragment.timeToLive <= 0) {
      fragments.splice(index, 1);
    }
  });

  // Player animation
  player.update();

  timer++;
  if (timer % spikeRandomSpawnRate === 0) {
    spikes.push(new Spike(canvas, ctx));
    spikeRandomSpawnRate = utils.randomIntFromRange(20, 40);
  }
  if (timer % starRandomSpawnRate === 0) {
    stars.push(new Star(canvas, ctx));
    starRandomSpawnRate = utils.randomIntFromRange(120, 180);
  }

  requestAnimationFrame(animate);
}

animate();
