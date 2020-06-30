import Enemy from './enemy';
import { distance, drawImage } from '../util';
import Powerup from './powerup';

const dirs = ['left', 'down', 'right', 'up'];

export default class Boss extends Enemy {
  constructor(game) {
    super(game);
    this.animations = {
      stand: {
        frames: 14,
        frameData: {
          up: ['../src/game/animations/shaq/stand/stand_0-0.png', '../src/game/animations/shaq/stand/stand_0-1.png', '../src/game/animations/shaq/stand/stand_0-2.png', '../src/game/animations/shaq/stand/stand_0-3.png', '../src/game/animations/shaq/stand/stand_0-4.png', '../src/game/animations/shaq/stand/stand_0-5.png', '../src/game/animations/shaq/stand/stand_0-6.png', '../src/game/animations/shaq/stand/stand_0-7.png', '../src/game/animations/shaq/stand/stand_0-8.png', '../src/game/animations/shaq/stand/stand_0-9.png', '../src/game/animations/shaq/stand/stand_0-10.png', '../src/game/animations/shaq/stand/stand_0-11.png', '../src/game/animations/shaq/stand/stand_0-12.png', '../src/game/animations/shaq/stand/stand_0-13.png'],
          down: ['../src/game/animations/shaq/stand/stand_0-0.png', '../src/game/animations/shaq/stand/stand_0-1.png', '../src/game/animations/shaq/stand/stand_0-2.png', '../src/game/animations/shaq/stand/stand_0-3.png', '../src/game/animations/shaq/stand/stand_0-4.png', '../src/game/animations/shaq/stand/stand_0-5.png', '../src/game/animations/shaq/stand/stand_0-6.png', '../src/game/animations/shaq/stand/stand_0-7.png', '../src/game/animations/shaq/stand/stand_0-8.png', '../src/game/animations/shaq/stand/stand_0-9.png', '../src/game/animations/shaq/stand/stand_0-10.png', '../src/game/animations/shaq/stand/stand_0-11.png', '../src/game/animations/shaq/stand/stand_0-12.png', '../src/game/animations/shaq/stand/stand_0-13.png']
        }
      },
      move: {
        frames: 23,
        frameData: {
          up: ['../src/game/animations/shaq/run/run_100-0.png', '../src/game/animations/shaq/run/run_100-1.png', '../src/game/animations/shaq/run/run_100-2.png', '../src/game/animations/shaq/run/run_100-3.png', '../src/game/animations/shaq/run/run_100-4.png', '../src/game/animations/shaq/run/run_100-5.png', '../src/game/animations/shaq/run/run_100-6.png', '../src/game/animations/shaq/run/run_100-7.png', '../src/game/animations/shaq/run/run_100-8.png', '../src/game/animations/shaq/run/run_100-9.png', '../src/game/animations/shaq/run/run_100-10.png', '../src/game/animations/shaq/run/run_100-11.png', '../src/game/animations/shaq/run/run_100-12.png', '../src/game/animations/shaq/run/run_100-13.png', '../src/game/animations/shaq/run/run_100-14.png', '../src/game/animations/shaq/run/run_100-15.png', '../src/game/animations/shaq/run/run_100-16.png', '../src/game/animations/shaq/run/run_100-17.png', '../src/game/animations/shaq/run/run_100-18.png', '../src/game/animations/shaq/run/run_100-19.png', '../src/game/animations/shaq/run/run_100-20.png', '../src/game/animations/shaq/run/run_100-21.png', '../src/game/animations/shaq/run/run_100-22.png'],
          down: ['../src/game/animations/shaq/run/run_100-0.png', '../src/game/animations/shaq/run/run_100-1.png', '../src/game/animations/shaq/run/run_100-2.png', '../src/game/animations/shaq/run/run_100-3.png', '../src/game/animations/shaq/run/run_100-4.png', '../src/game/animations/shaq/run/run_100-5.png', '../src/game/animations/shaq/run/run_100-6.png', '../src/game/animations/shaq/run/run_100-7.png', '../src/game/animations/shaq/run/run_100-8.png', '../src/game/animations/shaq/run/run_100-9.png', '../src/game/animations/shaq/run/run_100-10.png', '../src/game/animations/shaq/run/run_100-11.png', '../src/game/animations/shaq/run/run_100-12.png', '../src/game/animations/shaq/run/run_100-13.png', '../src/game/animations/shaq/run/run_100-14.png', '../src/game/animations/shaq/run/run_100-15.png', '../src/game/animations/shaq/run/run_100-16.png', '../src/game/animations/shaq/run/run_100-17.png', '../src/game/animations/shaq/run/run_100-18.png', '../src/game/animations/shaq/run/run_100-19.png', '../src/game/animations/shaq/run/run_100-20.png', '../src/game/animations/shaq/run/run_100-21.png', '../src/game/animations/shaq/run/run_100-22.png']
        }
      },
      attack: {
        frames: 19,
        frameData: {
          up: ['../src/game/animations/shaq/kick/kick_1000-0.png', '../src/game/animations/shaq/kick/kick_1000-1.png', '../src/game/animations/shaq/kick/kick_1000-2.png', '../src/game/animations/shaq/kick/kick_1000-3.png', '../src/game/animations/shaq/kick/kick_1000-4.png', '../src/game/animations/shaq/kick/kick_1000-5.png', '../src/game/animations/shaq/kick/kick_1000-6.png', '../src/game/animations/shaq/kick/kick_1000-7.png', '../src/game/animations/shaq/kick/kick_1000-8.png', '../src/game/animations/shaq/kick/kick_1000-9.png', '../src/game/animations/shaq/kick/kick_1000-10.png', '../src/game/animations/shaq/kick/kick_1000-11.png', '../src/game/animations/shaq/kick/kick_1000-12.png', '../src/game/animations/shaq/kick/kick_1000-13.png', '../src/game/animations/shaq/kick/kick_1000-14.png', '../src/game/animations/shaq/kick/kick_1000-15.png', '../src/game/animations/shaq/kick/kick_1000-16.png', '../src/game/animations/shaq/kick/kick_1000-17.png', '../src/game/animations/shaq/kick/kick_1000-18.png'],
          down: ['../src/game/animations/shaq/kick/kick_1000-0.png', '../src/game/animations/shaq/kick/kick_1000-1.png', '../src/game/animations/shaq/kick/kick_1000-2.png', '../src/game/animations/shaq/kick/kick_1000-3.png', '../src/game/animations/shaq/kick/kick_1000-4.png', '../src/game/animations/shaq/kick/kick_1000-5.png', '../src/game/animations/shaq/kick/kick_1000-6.png', '../src/game/animations/shaq/kick/kick_1000-7.png', '../src/game/animations/shaq/kick/kick_1000-8.png', '../src/game/animations/shaq/kick/kick_1000-9.png', '../src/game/animations/shaq/kick/kick_1000-10.png', '../src/game/animations/shaq/kick/kick_1000-11.png', '../src/game/animations/shaq/kick/kick_1000-12.png', '../src/game/animations/shaq/kick/kick_1000-13.png', '../src/game/animations/shaq/kick/kick_1000-14.png', '../src/game/animations/shaq/kick/kick_1000-15.png', '../src/game/animations/shaq/kick/kick_1000-16.png', '../src/game/animations/shaq/kick/kick_1000-17.png', '../src/game/animations/shaq/kick/kick_1000-18.png']
        }
      },
      death: {
        frames: 7,
        frameData: {
          up: ['../src/game/animations/shaq/death/death_170-0.png', '../src/game/animations/shaq/death/death_170-1.png', '../src/game/animations/shaq/death/death_170-2.png', '../src/game/animations/shaq/death/death_170-3.png', '../src/game/animations/shaq/death/death_170-4.png', '../src/game/animations/shaq/death/death_170-5.png', '../src/game/animations/shaq/death/death_170-6.png'],
          down: ['../src/game/animations/shaq/death/death_170-0.png', '../src/game/animations/shaq/death/death_170-1.png', '../src/game/animations/shaq/death/death_170-2.png', '../src/game/animations/shaq/death/death_170-3.png', '../src/game/animations/shaq/death/death_170-4.png', '../src/game/animations/shaq/death/death_170-5.png', '../src/game/animations/shaq/death/death_170-6.png']
        }
      }
    }

    this.life = 6;
    this.type = 1;
    this.offset = [30, 70];
    this.centerPos = [this.position[0] + this.offset[0], this.position[1] + this.offset[1]];
  }

  draw(ctx) {
    // this.handleMovement();
    var img = new Image();
    var pos = this.position;
    var lastDirLR = this.lastDirLR;
    // img.onload = function() {
    //   drawImage(ctx, img, pos[0], pos[1], 84, 75, 0, (lastDirLR === 'left' ? true : false), false);
    // }
    img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
    drawImage(ctx, img, pos[0], pos[1], img.width * 2, img.height * 2, 0, (lastDirLR === 'left' ? true : false), false);
    ctx.fillStyle = 'rgb(0, 255, 0)';
    if (pos[1] - 20 >= 0) ctx.fillRect(pos[0], pos[1] - 20, 60 * (this.life / 6), 10);
  }

  resetAnimation() {
    this.state = 'stand';
    this.frame = 0;
    this.frameLength = 4;
  }

  AI() {
    if (!this.dead) {
      let d = [...dirs];
      if (this.position[0] > (this.game.canvas.width / 2) + 200) {
        d.push('left');
        d.push('left');
      }
      if (this.position[0] < (this.game.canvas.width / 2) - 200) {
        d.push('right');
        d.push('right');
      }
      if (this.position[1] < (this.game.canvas.height / 2) - 100) {
        d.push('down');
        d.push('down');
      }
      if (this.position[1] > (this.game.canvas.height / 2) + 100) {
        d.push('up');
        d.push('up');
      }
      this.move(d[Math.floor(Math.random() * d.length)]);
      if (!this.dead && distance(this.position, this.game.player.position) < 150) this.attack();
      setTimeout(() => this.AI(), 1000);
    }

  }

  move(dir) {
    this.state = 'move';
    this.frameLength = 2;
    this.updateCenterPos();
    if (dir === 'up') {
      if (this.position[1] - 50 < 0) {
        this.movement[1] = this.position[1];
      } else this.movement[1] -= 50;
      this.lastDirUD = 'up';
      this.lastDir = 'up';
    }
    else if (dir === 'down') {
      if (this.position[1] + 50 > this.game.dimensions['height']) {
        this.movement[1] = this.game.dimensions['height'] - this.position[1];
      } else this.movement[1] += 50;
      this.lastDirUD = 'down';
      this.lastDir = 'down';
    }
    else if (dir === 'left') {
      if (this.position[0] - 50 < 0) {
        this.movement[0] = this.position[0];
      } else this.movement[0] -= 50;
      this.lastDirLR = 'left';
      this.lastDir = 'left';
    }
    else if (dir === 'right') {
      if (this.position[0] + 50 > this.game.dimensions['width']) {
        this.movement[0] = this.game.dimensions['width'] - this.position[0];
      } else this.movement[0] += 50;
      this.lastDirLR = 'right';
      this.lastDir = 'right';
    }

  }

  attack() {
    if (this.dead) return null;
    this.state = 'attack';
    this.frameLength = 2;
    this.frameTime = 2;
    this.frame = 0;
    this.updateCenterPos();
    let x;
    let y;
    if (this.lastDirLR === 'left') {
      x = [this.centerPos[0] - 100, this.centerPos[0] + 10];
      y = [this.centerPos[1] - 40, this.centerPos[1] + 40];
    }
    else if (this.lastDirLR === 'right') {
      x = [this.centerPos[0] - 10, this.centerPos[0] + 100];
      y = [this.centerPos[1] - 40, this.centerPos[1] + 40];
    }
    this.game.handleAttack(this, x, y);
  }

  die() {
    if (!this.dead) {
      this.life -= 1;
      if (this.life <= 0) {
        this.state = 'death';
        this.dead = true;
        this.frame = 0;
        this.frameLength = 6;
        this.frameTime = 6;
        this.game.kills += 1;
        setTimeout(() => {
          if (Math.random() > 0.5) {
            this.game.items.push(new Powerup(this.game, this.position, 'health'));
            this.game.items.push(new Powerup(this.game, this.position, 'health'));
            this.game.items.push(new Powerup(this.game, this.position, 'health'));
            this.game.items.push(new Powerup(this.game, this.position, 'health'));
            this.game.items.push(new Powerup(this.game, this.position, 'health'));
          } else {
            this.game.items.push(new Powerup(this.game, this.position, 'special'));
            this.game.items.push(new Powerup(this.game, this.position, 'special'));
            this.game.items.push(new Powerup(this.game, this.position, 'special'));
            this.game.items.push(new Powerup(this.game, this.position, 'special'));
            this.game.items.push(new Powerup(this.game, this.position, 'special'));
          }
          this.game.bossKills += 1;
          this.game.chars.splice(this.game.chars.indexOf(this), 1)
          
        }, 750);
        this.game.numBosses--;
        if (this.game.numBosses === 0) {
          if (this.game.kills > 200) {
            this.game.victory();
          }
          this.game.factory();
        }
      } 
    }
  }
}