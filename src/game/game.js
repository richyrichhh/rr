import Player from './player';
import Enemy from './enemy';
import { between } from '../util';

export default class Game {
  constructor(canvas) {
    this.chars = [],
    this.player = new Player(this),
    this.canvas = canvas;
    this.dimensions = { width: canvas.width - 100, height: canvas.height - 100 },
    this.ctx = canvas.getContext("2d"),
    this.chars.push(this.player);
    this.player.draw(this.ctx);
    this.interval;
  }

  spawnEnemies(n) {
    let c = n;
    while (c > 0) {
      c -= 1
      this.createEnemy();
    }
  }

  randomPosAtEdges() {
    let random_x = Math.floor(Math.random() * this.dimensions[`width`]);
    let random_y = Math.floor(Math.random() * this.dimensions[`height`]);
    return [[0, random_y], [random_x, 0], [this.dimensions[`width`], random_y], [random_x, this.dimensions[`height`]]][Math.floor(Math.random() * 3.9999)];
  }

  createEnemy() {
    let enemy = new Enemy(this);
    this.chars.push(enemy);
  }

  handleAttack(unit, x, y) {
    for (var char of this.chars) {
      console.dir(char);
      console.log(typeof unit);
      if (char.__proto__.constructor.name !== unit.__proto__.constructor.name) {
        if (between(char.position[0], x[0], x[1]) && between(char.position[1], y[0], y[1])) char.die();
      }
    }
  }

  draw() {
    for (let x of this.chars) {
      x.draw(this.ctx);
    }
  }

  step() {
    this.animate();
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
  animate() {
    for (var char of this.chars) {
      if (char.frameTime > char.frameLength) char.frameTime = char.frameLength;
      if (char.frameTime > 0) char.frameTime -= 1;
      else {
        char.frameTime = char.frameLength;
        if (char.frame + 1 >= char.animations[char.state].frames) {
          if (char.state === 'attack') char.resetAnimation();
          if (char.state === 'death') this.chars.splice(this.chars.indexOf(char), 1)
          char.frame = 0;
        }
        else char.frame += 1;
      }
      char.handleMovement();
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
    this.spawnEnemies(10);
    this.interval = setInterval(() => {
      this.step();
    }, 33);
  }

  gameOver() {
    clearInterval(this.interval);
    alert('u suck');
  }
}