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



const moveLeft = _.throttle(() => game.player.move('left'), 164);
const moveDown = _.throttle(() => game.player.move('down'), 164);
const moveRight = _.throttle(() => game.player.move('right'), 164);
const moveUp = _.throttle(() => game.player.move('up'), 164);
const attack = _.throttle(() => game.player.attack(), 1000);
// let view = new GameView(game, canvas.getContext("2d"));
let gameStart = () => {
  game.start();
  clearInterval(game.menu.renderInt);
  game.menu = null;
  document.removeEventListener('keydown', gameStart);
  document.addEventListener('keydown', e => {
    if (game.player.state === 'death') return null;
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
  });
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

setTimeout(() => document.addEventListener('keydown', gameStart), 2000);
