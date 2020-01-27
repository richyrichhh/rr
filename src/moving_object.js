const Game = require('./game.js');

function MovingObject(options) {
  this.pos = options[`pos`];
  this.vel = options[`vel`];
  this.radius = options[`radius`];
  this.color = options[`color`];
}


MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
    );
    ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  
  if (this.vel[0] > 20) {
    this.vel[0] === 20;
  }
  if (this.vel[1] > 20) {
    this.vel[1] === 20;
  }
  
  if(!(this instanceof Bullet)){
    if(this.pos[0] >= 2000) this.pos[0] -= 2000;
    if(this.pos[0] <= 0) this.pos[0] += 2000;
    if(this.pos[1] >= 1200) this.pos[1] -= 1200;
    if(this.pos[1] <= 0) this.pos[1] += 1200;
  }
};

MovingObject.prototype.isCollidedWith = function(otherObject){
  let dis = this.distance( this.pos , otherObject.pos );
  if(dis <= this.radius + otherObject.radius){
    return true;
  }else {
    return false;
  }
};


MovingObject.prototype.distance = function (pos1, pos2){
  return Math.sqrt( Math.pow( (pos1[0] - pos2[0]) , 2 ) + Math.pow( (pos1[1] - pos2[1]), 2) );
};

MovingObject.prototype.collideWith =  function(otherObject, game){
  // game.remove(this);
  // game.remove(otherObject);
  // alert('waa');
};

module.exports = MovingObject;