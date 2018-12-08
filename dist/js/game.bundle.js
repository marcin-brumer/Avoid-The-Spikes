/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fragment.js":
/*!*************************!*\
  !*** ./src/fragment.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fragment = function () {
  function Fragment(x, y, radius, canvas, ctx, groundHeight) {
    _classCallCheck(this, Fragment);

    this.canvas = canvas;
    this.ctx = ctx;
    this.groundHeight = groundHeight;
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
    this.color = "rgba(255,255,255," + this.opacity + ")";
  }

  _createClass(Fragment, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.y + this.velocity.y + this.radius >= this.canvas.height - this.groundHeight) {
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
  }]);

  return Fragment;
}();

exports.default = Fragment;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _fragment = __webpack_require__(/*! ./fragment */ "./src/fragment.js");

var _fragment2 = _interopRequireDefault(_fragment);

var _spike = __webpack_require__(/*! ./spike */ "./src/spike.js");

var _spike2 = _interopRequireDefault(_spike);

var _player = __webpack_require__(/*! ./player */ "./src/player.js");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var groundHeight = 100;
var backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
var sprite = new Image();
sprite.src = "./img/sprite.png";

var spikes = [];
var fragments = [];
var timer = 0;
var randomSpawnRate = Math.floor(Math.random() * 25 + 60);

// Fullscreeen canvas
canvas.width = innerWidth;
canvas.height = innerHeight;

// Event Listeners
window.addEventListener("resize", function () {
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
var player = new _player2.default(sprite, canvas, ctx, groundHeight);

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
  spikes.forEach(function (spike, index) {
    spike.update();
    // Collision Spike-Ground
    if (spike.y + spike.height >= canvas.height - groundHeight) {
      // Destroy Spike
      spikes.splice(index, 1);
      // Create fragments
      for (var i = 0; i < 8; i++) {
        var radius = (Math.random() + 0.5) * 3;
        fragments.push(new _fragment2.default(spike.x, spike.y + spike.height - radius, radius, canvas, ctx, groundHeight));
      }
    }
    // Collision Spike-Player
    if (spike.x < player.x + player.frameWidth && spike.x + spike.width > player.x && spike.y < player.y + player.frameHeight && spike.height + spike.y > player.y) {
      // Destroy Spike
      spikes.splice(index, 1);
      // Create fragments
      for (var _i = 0; _i < 8; _i++) {
        var _radius = (Math.random() + 0.5) * 3;
        fragments.push(new _fragment2.default(spike.x, spike.y + spike.height - _radius, _radius, canvas, ctx, groundHeight));
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

  // Fragments animation
  fragments.forEach(function (fragment, index) {
    fragment.update();
    if (fragment.timeToLive <= 0) {
      fragments.splice(index, 1);
    }
  });

  // Player animation
  player.update();

  // Random spawn of Spikes
  timer++;
  if (timer % randomSpawnRate === 0) {
    spikes.push(new _spike2.default(canvas, ctx));
    randomSpawnRate = Math.floor(Math.random() * 25 + 60);
  }
  requestAnimationFrame(animate);
}

animate();

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Player object
var Player = function () {
  function Player(sprite, canvas, ctx, groundHeight) {
    _classCallCheck(this, Player);

    this.frameWidth = 90;
    this.frameHeight = 113.5;
    this.x = canvas.width / 2;
    this.y = canvas.height - groundHeight - this.frameHeight;
    this.velocity = 10;
    this.sprite = sprite;
    this.ctx = ctx;
    this.canvas = canvas;
    this.groundHeight = groundHeight;
    this.frameNr = 1;
    this.runFrameCount = 20;
    this.idleFrameCount = 16;
    this.deadFrameCount = 30;
    this.frameXpos = {
      idleRight: 0,
      idleLeft: 90,
      runningRight: 180,
      runningLeft: 270,
      dead: 360
    };
    this.state = {
      runningLeft: false,
      runningRight: false,
      idleLeft: false,
      idleRight: true,
      dead: false
    };
  }

  _createClass(Player, [{
    key: "deathAnim",
    value: function deathAnim() {
      if (this.frameNr > 30) {
        this.frameNr = 30;
      }
      var frameYpos = (this.frameNr - 1) * 125.5;
      this.ctx.drawImage(this.sprite, this.frameXpos.dead, frameYpos, 150, 125.5, this.x, this.y, 150, 125.5);
      this.frameNr++;
    }
  }, {
    key: "draw",
    value: function draw(frameXpos, frameCount) {
      if (this.frameNr > frameCount) {
        this.frameNr = 1;
      }
      var frameYpos = (this.frameNr - 1) * this.frameHeight;
      this.ctx.drawImage(this.sprite, frameXpos, frameYpos, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
      this.frameNr++;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.state.runningRight) {
        this.draw(this.frameXpos.runningRight, this.runFrameCount);
        if (this.x + this.frameWidth < this.canvas.width) {
          this.x += this.velocity;
        }
      } else if (this.state.runningLeft) {
        this.draw(this.frameXpos.runningLeft, this.runFrameCount);
        if (this.x > 0) {
          this.x -= this.velocity;
        }
      } else if (this.state.idleLeft) {
        this.draw(this.frameXpos.idleLeft, this.idleFrameCount);
      } else if (this.state.idleRight) {
        this.draw(this.frameXpos.idleRight, this.idleFrameCount);
      } else if (this.state.dead) {
        this.deathAnim();
      }
      // Keeps player Y position when screen is resized
      this.y = this.canvas.height - this.groundHeight - this.frameHeight;
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),

/***/ "./src/spike.js":
/*!**********************!*\
  !*** ./src/spike.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spike = function () {
  function Spike(canvas, ctx) {
    _classCallCheck(this, Spike);

    this.ctx = ctx;
    this.canvas = canvas;
    this.x = this.canvas.width * Math.random();
    this.y = 0;
    this.width = 10;
    this.height = 50;
    this.color = "#fff";
    this.velocity = 15;
  }

  _createClass(Spike, [{
    key: "draw",
    value: function draw() {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.x + this.width, this.y);
      this.ctx.lineTo(this.x + this.width / 2, this.y + this.height);
      this.ctx.shadowColor = "#E3EAEF";
      this.ctx.shadowBlur = 10;
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.y += this.velocity;
      this.draw();
    }
  }]);

  return Spike;
}();

exports.default = Spike;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = { randomIntFromRange: randomIntFromRange, randomColor: randomColor, distance: distance };

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map