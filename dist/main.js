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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/character.js":
/*!*******************************!*\
  !*** ./src/game/character.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\n\n\nclass Character {\n  constructor(game, pos = [0, 0]) {\n    this.position = pos,\n    this.movement = [0, 0],\n    this.maxHealth = 100,\n    this.currentHealth = 100,\n    this.game = game,\n    this.upgrades = [];\n    this.state = 'stand';\n    this.lastDirLR = 'left';\n    this.lastDirUD = 'up';\n    this.frame = 0;\n    this.frameLength = 80;\n    this.frameTime = this.frameLength;\n    // this.resetAnimation = this.resetAnimation.bind(this);\n  }\n\n  resetAnimation() {\n    this.state = 'stand';\n    this.frame = 0;\n  }\n\n  handleReset() {\n    if (this.movement[0] === 0 && this.movement[1] === 0) {\n      this.resetAnimation();\n    }\n  }\n  handleMovement() {\n    this.handleReset();\n    if (this.movement[0] > 0) {\n      if (this.movement[0] >= 4) {\n        this.position[0] += 4;\n        this.movement[0] -= 4;\n      } else {\n        this.position[0] -= this.movement[0];\n        this.movement[0] = 0;\n      }\n    }\n    if (this.movement[0] < 0) {\n      if (this.movement[0] <= -4) {\n        this.position[0] -= 4;\n        this.movement[0] += 4;\n      } else {\n        this.position[0] += this.movement[0];\n        this.movement[0] = 0;\n      }\n    }\n    if (this.movement[1] > 0) {\n      if (this.movement[1] >= 4) {\n        this.position[1] += 4;\n        this.movement[1] -= 4;\n      } else {\n        this.position[1] -= this.movement[1];\n        this.movement[1] = 0;\n      }\n    }\n    if (this.movement[1] < 0) {\n      if (this.movement[1] <= -4) {\n        this.position[1] -= 4;\n        this.movement[1] += 4;\n      } else {\n        this.position[1] += this.movement[1];\n        this.movement[1] = 0;\n      }\n    }\n\n  }\n\n  draw(ctx) {\n    this.handleMovement();\n    var img = new Image();\n    var pos = this.position;\n    var lastDirLR = this.lastDirLR;\n    img.onload = function() {\n      Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawImage\"])(ctx, img, pos[0], pos[1], 84, 75, 0, (lastDirLR === 'left' ? true : false), false);\n    }\n    img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];\n  }\n\n  move(dir) {\n    this.state = 'move';\n    this.frameLength = 8;\n    if (dir === 'up') {\n      if (this.position[1] - 20 < 0) {\n        this.movement[1] = this.position[1];\n      } else this.movement[1] -= 20;\n      this.lastDirUD = 'up';\n    }\n    else if (dir === 'down') {\n      if (this.position[1] + 20 > this.game.dimensions['height']) {\n        this.movement[1] = this.game.dimensions['height'] - this.position[1];\n      } else this.movement[1] += 20;\n      this.lastDirUD = 'down';\n    }\n    else if (dir === 'left') {\n      if (this.position[0] - 20 < 0) {\n        this.movement[0] = this.position[0];\n      } else this.movement[0] -= 20;\n      this.lastDirLR = 'left';\n    }\n    else if (dir === 'right') {\n      if (this.position[0] + 20 > this.game.dimensions['width']) {\n        this.movement[0] = this.game.dimensions['width'] - this.position[0];\n      } else this.movement[0] += 20;\n      this.lastDirLR = 'right';\n    }\n\n    // this.resetAnimation = this.resetAnimation.bind(this);\n    // debounce(() => this.resetAnimation(), 1000);\n  }\n\n  attack() {\n    if (this.lastDirUD === 'up') {\n\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/game/character.js?");

/***/ }),

/***/ "./src/game/enemy.js":
/*!***************************!*\
  !*** ./src/game/enemy.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/game/character.js\");\n\n\nclass Enemy extends _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(game, pos) {\n    super(game, pos);\n    this.animations = {\n      stand: {\n        frames: 0,\n        frameData: []\n      },\n      move: {\n        frames: 0,\n        frameData: []\n      },\n      attack: {\n        frames: 0,\n        frameData: []\n      }\n    }\n    this.imageUrl = this.animations.stand.frameData[0]\n  }\n}\n\n//# sourceURL=webpack:///./src/game/enemy.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/game/player.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/game/enemy.js\");\n\n\n\nclass Game {\n  constructor(canvas) {\n    this.chars = [],\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this),\n    this.enemies = [],\n    this.canvas = canvas;\n    this.dimensions = { width: canvas.width, height: canvas.height },\n    this.ctx = canvas.getContext(\"2d\"),\n    this.chars.push(this.player);\n    this.player.draw(this.ctx);\n\n  }\n\n  randomPosAtEdges() {\n    let random_x = Math.floor(Math.random() * this.dimensions[`width`]);\n    let random_y = Math.floor(Math.random() * this.dimensions[`height`]);\n    return [[0, random_y], [random_x, 0]][Math.floor(Math.random() * 1.9999)];\n  }\n\n  createEnemy() {\n    let enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n\n  }\n\n  draw() {\n    for (let x of this.chars) {\n      x.draw(this.ctx);\n    }\n  }\n\n  step() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.animate();\n    this.draw();\n  }\n\n  animateStand() {\n    for (var char of this.chars) {\n      if (char.state === 'stand') {\n        if (char.frame + 1 >= char.animations[char.state].frames) char.frame = 0;\n        else char.frame += 1;\n      }\n    }\n  }\n  animate() {\n    for (var char of this.chars) {\n      if (char.frameTime > 0) char.frameTime -= 1;\n      else {\n        char.frameTime = char.frameLength;\n        if (char.frame + 1 >= char.animations[char.state].frames) char.frame = 0;\n        else char.frame += 1;\n      }\n    }\n  }\n\n  animateWalk() {\n    for (var char of this.chars) {\n      if (char.state === 'move') {\n        if (char.frame + 1 >= char.animations[char.state].frames) char.frame = 0;\n        else char.frame += 1;\n      }\n    }\n  }\n\n  start() {\n    setInterval(() => {\n      this.step();\n    }, 30);\n    // setInterval(() => {\n    //   this.animateStand();\n    // }, 2500);\n    // setInterval(() => {\n    //   this.animateWalk();\n    // }, 240);\n  }\n}\n\n//# sourceURL=webpack:///./src/game/game.js?");

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/game/character.js\");\n\n\nclass Player extends _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(game) {\n    super(game, [600, 300]);\n    this.animations = {\n      stand: {\n        frames: 2,\n        frameData: {\n          up: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/stand-up-0_oe6xna.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/stand-up-1_lnwpyx.png'],\n          down: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/stand-down-0_u9rszx.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/stand-down-1_k2qpmc.png']\n        }\n      },\n      move: {\n        frames: 6,\n        frameData: {\n          up: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-0_jecrhm.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-1_gbjnsa.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-2_bya0jv.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-3_zyivo7.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-4_mairwr.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-5_o3iyup.png'],\n          down: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/walk-down-0_mk1idv.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-1_wthncz.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/walk-down-2_kbdx2z.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-3_pyorix.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-4_keystc.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-5_bsw8y0.png']\n        }\n      },\n      attack: {\n        frames: 0,\n        frameData: {\n          up: [],\n          down: []\n        }\n      }\n    }\n    this.imageUrl = this.animations.stand.frameData.down[0]\n  }\n}\n\n//# sourceURL=webpack:///./src/game/player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.js\");\n/* harmony import */ var _game_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/character */ \"./src/game/character.js\");\n/* harmony import */ var _game_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/player */ \"./src/game/player.js\");\n/* harmony import */ var _game_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/enemy */ \"./src/game/enemy.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\n// const View = require('./view/view');\nconst canvas = document.getElementById('game-canvas');\n\n\n\n\nwindow.Player = _game_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.Enemy = _game_enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nwindow.Character = _game_character__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nlet game = new _game_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.start();\n// let view = new GameView(game, canvas.getContext(\"2d\"));\ndocument.addEventListener('keydown', e => {\n  console.log(e.code);\n  if(e.code === 'ArrowLeft') {\n    Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"])(game.player.move('left'), 200);\n  };\n\n  if(e.code === 'ArrowDown') {\n    Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"])(game.player.move('down'), 200);\n  };\n\n  if(e.code === 'ArrowRight') {\n    Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"])(game.player.move('right'), 200);\n  };\n\n  if(e.code === 'ArrowUp') {\n    Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"throttle\"])(game.player.move('up'), 200);\n  };\n});\n// key('left', () => {\n//   throttle(game.player.move('left'), 100);\n// });\n\n// key('down', () => {\n//   throttle(game.player.move('down'), 100);\n// });\n\n// key('right', () => {\n//   throttle(game.player.move('right'), 100);\n// });\n\n// key('up', () => {\n//   throttle(game.player.move('up'), 100);\n// });\n\nkey('a', () => {\n  game.player.attack();\n});\n\n// view.start();\n// view.drawBackground(canvas);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: drawImage, debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawImage\", function() { return drawImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\nconst drawImage = (context, img, x, y, width, height, deg, flip, flop, center) => {\n\n  context.save();\n\n  if (typeof width === \"undefined\") width = img.width;\n  if (typeof height === \"undefined\") height = img.height;\n  if (typeof center === \"undefined\") center = false;\n\n  // Set rotation point to center of image, instead of top/left\n  if (center) {\n    x -= width / 2;\n    y -= height / 2;\n  }\n\n  let flipScale;\n  let flopScale;\n  // Set the origin to the center of the image\n  context.translate(x + width / 2, y + height / 2);\n  // Rotate the canvas around the origin\n  var rad = 2 * Math.PI - deg * Math.PI / 180;\n  context.rotate(rad);\n  // Flip/flop the canvas\n  if (flip) flipScale = -1; else flipScale = 1;\n  if (flop) flopScale = -1; else flopScale = 1;\n  context.scale(flipScale, flopScale);\n  // Draw the image    \n  context.drawImage(img, -width / 2, -height / 2, width, height);\n  context.restore();\n}\n\nconst debounce = (func, delay) => {\n  let debounceTimer\n  return function () {\n    const context = this\n    const args = arguments\n    clearTimeout(debounceTimer)\n    debounceTimer\n      = setTimeout(() => func.apply(context, args), delay)\n  }\n}  \n\nconst throttle = (func, limit) => {\n  let inThrottle\n  return function () {\n    const args = arguments\n    const context = this\n    if (!inThrottle) {\n      func.apply(context, args)\n      inThrottle = true\n      setTimeout(() => inThrottle = false, limit)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });