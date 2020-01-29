import Game from './game/game';
import Character from './game/character';
import Player from './game/player';
import Enemy from './game/enemy';
import { throttle } from './util';
// const View = require('./view/view');
const canvas = document.getElementById('game-canvas');




window.Player = Player;
window.Enemy = Enemy;
window.Character = Character;

let game = new Game(canvas);
game.start();
// let view = new GameView(game, canvas.getContext("2d"));
document.addEventListener('keydown', e => {
  console.log(e.code);
  if(e.code === 'ArrowLeft') {
    throttle(game.player.move('left'), 200);
  };

  if(e.code === 'ArrowDown') {
    throttle(game.player.move('down'), 200);
  };

  if(e.code === 'ArrowRight') {
    throttle(game.player.move('right'), 200);
  };

  if(e.code === 'ArrowUp') {
    throttle(game.player.move('up'), 200);
  };
});
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

key('a', () => {
  game.player.attack();
});

// view.start();
// view.drawBackground(canvas);

