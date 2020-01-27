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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\n\nfunction Asteroid(obj){\n  obj[`color`] = '#A52A2A';\n  obj[`radius`] = Math.floor(Math.random()*85) + 15;\n  obj[`vel`] = Util.randomVec(5);\n  MovingObject.call(this, obj);\n  \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject, game) {\n  if(otherObject instanceof Ship) {\n    otherObject.relocate(game);\n  } else if (otherObject instanceof Bullet) {\n    game.remove(otherObject);\n    game.remove(this);\n  }\n};\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Bullet(obj){\n  obj[`color`] = '#7FFF00';\n  obj[`radius`] = 10;\n  MovingObject.call(this, obj);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.something = function() {};\n\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nconst DIM_X = 0; // modify later\nconst DIM_Y = 0; // modify later\nconst NUM_ASTEROIDS = 20; // modify later\nvar AST_LEVEL = 0;\n\nfunction Game(canvas) {\n  this.ctx = canvas.getContext(\"2d\");\n  this.canvas = canvas;\n  this.dimensions = { width: canvas.width, height: canvas.height };\n  this.asteroids = [];\n  this.bullets = [];\n  // this.registerEvents();\n  // this.restart();\n  for(let i=0; i < NUM_ASTEROIDS; i++){\n    this.addAsteroids();\n  }\n  this.ship = new Ship({ pos: this.randomPosition() });\n\n}\n\nGame.prototype.addAsteroids = function() {\n  let a = new Asteroid( {pos: this.randomPosition() } );\n  this.asteroids.push(a);\n};\n\nGame.prototype.randomPosition = function() {\n  let random_x = Math.floor(Math.random() * this.dimensions[`width`]);\n  let random_y = Math.floor(Math.random() * this.dimensions[`height`]);\n  return [ random_x, random_y];\n};\n\nGame.prototype.draw = function(ctx){\n  // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  var allObj = this.allObjects();\n  for(let x of allObj){\n    x.draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function() {\n  var allObj = this.allObjects();\n  allObj.forEach( ast => {\n    ast.move();\n  });\n  this.draw(this.ctx);\n  \n};\n\nGame.prototype.step = function(gameView) {\n  gameView.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  gameView.drawBackground(this.canvas);\n  this.moveObjects();\n  this.checkCollisions();\n  this.checkOOB();\n};\n\nGame.prototype.checkOOB = function() {\n  for (var x of this.bullets) {\n    if(x.pos[0] >= 2000 || x.pos[0] <= 0 || x.pos[1] >= 1200 || x.pos[1] <= 0) {\n      this.remove(x);\n    }\n  }\n};\n\nGame.prototype.checkCollisions = function () {\n  var allObj = this.allObjects();\n  for(let i=0; i < this.asteroids.length; i++){\n    for (let j = i + 1; j < allObj.length; j++){\n      if(this.asteroids[i].isCollidedWith(allObj[j])){\n        this.asteroids[i].collideWith(allObj[j], this);\n      }\n    }\n  }\n};\n\nGame.prototype.remove = function(stuff) {\n  if (stuff instanceof Asteroid) this.asteroids.splice(this.asteroids.indexOf(stuff), 1);\n  else this.bullets.splice(this.bullets.indexOf(stuff), 1);\n\n  if (this.asteroids.length === 0) {\n    for (i = 0; i < NUM_ASTEROIDS + (AST_LEVEL * 10); i++) {\n      this.addAsteroids();\n\n    }\n    AST_LEVEL += 1;\n\n    alert('next stage!');\n  }\n};\n\n\nGame.prototype.allObjects = function() {\n  var objects = [...this.asteroids];\n  objects.push(this.ship);\n  objects = objects.concat(this.bullets);\n  return objects;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.animate = function(ctx) {\n  this.drawBackground(ctx);\n\n};\n\nGameView.prototype.drawBackground = function(canvas) {\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"#000000\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n};\n\nGameView.prototype.start = function () {\n  setInterval(() => { \n    this.game.step(this);\n  }, 20);\n\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst canvas = document.getElementById('game-canvas');\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nwindow.Bullet = Bullet;\nwindow.Asteroid = Asteroid;\n\nlet game = new Game(canvas);\nlet view = new GameView(game, canvas.getContext(\"2d\"));\n\nkey('a', ()=>{ \n  game.ship.power([-25,0]);\n});\n\nkey('s', ()=>{ \n  game.ship.power([0,25]);\n});\n\nkey('d', ()=>{ \n  game.ship.power([25,0]);\n});\n\nkey('w', ()=>{ \n  game.ship.power([0,-25]);\n});\n\nkey('space', ()=>{ \n  game.ship.fireBullet(game);\n  // For generate more bullets\n  game.ship.fireBullet(game);\n  game.ship.fireBullet(game);\n  game.ship.fireBullet(game);\n});\n\nview.start();\nview.drawBackground(canvas);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction MovingObject(options) {\n  this.pos = options[`pos`];\n  this.vel = options[`vel`];\n  this.radius = options[`radius`];\n  this.color = options[`color`];\n}\n\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n    );\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  \n  if (this.vel[0] > 20) {\n    this.vel[0] === 20;\n  }\n  if (this.vel[1] > 20) {\n    this.vel[1] === 20;\n  }\n  \n  if(!(this instanceof Bullet)){\n    if(this.pos[0] >= 2000) this.pos[0] -= 2000;\n    if(this.pos[0] <= 0) this.pos[0] += 2000;\n    if(this.pos[1] >= 1200) this.pos[1] -= 1200;\n    if(this.pos[1] <= 0) this.pos[1] += 1200;\n  }\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n  let dis = this.distance( this.pos , otherObject.pos );\n  if(dis <= this.radius + otherObject.radius){\n    return true;\n  }else {\n    return false;\n  }\n};\n\n\nMovingObject.prototype.distance = function (pos1, pos2){\n  return Math.sqrt( Math.pow( (pos1[0] - pos2[0]) , 2 ) + Math.pow( (pos1[1] - pos2[1]), 2) );\n};\n\nMovingObject.prototype.collideWith =  function(otherObject, game){\n  // game.remove(this);\n  // game.remove(otherObject);\n  // alert('waa');\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nfunction Ship(obj) {\n  obj[`color`] = '#7FFF00';\n  obj[`radius`] = 20;\n  obj[`vel`] = [0,0];\n  MovingObject.call(this, obj);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function(game){\n  this.pos = game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function(impulse) {\n  // debugger;\n  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];\n};\n\nShip.prototype.fireBullet = function(game) {\n  let bullet = new Bullet( { \n    pos: [this.pos[0], this.pos[1]],\n    // vel: [this.vel[0] * 10, this.vel[1] * 10]\n    vel: Util.randomVec(50)\n  });\n\n  if( !(bullet.vel[0] === 0 && bullet.vel[1] === 0) ) {\n    game.bullets.push(bullet);\n  }\n\n};\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Util = {\n  randomVec: function(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale: function(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  inherits: function(childClass, parentClass) {\n    function Surrogate (){}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });