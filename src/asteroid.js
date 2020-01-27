const MovingObject = require('./moving_object.js');
const Util = require('./util.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');


function Asteroid(obj){
  obj[`color`] = '#A52A2A';
  obj[`radius`] = Math.floor(Math.random()*85) + 15;
  obj[`vel`] = Util.randomVec(5);
  MovingObject.call(this, obj);
  
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject, game) {
  if(otherObject instanceof Ship) {
    otherObject.relocate(game);
  } else if (otherObject instanceof Bullet) {
    game.remove(otherObject);
    game.remove(this);
  }
};


module.exports = Asteroid;