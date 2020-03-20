import Character from './character';
import TestBox from './box';
import Explosion from './explosion';
import { drawImage } from '../util';

export default class Player extends Character {
  constructor(game) {
    super(game, [600, 300]);
    this.animations = {
      stand: {
        frames: 5,
        frameData: {
          up: ['../src/game/animations/barkley/stand-up-0.png', '../src/game/animations/barkley/stand-up-1.png', '../src/game/animations/barkley/stand-up-2.png', '../src/game/animations/barkley/stand-up-3.png', '../src/game/animations/barkley/stand-up-4.png'],
          down: ['../src/game/animations/barkley/stand-down-0.png', '../src/game/animations/barkley/stand-down-1.png', '../src/game/animations/barkley/stand-down-2.png', '../src/game/animations/barkley/stand-down-3.png', '../src/game/animations/barkley/stand-down-4.png', '../src/game/animations/barkley/stand-down-5.png']
        }
      },
      move: {
        frames: 8,
        frameData: {
          up: ['../src/game/animations/barkley/move-up-0.png', '../src/game/animations/barkley/move-up-1.png', '../src/game/animations/barkley/move-up-2.png', '../src/game/animations/barkley/move-up-3.png', '../src/game/animations/barkley/move-up-4.png', '../src/game/animations/barkley/move-up-5.png', '../src/game/animations/barkley/move-up-6.png', '../src/game/animations/barkley/move-up-7.png'],
          down: ['../src/game/animations/barkley/move-down-0.png', '../src/game/animations/barkley/move-down-1.png', '../src/game/animations/barkley/move-down-2.png', '../src/game/animations/barkley/move-down-3.png', '../src/game/animations/barkley/move-down-4.png', '../src/game/animations/barkley/move-down-5.png', '../src/game/animations/barkley/move-down-6.png', '../src/game/animations/barkley/move-down-7.png'],
          right: ['../src/game/animations/barkley/move-right-0.png', '../src/game/animations/barkley/move-right-1.png', '../src/game/animations/barkley/move-right-2.png', '../src/game/animations/barkley/move-right-3.png', '../src/game/animations/barkley/move-right-4.png', '../src/game/animations/barkley/move-right-5.png', '../src/game/animations/barkley/move-right-6.png', '../src/game/animations/barkley/move-right-7.png'],
          left: ['../src/game/animations/barkley/move-left-0.png', '../src/game/animations/barkley/move-left-1.png', '../src/game/animations/barkley/move-left-2.png', '../src/game/animations/barkley/move-left-3.png', '../src/game/animations/barkley/move-left-4.png', '../src/game/animations/barkley/move-left-5.png', '../src/game/animations/barkley/move-left-6.png', '../src/game/animations/barkley/move-left-7.png']
        }
      },
      attack: {
        frames: 3,
        frameData: {
          up: ['../src/game/animations/barkley/attack-up-0.png', '../src/game/animations/barkley/attack-up-1.png', '../src/game/animations/barkley/attack-up-2.png'],
          down: ['../src/game/animations/barkley/attack-down-0.png', '../src/game/animations/barkley/attack-down-1.png', '../src/game/animations/barkley/attack-down-2.png'],
          right: ['../src/game/animations/barkley/attack-right-0.png', '../src/game/animations/barkley/attack-right-1.png', '../src/game/animations/barkley/attack-right-2.png'],
          left: ['../src/game/animations/barkley/attack-left-0.png', '../src/game/animations/barkley/attack-left-1.png', '../src/game/animations/barkley/attack-left-2.png']
        }
      },
      dunk: {
        frames: 9,
        frameData: {
          up: ['../src/game/animations/barkley/dunk-0.png', '../src/game/animations/barkley/dunk-1.png', '../src/game/animations/barkley/dunk-2.png', '../src/game/animations/barkley/dunk-3.png', '../src/game/animations/barkley/dunk-4.png', '../src/game/animations/barkley/dunk-5.png', '../src/game/animations/barkley/dunk-6.png', '../src/game/animations/barkley/dunk-7.png', '../src/game/animations/barkley/dunk-8.png'],
          down: ['../src/game/animations/barkley/dunk-0.png', '../src/game/animations/barkley/dunk-1.png', '../src/game/animations/barkley/dunk-2.png', '../src/game/animations/barkley/dunk-3.png', '../src/game/animations/barkley/dunk-4.png', '../src/game/animations/barkley/dunk-5.png', '../src/game/animations/barkley/dunk-6.png', '../src/game/animations/barkley/dunk-7.png', '../src/game/animations/barkley/dunk-8.png']
        }
      },
      death: {
        frames: 15,
        frameData: {
          up: ['../src/game/animations/explosion/tile-0.png', '../src/game/animations/explosion/tile-1.png', '../src/game/animations/explosion/tile-2.png', '../src/game/animations/explosion/tile-3.png', '../src/game/animations/explosion/tile-4.png', '../src/game/animations/explosion/tile-5.png', '../src/game/animations/explosion/tile-6.png', '../src/game/animations/explosion/tile-7.png', '../src/game/animations/explosion/tile-8.png', '../src/game/animations/explosion/tile-9.png', '../src/game/animations/explosion/tile-10.png', '../src/game/animations/explosion/tile-11.png', '../src/game/animations/explosion/tile-12.png', '../src/game/animations/explosion/tile-13.png', '../src/game/animations/explosion/tile-14.png', '../src/game/animations/explosion/tile-15.png'],
          down: ['../src/game/animations/explosion/tile-0.png', '../src/game/animations/explosion/tile-1.png', '../src/game/animations/explosion/tile-2.png', '../src/game/animations/explosion/tile-3.png', '../src/game/animations/explosion/tile-4.png', '../src/game/animations/explosion/tile-5.png', '../src/game/animations/explosion/tile-6.png', '../src/game/animations/explosion/tile-7.png', '../src/game/animations/explosion/tile-8.png', '../src/game/animations/explosion/tile-9.png', '../src/game/animations/explosion/tile-10.png', '../src/game/animations/explosion/tile-11.png', '../src/game/animations/explosion/tile-12.png', '../src/game/animations/explosion/tile-13.png', '../src/game/animations/explosion/tile-14.png', '../src/game/animations/explosion/tile-15.png']
        }
      }
    }
    
  }

  resetAnimation() {
    this.state = 'stand';
    this.frame = 0;
    this.frameLength = 3;
  }

  draw(ctx) {
    // this.handleMovement();
    var img = new Image();
    var pos = this.position;
    var lastDirLR = this.lastDirLR;
    var lastDirUD = this.lastDirUD;
    // img.onload = function() {
    //   drawImage(ctx, img, pos[0], pos[1], 84, 75, 0, (lastDirLR === 'left' ? true : false), false);
    // }
    switch(this.state) {
      case 'stand':
        img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
        drawImage(ctx, img, pos[0], pos[1], 100, 140, 0, ((lastDirUD === 'down' && lastDirLR === 'left') || (lastDirUD === 'up' && lastDirLR === 'right') ? true : false), false);
        break;
      case 'move':
        img.src = this.animations[this.state].frameData[this.lastDir][this.frame];
        ctx.drawImage(img, pos[0], pos[1]);
        break;
      case 'attack':
        img.src = this.animations[this.state].frameData[this.lastDir][this.frame];
        ctx.drawImage(img, pos[0], pos[1]);
        break;
      case 'dunk':
        img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
        drawImage(ctx, img, pos[0], pos[1], 120, 175, 0, (lastDirLR === 'left' ? true : false), false);
        break;
      default:
        img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
        drawImage(ctx, img, pos[0], pos[1], 150, 150, 0, (lastDirLR === 'left' ? true : false), false);
        break;
    }
  }

  die() {
    if (this.state !== 'death') {
      this.state = 'death';
      this.frame = 0;
      this.frameLength = 1;
      this.frameTime = 1;
      setTimeout(() => this.game.gameOver(), 3000);
    }
  }

  move(dir) {
    this.state = 'move';
    this.frameLength = 3;
    switch (dir) {
      case 'up':
        if (this.position[1] - 20 < 0) {
          this.movement[1] = this.position[1];
        } else this.movement[1] -= 20;
        this.lastDirUD = 'up';
        this.lastDir = 'up';
        break;
      case 'down':
        if (this.position[1] + 20 > this.game.dimensions['height']) {
          this.movement[1] = this.game.dimensions['height'] - this.position[1];
        } else this.movement[1] += 20;
        this.lastDirUD = 'down';
        this.lastDir = 'down';
        break;
      case 'left':
        if (this.position[0] - 20 < 0) {
          this.movement[0] = this.position[0];
        } else this.movement[0] -= 20;
        this.lastDirLR = 'left';
        this.lastDir = 'left';
        break;
      case 'right':
        if (this.position[0] + 20 > this.game.dimensions['width']) {
          this.movement[0] = this.game.dimensions['width'] - this.position[0];
        } else this.movement[0] += 20;
        this.lastDirLR = 'right';
        this.lastDir = 'right';
        break;
    }
  }

  attack() {
    if (this.state === 'death') return null;
    this.state = 'attack';
    this.frameLength = 8;
    this.frameTime = 8;
    this.frame = 0;
    let x;
    let y;
    switch (this.lastDir) {
      case 'up':
        x = [this.position[0] - 20, this.position[0] + 30];
        y = [this.position[1] - 65, this.position[1] + 20];
        break;
      case 'down':
        x = [this.position[0] - 20, this.position[0] + 30];
        y = [this.position[1] - 10, this.position[1] + 75];
        break;
      case 'left':
        y = [this.position[1] - 30, this.position[1] + 40];
        x = [this.position[0] - 70, this.position[0] + 20];
        break;
      case 'right':
        y = [this.position[1] - 30, this.position[1] + 40];
        x = [this.position[0] - 10, this.position[0] + 80];
        break;
    }

    this.game.chars.push(new Explosion(this.game, [(x[0] + x[1])/2, (y[0] + y[1])/2]));
    this.game.handleAttack(this, x, y);
  }

  dunk() {
    if (this.state === 'death') return null;
    this.state = 'dunk';
    this.frameLength = 8;
    this.frameTime = 8;
    this.frame = 0;
    let x = [this.position[0] - 100, this.position[0] + 120 + 100];
    let y = [this.position[1] - 100, this.position[1] + 140 + 100];

    this.game.chars.push(new Explosion(this.game, [(x[0] + x[1])/2, (y[0] + y[1])/2]));
    this.game.handleAttack(this, x, y);
  }
}