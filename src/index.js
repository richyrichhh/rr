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
// let view = new GameView(game, canvas.getContext("2d"));

key('left', () => {
  // game.player.move([-25, 0]);
});

key('down', () => {
  // game.player.move([0, 25]);
});

key('right', () => {
  // game.player.move([25, 0]);
});

key('up', () => {
  // game.player.move([0, -25]);
});

key('a', () => {
  // game.player.attack();
});

// view.start();
// view.drawBackground(canvas);

