import utils from "./utils";
import Fragment from "./fragment";
import Spike from "./spike";
import Player from "./player";
import Star from "./star";
import "../scss/index.scss";

const loader = document.getElementById("loader");
const gameArea = document.getElementById("gameArea");
const canvas = document.getElementById("gameCanvas");
const startMenu = document.getElementById("start_menu");
const startBtn = document.getElementById("start_btn");
const gameOverMenu = document.getElementById("game_over_menu");
const playAgainBtn = document.getElementById("play_again_btn");
const scoreDisplay = document.getElementById("score_display");
const ctx = canvas.getContext("2d");
const groundHeight = 100;
const sprite = new Image();
sprite.src = "./img/sprite.png";

let spikes;
let fragments;
let stars;
let timer;
let score;
let spikeRandomSpawnRate = utils.randomIntFromRange(20, 40);
let starRandomSpawnRate = utils.randomIntFromRange(120, 180);
let runAnim = false; //Check if animation should run
let player; // Player instance

// Event Listeners
window.addEventListener(
  "load",
  () => {
    resizeGame();
    // Lets loader run for 1,5s, because otherwise it's load too fast and it doesn't look good
    setTimeout(() => {
      loader.style.display = "none";
      gameArea.style.display = "block";
    }, 1500);
  },
  false
);
window.addEventListener("resize", resizeGame, false);
window.addEventListener("orientationchange", resizeGame, false);
startBtn.addEventListener("click", () => {
  // Enable controls
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  // Hide menu
  startMenu.style.display = "none";
  // Initialize game
  init();
});
playAgainBtn.addEventListener("click", () => {
  // Enable controls
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  // Hide menu
  gameOverMenu.style.display = "none";
  // Initialize game
  init();
});

// Scale canvas to fit window (16:9 ratio)
function resizeGame() {
  var widthToHeight = 16 / 9;
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  var newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
    newWidth = newHeight * widthToHeight;
    gameArea.style.height = newHeight + "px";
    gameArea.style.width = newWidth + "px";
  } else {
    newHeight = newWidth / widthToHeight;
    gameArea.style.width = newWidth + "px";
    gameArea.style.height = newHeight + "px";
  }

  gameArea.style.marginTop = -newHeight / 2 + "px";
  gameArea.style.marginLeft = -newWidth / 2 + "px";

  canvas.width = newWidth;
  canvas.height = newHeight;
}

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

// Score Display
function drawScore() {
  ctx.font = `${utils.scale(35, canvas)}px Arial`;
  ctx.fillStyle = "#fff";
  ctx.fillText(
    "Score: " + score,
    8,
    canvas.height - 0.35 * utils.scale(groundHeight, canvas)
  );
}

// Initialize/Reset game
function init() {
  player = new Player(sprite, canvas, ctx, groundHeight);
  spikes = [];
  fragments = [];
  stars = [];
  timer = 0;
  score = 0;
  runAnim = true;
  animate();
}

// Animation Loop
function animate() {
  if (runAnim) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Ground
    ctx.fillStyle = "#0D0909";
    ctx.fillRect(
      0,
      canvas.height - utils.scale(groundHeight, canvas),
      canvas.width,
      utils.scale(groundHeight, canvas)
    );

    // Spikes animation
    spikes.forEach((spike, index) => {
      spike.update();
      // Collision Spike-Ground
      if (
        spike.y + spike.height >=
        canvas.height - utils.scale(groundHeight, canvas)
      ) {
        // Destroy Spike
        spikes.splice(index, 1);
        // Create fragments
        for (let i = 0; i < 8; i++) {
          const radius = (Math.random() + 0.5) * 3;
          fragments.push(
            new Fragment(
              spike.x,
              spike.y + spike.height - utils.scale(radius, canvas),
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
        spike.x < player.x + player.scaledFrameWidth &&
        spike.x + spike.width > player.x &&
        spike.y < player.y + player.scaledFrameHeight &&
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
              spike.y + spike.height - utils.scale(radius, canvas),
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
        // Disable controls
        document.removeEventListener("keydown", keyDownHandler, false);
        document.removeEventListener("keyup", keyUpHandler, false);
        // Stops animation and shows game over screen after 500ms
        setTimeout(() => {
          runAnim = false;
          gameOverMenu.style.display = "block";
          scoreDisplay.innerText = `Score: ${score}`;
        }, 500);
      }
    });

    // Stars animation
    stars.forEach((star, index) => {
      star.update();
      // Collision Star-Ground
      if (star.timeToLive <= 1) {
        // Destroy Star
        stars.splice(index, 1);
      }
      // Collision Star-Player
      if (
        star.x - star.radius < player.x + player.scaledFrameWidth &&
        star.x + star.radius > player.x &&
        star.y - star.radius < player.y + player.scaledFrameHeight &&
        star.y + star.radius > player.y
      ) {
        // Destroy Star
        stars.splice(index, 1);
        // Update score
        score++;
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
    // Spawn Spikes
    if (timer % spikeRandomSpawnRate === 0) {
      spikes.push(new Spike(canvas, ctx));
      spikeRandomSpawnRate = utils.randomIntFromRange(20, 40);
    }
    // Spawn Stars
    if (timer % starRandomSpawnRate === 0) {
      stars.push(new Star(canvas, ctx, groundHeight));
      starRandomSpawnRate = utils.randomIntFromRange(140, 280);
    }

    // Display Score
    drawScore();

    requestAnimationFrame(animate);
  }
}
