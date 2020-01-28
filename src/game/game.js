import Player from './player';
import Enemy from './enemy';

export default class Game {
  constructor(canvas) {
    this.chars = [],
    this.player = new Player(this),
    this.enemies = [],
    this.canvas = canvas;
    this.dimensions = { width: canvas.width, height: canvas.height },
    this.ctx = canvas.getContext("2d"),
    this.chars.push(this.player);
  }

  randomPosAtEdges() {
    let random_x = Math.floor(Math.random() * this.dimensions[`width`]);
    let random_y = Math.floor(Math.random() * this.dimensions[`height`]);
    return [[0, random_y], [random_x, 0]][Math.floor(Math.random() * 1.9999)];
  }

  createEnemy() {
    let enemy = new Enemy(this);

  }

  draw() {
    for (let x of this.chars) {
      x.draw(ctx);
    }
  };
}