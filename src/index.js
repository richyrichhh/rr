import Game from './game/game';
import Character from './game/character';
import Player from './game/player';
import Enemy from './game/enemy';
import _ from 'underscore';
// const View = require('./view/view');
const canvas = document.getElementById('game-canvas');




window.Player = Player;
window.Enemy = Enemy;
window.Character = Character;



const moveLeft = () => game.player.move('left');
const moveDown = () => game.player.move('down');
const moveRight = () => game.player.move('right');
const moveUp = () => game.player.move('up');
const attack = _.throttle(() => game.player.attack(), 500, {trailing: false});
const dunk = _.throttle(() => game.player.dunk(), 1000, {trailing: false});
const pause = () => game.togglePause();
// let view = new GameView(game, canvas.getContext("2d"));
const gameStart = () => {
  game.start();
  clearInterval(game.menu.renderInt);
  game.menu = null;
  document.removeEventListener('keydown', gameStart);
  document.removeEventListener('click', gameStart);
  document.addEventListener('keydown', e => {
    if (game.player.dead) return null;
    if (e.code === 'ArrowLeft') {
      moveLeft();
    };

    if (e.code === 'ArrowDown') {
      moveDown();
    };

    if (e.code === 'ArrowRight') {
      moveRight();
    };

    if (e.code === 'ArrowUp') {
      moveUp();
    };
    if (e.code === 'KeyA') {
      attack();
    };
    if (e.code === 'KeyS') {
      dunk();
    };
    if (e.code === 'KeyP') {
      pause();
    };
  });

  step();
}



// key('left', () => {
//   throttle(game.player.move('left'), 100);
// });

// key('down', () => {
//   throttle(game.player.move('down'), 100);
// });

// key('right', () => {
//   throttle(game.player.move('right'), 100);
// });

// key('up', () => {
//   throttle(game.player.move('up'), 100);
// });

// key('a', () => {
//   attack();
// });

// view.start();
// view.drawBackground(canvas);
let game = new Game(canvas);

window.addEventListener('load', () => {
  game.menu.start();
}, false);

setTimeout(() => document.addEventListener('keydown', gameStart), 1000);
setTimeout(() => document.addEventListener('click', gameStart), 1000);

window.requestAnimFrame = (function (callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 66);
    };
})();

export const step = () => {
  if (game.over || game.pause) {
    game.ctx.globalAlpha = 0.6;
    game.ctx.fillStyle = 'black';
    game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
    game.ctx.globalAlpha = 1;

    game.ctx.fillStyle = 'white';
    game.ctx.font = 'bold 16px verdana, sans-serif';
    game.ctx.fillText(`||`, 10, 10);
    return;
  }
  // get positions
  game.animate();
  // clear canvas
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  // draw
  game.draw();
  // request new frame
  requestAnimFrame(function () {
    step();
  });
}