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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// Event Listeners
addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

// Objects

var Spike = function () {
  function Spike() {
    _classCallCheck(this, Spike);

    this.x = canvas.width * Math.random();
    this.y = 0;
    this.width = 20;
    this.height = 50;
    this.color = "#fff";
    this.velocity = 20;
  }

  _createClass(Spike, [{
    key: "draw",
    value: function draw() {
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
  }, {
    key: "update",
    value: function update() {
      this.y += this.velocity;
      this.draw();
    }
  }]);

  return Spike;
}();

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
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = "rgba(255,255,255," + this.opacity + ")";
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.y + this.velocity.y + this.radius >= canvas.height - groundHeight) {
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

// Implementation


var backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#171e26");
backgroundGradient.addColorStop(1, "#3f586b");

var spikes = [],
    fragments = [],
    groundHeight = 100,
    timer = 0,
    randomSpawnRate = Math.floor(Math.random() * 25 + 60);

// Animation Loop
function animate() {
  // Background
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Ground
  c.fillStyle = "#0D0909";
  c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  // Spikes animation
  spikes.forEach(function (spike, index) {
    spike.update();
    if (spike.y >= canvas.height - groundHeight) {
      spikes.splice(index, 1);
      for (var i = 0; i < 8; i++) {
        var radius = (Math.random() + 0.5) * 3;
        fragments.push(new Fragment(spike.x, spike.y - radius, radius));
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

  timer++;
  if (timer % randomSpawnRate === 0) {
    spikes.push(new Spike());
    randomSpawnRate = Math.floor(Math.random() * 25 + 60);
  }

  console.log(spikes);
  requestAnimationFrame(animate);
}

animate();

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
//# sourceMappingURL=canvas.bundle.js.map