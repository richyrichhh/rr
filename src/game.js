const GameView = require('./game_view.js');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');

const DIM_X = 0; // modify later
const DIM_Y = 0; // modify later
const NUM_ASTEROIDS = 20; // modify later
var AST_LEVEL = 0;

function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.canvas = canvas;
  this.dimensions = { width: canvas.width, height: canvas.height };
  this.asteroids = [];
  this.bullets = [];
  // this.registerEvents();
  // this.restart();
  for(let i=0; i < NUM_ASTEROIDS; i++){
    this.addAsteroids();
  }
  this.ship = new Ship({ pos: this.randomPosition() });

}

Game.prototype.addAsteroids = function() {
  let a = new Asteroid( {pos: this.randomPosition() } );
  this.asteroids.push(a);
};

Game.prototype.randomPosition = function() {
  let random_x = Math.floor(Math.random() * this.dimensions[`width`]);
  let random_y = Math.floor(Math.random() * this.dimensions[`height`]);
  return [random_x, random_y];
};

Game.prototype.draw = function(ctx){
  // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  var allObj = this.allObjects();
  for(let x of allObj){
    x.draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  var allObj = this.allObjects();
  allObj.forEach( ast => {
    ast.move();
  });
  this.draw(this.ctx);
  
};

Game.prototype.step = function(gameView) {
  gameView.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  gameView.drawBackground(this.canvas);
  this.moveObjects();
  this.checkCollisions();
  this.checkOOB();
};

Game.prototype.checkOOB = function() {
  for (var x of this.bullets) {
    if(x.pos[0] >= 2000 || x.pos[0] <= 0 || x.pos[1] >= 1200 || x.pos[1] <= 0) {
      this.remove(x);
    }
  }
};

Game.prototype.checkCollisions = function () {
  var allObj = this.allObjects();
  for(let i=0; i < this.asteroids.length; i++){
    for (let j = i + 1; j < allObj.length; j++){
      if(this.asteroids[i].isCollidedWith(allObj[j])){
        this.asteroids[i].collideWith(allObj[j], this);
      }
    }
  }
};

Game.prototype.remove = function(stuff) {
  if (stuff instanceof Asteroid) this.asteroids.splice(this.asteroids.indexOf(stuff), 1);
  else this.bullets.splice(this.bullets.indexOf(stuff), 1);

  if (this.asteroids.length === 0) {
    for (i = 0; i < NUM_ASTEROIDS + (AST_LEVEL * 10); i++) {
      this.addAsteroids();

    }
    AST_LEVEL += 1;

    alert('next stage!');
  }
};


Game.prototype.allObjects = function() {
  var objects = [...this.asteroids];
  objects.push(this.ship);
  objects = objects.concat(this.bullets);
  return objects;
};

module.exports = Game;