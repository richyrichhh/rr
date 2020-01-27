const MovingObject = require('./moving_object.js');
const Util = require('./util.js');
const Bullet = require('./bullet.js');

function Ship(obj) {
  obj[`color`] = '#7FFF00';
  obj[`radius`] = 20;
  obj[`vel`] = [0,0];
  MovingObject.call(this, obj);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(game){
  this.pos = game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function(impulse) {
  // debugger;
  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
};

Ship.prototype.fireBullet = function(game) {
  let bullet = new Bullet( { 
    pos: [this.pos[0], this.pos[1]],
    // vel: [this.vel[0] * 10, this.vel[1] * 10]
    vel: Util.randomVec(50)
  });

  if( !(bullet.vel[0] === 0 && bullet.vel[1] === 0) ) {
    game.bullets.push(bullet);
  }

};


module.exports = Ship;