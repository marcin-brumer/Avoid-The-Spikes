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

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var canvas = exports.canvas = document.querySelector("canvas");
var ctx = exports.ctx = canvas.getContext("2d");
var groundHeight = exports.groundHeight = 100;
var backgroundGradient = exports.backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

/***/ }),

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

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fragment = function () {
  function Fragment(x, y, radius) {
    _classCallCheck(this, Fragment);

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
      _constants.ctx.beginPath();
      _constants.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      _constants.ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
      _constants.ctx.fill();
      _constants.ctx.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.y + this.velocity.y + this.radius >= _constants.canvas.height - _constants.groundHeight) {
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

var _fragment = __webpack_require__(/*! ./fragment */ "./src/fragment.js");

var _fragment2 = _interopRequireDefault(_fragment);

var _spike = __webpack_require__(/*! ./spike */ "./src/spike.js");

var _spike2 = _interopRequireDefault(_spike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var spikes = [],
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

var sprite = new Image();
sprite.src = "./img/sprite.png";

// Fullscreeen canvas
_constants.canvas.width = innerWidth;
_constants.canvas.height = innerHeight;

// Event Listeners
window.addEventListener("resize", function () {
  _constants.canvas.width = innerWidth;
  _constants.canvas.height = innerHeight;
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

var Player = function () {
  function Player(sprite) {
    _classCallCheck(this, Player);

    this.frameWidth = 90;
    this.frameHeight = 113.5;
    this.width = 50;
    this.height = 50;
    this.x = _constants.canvas.width / 2;
    this.y = _constants.canvas.height - _constants.groundHeight - this.frameHeight;
    this.velocity = 15;
    this.sprite = sprite;
    this.frameNr = 1;
    this.runFrameCount = 20;
  }

  _createClass(Player, [{
    key: "runningRight",
    value: function runningRight() {
      if (this.frameNr > this.runFrameCount) {
        this.frameNr = 1;
      }
      var frameYpos = (this.frameNr - 1) * this.frameHeight;
      _constants.ctx.drawImage(this.sprite, 180, frameYpos, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
      this.frameNr++;
    }
  }, {
    key: "runningLeft",
    value: function runningLeft() {
      if (this.frameNr > this.runFrameCount) {
        this.frameNr = 1;
      }
      var frameYpos = (this.frameNr - 1) * this.frameHeight;
      _constants.ctx.drawImage(this.sprite, 270, frameYpos, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
      this.frameNr++;
    }
  }, {
    key: "update",
    value: function update() {
      if (state.runningRight) {
        this.runningRight();
        if (this.x + this.frameWidth < _constants.canvas.width) {
          this.x += this.velocity;
        }
      } else if (state.runningLeft) {
        this.runningLeft();
        if (this.x > 0) {
          this.x -= this.velocity;
        }
      }
    }
  }]);

  return Player;
}();

// Player create


var player = new Player(sprite);

// Background color
_constants.backgroundGradient.addColorStop(0, "#171e26");
_constants.backgroundGradient.addColorStop(1, "#3f586b");

// Animation Loop
function animate() {
  // Background
  _constants.ctx.fillStyle = _constants.backgroundGradient;
  _constants.ctx.fillRect(0, 0, _constants.canvas.width, _constants.canvas.height);

  // Ground
  _constants.ctx.fillStyle = "#0D0909";
  _constants.ctx.fillRect(0, _constants.canvas.height - _constants.groundHeight, _constants.canvas.width, _constants.groundHeight);

  // Player animation
  player.update();

  // Spikes animation
  spikes.forEach(function (spike, index) {
    spike.update();
    // Collision Spike-Ground
    if (spike.y >= _constants.canvas.height - _constants.groundHeight) {
      spikes.splice(index, 1);
      for (var i = 0; i < 8; i++) {
        var radius = (Math.random() + 0.5) * 3;
        fragments.push(new _fragment2.default(spike.x, spike.y - radius, radius));
      }
    }
    // Collision Spike-Player
    if (spike.x < player.x + player.width && spike.x + spike.width > player.x && spike.y < player.y + player.height && spike.height + spike.y > player.y) {
      spikes.splice(index, 1);
      for (var _i = 0; _i < 8; _i++) {
        var _radius = (Math.random() + 0.5) * 3;
        fragments.push(new _fragment2.default(spike.x, spike.y - _radius, _radius));
      }
    }
  });

  // Fragments animation
  fragments.forEach(function (fragment, index) {
    fragment.update();
    if (fragment.timeToLive <= 0) {
      fragments.splice(index, 1);
    }
  });

  // Random spawn of Spikes
  timer++;
  if (timer % randomSpawnRate === 0) {
    spikes.push(new _spike2.default());
    randomSpawnRate = Math.floor(Math.random() * 25 + 60);
  }

  requestAnimationFrame(animate);
}

animate();

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

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spike = function () {
  function Spike() {
    _classCallCheck(this, Spike);

    this.x = _constants.canvas.width * Math.random();
    this.y = 0;
    this.width = 10;
    this.height = 50;
    this.color = "#fff";
    this.velocity = 20;
  }

  _createClass(Spike, [{
    key: "draw",
    value: function draw() {
      _constants.ctx.save();
      _constants.ctx.beginPath();
      _constants.ctx.moveTo(this.x, this.y);
      _constants.ctx.lineTo(this.x + this.width, this.y);
      _constants.ctx.lineTo(this.x + this.width / 2, this.y + this.height);
      _constants.ctx.shadowColor = "#E3EAEF";
      _constants.ctx.shadowBlur = 10;
      _constants.ctx.fillStyle = this.color;
      _constants.ctx.fill();
      _constants.ctx.closePath();
      _constants.ctx.restore();
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