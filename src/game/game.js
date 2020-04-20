import Player from './player';
import Enemy from './enemy';
import { between } from '../util';
import StartMenu from '../menu/start-menu';
import EndMenu from '../menu/end-menu';
import Boss from './boss';

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
    this.kills = 49;
    this.baseEnemies = 1;
    this.specialMeter = 5;
    this.over = false;
    this.menu = new StartMenu(this, this.ctx);
    this.scoreboard = new Image();
    this.scoreboard.src = '../src/game/animations/scoreboard-new.png';
    this.items = [];
    this.bosses = 1;
  }

  factory() {
    this.createEnemy();
    if (this.kills > 5) this.createEnemy();
    if (this.kills > 10) this.createEnemy();
    if (this.kills > 20) this.createEnemy();
    if (this.kills > 30) {
      this.createEnemy();
      this.createEnemy();
    }
    if (this.kills > 50) {
      this.createEnemy();
      this.createEnemy();
      this.createEnemy();
      this.createEnemy();
    } 

    if (this.kills > 50 * this.bosses) {
      this.bosses += 1;
      this.chars.push(new Boss(this));
      return;
    }

    if (this.player.state !== 'death') setTimeout(() => this.factory(), Math.max(Math.floor(Math.random()*(5000 - (50 * this.kills))), 500));
  }

  randomPosAtEdges() {
    let random_x = Math.floor(Math.random() * this.dimensions[`width`]);
    let random_y = Math.floor(Math.random() * this.dimensions[`height`]);
    return [[0, random_y], [random_x, 0], [this.dimensions[`width`], random_y], [random_x, this.dimensions[`height`]]][Math.floor(Math.random() * 4)];
  }

  createEnemy() {
    let enemy = new Enemy(this);
    this.chars.push(enemy);
  }

  // spawnEnemies(n, l = 1) {
  //   let c = n + (5 * l);
  //   while (c > 0) {
  //     c -= 1
  //     this.createEnemy();
  //   }
  // }

  handleAttack(unit, x, y) {
    if (unit.state === 'death' || !unit) return null;
    for (var char of this.chars) {
      // console.dir(char);
      // console.log(typeof unit);
      if (char.__proto__.constructor.name !== unit.__proto__.constructor.name) {
        if (between(char.centerPos[0], x[0], x[1]) && between(char.centerPos[1], y[0], y[1])) {
          if (char instanceof Enemy && this.specialMeter < 10) this.specialMeter += 1;
          if (char.state !== 'death') char.die();
        }
      }
    }
  }

  draw() {
    for (let x of this.chars) {
      x.draw(this.ctx);
    }

    for (let y of this.items) {
      y.draw(this.ctx);
    }

    this.ctx.drawImage(this.scoreboard, this.canvas.width - 199, this.canvas.height - 103)
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '32px verdana, sans-serif';
    this.ctx.fillText(this.kills, this.canvas.width - 199 + 116, this.canvas.height - 103 + 36);
    this.ctx.fillRect(this.canvas.width - 191, this.canvas.height - 33, 182 * (this.specialMeter / 10), 30);
    this.player.life > 2 ? this.ctx.fillStyle = 'rgb(0, 255, 0)' : this.player.life === 2 ? this.ctx.fillStyle = 'rgb(255, 255, 0)' : this.ctx.fillStyle = 'rgb(255, 0, 0)';
    this.ctx.fillRect(this.canvas.width - 191, this.canvas.height - 53, 182 * (this.player.life / 5), 16);
    this.ctx.fillStyle = '#222222'
    this.ctx.font = '16px verdana, sans-serif';
    this.ctx.fillText(`LIFE`, this.canvas.width - 186, this.canvas.height - 39, 150);
    this.ctx.fillText(`SPECIAL${this.specialMeter === 10 ? `: PRESS S` : ""}`, this.canvas.width - 186, this.canvas.height - 12, 150);
  }

  // step() {
  //   this.animate();
  //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //   this.draw();
  //   if (this.over === true) return;
  //   setTimeout(() => requestAnimationFrame(this.step.bind(this)), 33);
  //   // requestAnimationFrame(this.step.bind(this));

  // }

  // step() {
  //   // var canvas = document.getElementById('myCanvas');
  //   // var context = canvas.getContext('2d');

  //   // update
  //   this.animate();
  //   // clear
  //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  //   // draw stuff
  //   this.draw();
  //   this.step = this.step.bind(this);
  //   // request new frame
  //   if (this.over === true) return;
  //   requestAnimFrame(function () {
  //     this.step();
  //   });
  // }

  animate() {
    for (var char of this.chars) {
      if (char.frameTime > char.frameLength) char.frameTime = char.frameLength;
      if (char.frameTime > 0) char.frameTime -= 1;
      else {
        char.frameTime = char.frameLength;
        if (char.frame + 1 >= char.animations[char.state].frames) {
          if (char.state === 'attack' || 'dunk') char.resetAnimation();
          // if (char.state === 'death') this.chars.splice(this.chars.indexOf(char), 1)
          char.frame = 0;
        }
        else char.frame += 1;
      }
      char.handleMovement();
    }
  }

  // animateStand() {
  //   for (var char of this.chars) {
  //     if (char.state === 'stand') {
  //       if (char.frame + 1 >= char.animations[char.state].frames) char.frame = 0;
  //       else char.frame += 1;
  //     }
  //   }
  // }

  // animateWalk() {
  //   for (var char of this.chars) {
  //     if (char.state === 'move') {
  //       if (char.frame + 1 >= char.animations[char.state].frames) char.frame = 0;
  //       else char.frame += 1;
  //     }
  //   }
  // }

  start() {
    this.ctx.font = '32px verdana, sans-serif';
    this.createEnemy();
    this.createEnemy();
    this.createEnemy();
    this.createEnemy();
    this.createEnemy();
    this.factory();
    // requestAnimationFrame(this.step.bind(this));
    // this.interval = setInterval(() => {
    //   window.requestAnimationFrame(this.step());
    // }, 33);
    // setTimeout(() => this.factory(), 5000);
  }

  gameOver() {
    clearInterval(this.interval);
    this.over = true;
    setTimeout(() => {
      let endscreen = new EndMenu(this, this.ctx);
      endscreen.render();
    }, 250);
  }
}


