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
    this.player.draw(this.ctx);

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
      x.draw(this.ctx);
    }
  }

  step() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw();
  }

  animateStand() {
    for (var char of this.chars) {
      if (char.state === 'stand') {
        if (char.frame + 1 >= char.animations[char.state].frames) char.frame = 0;
        else char.frame += 1;
      }
    }
  }

  animateWalk() {
    for (var char of this.chars) {
      if (char.state === 'move') {
        if (char.frame + 1 >= char.animations[char.state].frames) char.frame = 0;
        else char.frame += 1;
      }
    }
  }

  start() {
    setInterval(() => {
      this.step();
    }, 30);
    setInterval(() => {
      this.animateStand();
    }, 2500);
    setInterval(() => {
      this.animateWalk();
    }, 240);
  }
}