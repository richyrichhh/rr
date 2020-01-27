const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

function Bullet(obj){
  obj[`color`] = '#7FFF00';
  obj[`radius`] = 10;
  MovingObject.call(this, obj);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.something = function() {};


module.exports = Bullet;