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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  overflow: hidden;\n  background-color: #111; }\n  body #gameArea {\n    position: absolute;\n    left: 50%;\n    top: 50%; }\n    body #gameArea #gameCanvas {\n      width: 100%;\n      height: 100%;\n      background-image: url(\"https://raw.githubusercontent.com/marcin-brumer/Avoid-The-Spikes/master/dist/img/background.jpg\");\n      background-size: 100% 100%; }\n    body #gameArea #start_menu {\n      background-color: #000;\n      position: absolute;\n      left: 30%;\n      top: 25%;\n      width: 40%;\n      height: 50%;\n      border-radius: 10%;\n      border: 1vh solid #fff;\n      opacity: 0.8;\n      text-align: center;\n      color: #fff; }\n      body #gameArea #start_menu h1 {\n        font-size: 7vh; }\n      body #gameArea #start_menu p {\n        font-size: 4vh; }\n      body #gameArea #start_menu #start_btn {\n        position: absolute;\n        left: 50%;\n        top: 70%;\n        transform: translate(-50%, -50%);\n        padding: 1vh 4vh;\n        font-size: 2.5vh;\n        border-radius: 1vh;\n        text-decoration: none;\n        outline: none;\n        color: #fff;\n        background-color: #3498db;\n        border: none;\n        border-bottom: 0.6vh solid #2980b9;\n        cursor: pointer; }\n        body #gameArea #start_menu #start_btn:active {\n          transform: translate(-50%, -52%);\n          border-bottom: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


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

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fragment = function () {
  function Fragment(x, y, radius, canvas, ctx, groundHeight) {
    _classCallCheck(this, Fragment);

    this.canvas = canvas;
    this.ctx = ctx;
    this.groundHeight = groundHeight;
    this.x = x;
    this.y = y;
    this.radius = (0, _utils.scale)(radius, this.canvas);
    this.velocity = {
      x: (0, _utils.scale)((Math.random() - 0.5) * 4, this.canvas),
      y: (0, _utils.scale)(4, this.canvas)
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
      if (this.y + this.velocity.y + this.radius >= this.canvas.height - (0, _utils.scale)(this.groundHeight, this.canvas)) {
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

var _star = __webpack_require__(/*! ./star */ "./src/star.js");

var _star2 = _interopRequireDefault(_star);

__webpack_require__(/*! ./index.scss */ "./src/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameArea = document.getElementById("gameArea");
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var groundHeight = 100;
var sprite = new Image();
sprite.src = "./img/sprite.png";

var spikes = [];
var fragments = [];
var stars = [];
var timer = 0;
var score = 0;
var spikeRandomSpawnRate = _utils2.default.randomIntFromRange(20, 40);
var starRandomSpawnRate = _utils2.default.randomIntFromRange(120, 180);

// Event Listeners
window.addEventListener("load", resizeGame, false);
window.addEventListener("resize", resizeGame, false);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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
  ctx.font = _utils2.default.scale(35, canvas) + "px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText("Score: " + score, 8, canvas.height - 0.35 * _utils2.default.scale(groundHeight, canvas));
}

// Player create
var player = new _player2.default(sprite, canvas, ctx, groundHeight);

// Animation Loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ground
  ctx.fillStyle = "#0D0909";
  ctx.fillRect(0, canvas.height - _utils2.default.scale(groundHeight, canvas), canvas.width, _utils2.default.scale(groundHeight, canvas));

  // Spikes animation
  spikes.forEach(function (spike, index) {
    spike.update();
    // Collision Spike-Ground
    if (spike.y + spike.height >= canvas.height - _utils2.default.scale(groundHeight, canvas)) {
      // Destroy Spike
      spikes.splice(index, 1);
      // Create fragments
      for (var i = 0; i < 8; i++) {
        var radius = (Math.random() + 0.5) * 3;
        fragments.push(new _fragment2.default(spike.x, spike.y + spike.height - _utils2.default.scale(radius, canvas), radius, canvas, ctx, groundHeight));
      }
    }
    // Collision Spike-Player
    if (spike.x < player.x + player.scaledFrameWidth && spike.x + spike.width > player.x && spike.y < player.y + player.scaledFrameHeight && spike.height + spike.y > player.y) {
      // Destroy Spike
      spikes.splice(index, 1);
      // Create fragments
      for (var _i = 0; _i < 8; _i++) {
        var _radius = (Math.random() + 0.5) * 3;
        fragments.push(new _fragment2.default(spike.x, spike.y + spike.height - _utils2.default.scale(_radius, canvas), _radius, canvas, ctx, groundHeight));
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
  stars.forEach(function (star, index) {
    star.update();
    // Collision Star-Ground
    if (star.timeToLive <= 1) {
      // Destroy Star
      stars.splice(index, 1);
    }
    // Collision Star-Player
    if (star.x - star.radius < player.x + player.scaledFrameWidth && star.x + star.radius > player.x && star.y - star.radius < player.y + player.scaledFrameHeight && star.y + star.radius > player.y) {
      // Destroy Star
      stars.splice(index, 1);
      // Update score
      score++;
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

  timer++;
  // Spawn Spikes
  if (timer % spikeRandomSpawnRate === 0) {
    spikes.push(new _spike2.default(canvas, ctx));
    spikeRandomSpawnRate = _utils2.default.randomIntFromRange(20, 40);
  }
  // Spawn Stars
  if (timer % starRandomSpawnRate === 0) {
    stars.push(new _star2.default(canvas, ctx, groundHeight));
    starRandomSpawnRate = _utils2.default.randomIntFromRange(140, 280);
  }

  // Display Score
  drawScore();

  requestAnimationFrame(animate);
}

animate();

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(sprite, canvas, ctx, groundHeight) {
    _classCallCheck(this, Player);

    this.sprite = sprite;
    this.canvas = canvas;
    this.ctx = ctx;
    this.groundHeight = groundHeight;
    this.frameWidth = 90;
    this.frameHeight = 113.5;
    this.scaledFrameWidth = (0, _utils.scale)(this.frameWidth, this.canvas);
    this.scaledFrameHeight = (0, _utils.scale)(this.frameHeight, this.canvas);
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - (0, _utils.scale)(this.groundHeight, this.canvas) - (0, _utils.scale)(this.frameHeight, this.canvas);
    this.velocity = (0, _utils.scale)(10, this.canvas);
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
      this.ctx.drawImage(this.sprite, this.frameXpos.dead, frameYpos, 150, 125.5, this.x, this.y, (0, _utils.scale)(150, this.canvas), (0, _utils.scale)(125.5, this.canvas));
      this.frameNr++;
    }
  }, {
    key: "draw",
    value: function draw(frameXpos, frameCount) {
      if (this.frameNr > frameCount) {
        this.frameNr = 1;
      }
      var frameYpos = (this.frameNr - 1) * this.frameHeight;
      this.ctx.drawImage(this.sprite, frameXpos, frameYpos, this.frameWidth, this.frameHeight, this.x, this.y, this.scaledFrameWidth, this.scaledFrameHeight);
      this.frameNr++;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.state.runningRight) {
        this.draw(this.frameXpos.runningRight, this.runFrameCount);
        if (this.x + this.scaledFrameWidth < this.canvas.width) {
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

      // Keeps variables updated
      this.scaledFrameWidth = (0, _utils.scale)(this.frameWidth, this.canvas);
      this.scaledFrameHeight = (0, _utils.scale)(this.frameHeight, this.canvas);
      this.y = this.canvas.height - (0, _utils.scale)(this.groundHeight, this.canvas) - (0, _utils.scale)(this.frameHeight, this.canvas);
      this.velocity = (0, _utils.scale)(10, this.canvas);
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

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spike = function () {
  function Spike(canvas, ctx) {
    _classCallCheck(this, Spike);

    this.canvas = canvas;
    this.ctx = ctx;
    this.x = this.canvas.width * Math.random();
    this.y = 0;
    this.color = "#fff";
    this.width = (0, _utils.scale)(10, this.canvas);
    this.height = (0, _utils.scale)(50, this.canvas);
    this.velocity = (0, _utils.scale)(15, this.canvas);
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

      // Keeps variables updated
      this.width = (0, _utils.scale)(10, this.canvas);
      this.height = (0, _utils.scale)(50, this.canvas);
      this.velocity = (0, _utils.scale)(15, this.canvas);
    }
  }]);

  return Spike;
}();

exports.default = Spike;

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Star = function () {
  function Star(canvas, ctx, groundHeight) {
    _classCallCheck(this, Star);

    this.canvas = canvas;
    this.ctx = ctx;
    this.groundHeight = groundHeight;
    this.x = canvas.width * Math.random();
    this.y = 0;
    this.radius = (0, _utils.scale)(15, this.canvas);
    this.velocity = (0, _utils.scale)(5, this.canvas);
    this.opacity = 1;
    this.timeToLive = 50;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.translate(this.x, this.y);
      this.ctx.moveTo(0, 0 - this.radius);
      for (var i = 0; i < 5; i++) {
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - this.radius * 0.5);
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - this.radius);
      }
      this.ctx.shadowColor = "rgba(255, 234, 70, " + this.opacity + ")";
      this.ctx.shadowBlur = 10;
      this.ctx.fillStyle = "rgba(255, 234, 70, " + this.opacity + ")";
      this.ctx.fill();
      this.ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.y + this.radius < this.canvas.height - (0, _utils.scale)(this.groundHeight, this.canvas)) {
        this.y += this.velocity;
      } else {
        this.timeToLive--;
        this.opacity -= 1 / this.timeToLive;
      }

      this.draw();

      // Keeps variables updated
      this.radius = (0, _utils.scale)(15, this.canvas);
      this.velocity = (0, _utils.scale)(5, this.canvas);
    }
  }]);

  return Star;
}();

exports.default = Star;

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

function scale(elem, canvas) {
  return elem * canvas.height / 1080;
}

module.exports = { randomIntFromRange: randomIntFromRange, randomColor: randomColor, distance: distance, scale: scale };

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map