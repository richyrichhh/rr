import Game from './game/game';
import Character from './game/character';
import Player from './game/player';
import Enemy from './game/enemy';
// const View = require('./view/view');
const canvas = document.getElementById('game-canvas');




window.Player = Player;
window.Enemy = Enemy;
window.Character = Character;

let game = new Game(canvas);
game.start();
// let view = new GameView(game, canvas.getContext("2d"));

key('left', () => {
  game.player.move('left');
});

key('down', () => {
  game.player.move('down');
});

key('right', () => {
  game.player.move('right');
});

key('up', () => {
  game.player.move('up');
});

key('a', () => {
  game.player.attack();
});

// view.start();
// view.drawBackground(canvas);

