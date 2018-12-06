import utils from "./utils";
import { canvas, ctx, groundHeight, backgroundGradient } from "./constants";
import Fragment from "./fragment";
import Spike from "./spike";

let spikes = [],
  fragments = [],
  timer = 0,
  randomSpawnRate = Math.floor(Math.random() * 25 + 60),
  rightPressed = false,
  leftPressed = false,
  state = {
    runningLeft: false,
    runningRight: false,
    idleLeft: false,
    idleRight: true
  };

const sprite = new Image();
sprite.src = "./img/sprite.png";

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
    state = {
      runningLeft: false,
      runningRight: true,
      idleLeft: false,
      idleRight: false
    };
  } else if (e.keyCode == 37) {
    state = {
      runningLeft: true,
      runningRight: false,
      idleLeft: false,
      idleRight: false
    };
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    state = {
      runningLeft: false,
      runningRight: false,
      idleLeft: false,
      idleRight: true
    };
  } else if (e.keyCode == 37) {
    state = {
      runningLeft: false,
      runningRight: false,
      idleLeft: true,
      idleRight: false
    };
  }
}

// Player object
class Player {
  constructor(sprite) {
    this.frameWidth = 90;
    this.frameHeight = 113.5;
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height - groundHeight - this.frameHeight;
    this.velocity = 15;
    this.sprite = sprite;
    this.frameNr = 1;
    this.runFrameCount = 20;
  }

  runningRight() {
    if (this.frameNr > this.runFrameCount) {
      this.frameNr = 1;
    }
    const frameYpos = (this.frameNr - 1) * this.frameHeight;
    ctx.drawImage(
      this.sprite,
      180,
      frameYpos,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth,
      this.frameHeight
    );
    this.frameNr++;
  }

  runningLeft() {
    if (this.frameNr > this.runFrameCount) {
      this.frameNr = 1;
    }
    const frameYpos = (this.frameNr - 1) * this.frameHeight;
    ctx.drawImage(
      this.sprite,
      270,
      frameYpos,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth,
      this.frameHeight
    );
    this.frameNr++;
  }

  update() {
    if (state.runningRight) {
      this.runningRight();
      if (this.x + this.frameWidth < canvas.width) {
        this.x += this.velocity;
      }
    } else if (state.runningLeft) {
      this.runningLeft();
      if (this.x > 0) {
        this.x -= this.velocity;
      }
    }
  }
}

// Player create
const player = new Player(sprite);

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
