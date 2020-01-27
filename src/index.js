const Game = require('./game.js');
const GameView = require('./game_view.js');
const canvas = document.getElementById('game-canvas');
const Bullet = require('./bullet.js');
const Asteroid = require('./asteroid.js');

window.Bullet = Bullet;
window.Asteroid = Asteroid;

let game = new Game(canvas);
let view = new GameView(game, canvas.getContext("2d"));

key('a', ()=>{ 
  game.ship.power([-25,0]);
});

key('s', ()=>{ 
  game.ship.power([0,25]);
});

key('d', ()=>{ 
  game.ship.power([25,0]);
});

key('w', ()=>{ 
  game.ship.power([0,-25]);
});

key('space', ()=>{ 
  game.ship.fireBullet(game);
  // For generate more bullets
  game.ship.fireBullet(game);
  game.ship.fireBullet(game);
  game.ship.fireBullet(game);
});

view.start();
view.drawBackground(canvas);

