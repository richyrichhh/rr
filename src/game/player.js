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
        frames: 2,
        frameData: {
          up: ['../src/game/animations/referee/attack-0.png', '../src/game/animations/referee/attack-1.png'],
          down: ['../src/game/animations/referee/attack-0.png', '../src/game/animations/referee/attack-1.png']
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
    if (this.state === 'stand') {
      img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
      drawImage(ctx, img, pos[0], pos[1], 100, 140, 0, ((lastDirUD === 'down' && lastDirLR === 'left') || (lastDirUD === 'up' && lastDirLR === 'right') ? true : false), false);
    }
    else if (this.state === 'move') {
      img.src = this.animations[this.state].frameData[this.lastDir][this.frame];
      ctx.drawImage(img, pos[0], pos[1]);
    }
    else {
      img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
      drawImage(ctx, img, pos[0], pos[1], 84, 75, 0, (lastDirLR === 'left' ? true : false), false);
    }
    
  }

  die() {
    if (this.state !== 'death') {
      this.state = 'death';
      this.frame = 0;
      this.frameLength = 8;
      this.frameTime = 8;
      setTimeout(() => this.game.gameOver(), 3000);
    }
  }

  move(dir) {
    this.state = 'move';
    this.frameLength = 3;
    if (dir === 'up') {
      if (this.position[1] - 20 < 0) {
        this.movement[1] = this.position[1];
      } else this.movement[1] -= 20;
      this.lastDirUD = 'up';
      this.lastDir = 'up';
    }
    else if (dir === 'down') {
      if (this.position[1] + 20 > this.game.dimensions['height']) {
        this.movement[1] = this.game.dimensions['height'] - this.position[1];
      } else this.movement[1] += 20;
      this.lastDirUD = 'down';
      this.lastDir = 'down';
    }
    else if (dir === 'left') {
      if (this.position[0] - 20 < 0) {
        this.movement[0] = this.position[0];
      } else this.movement[0] -= 20;
      this.lastDirLR = 'left';
      this.lastDir = 'left';
    }
    else if (dir === 'right') {
      if (this.position[0] + 20 > this.game.dimensions['width']) {
        this.movement[0] = this.game.dimensions['width'] - this.position[0];
      } else this.movement[0] += 20;
      this.lastDirLR = 'right';
      this.lastDir = 'right';
    }

    // this.resetAnimation = this.resetAnimation.bind(this);
    // debounce(() => this.resetAnimation(), 1000);
  }

  attack() {
    if (this.state === 'death') return null;
    this.state = 'attack';
    this.frameLength = 8;
    this.frameTime = 8;
    this.frame = 0;
    let x;
    let y;
    if (this.lastDir === 'up') {
      x = [this.position[0] - 20, this.position[0] + 30];
      y = [this.position[1] - 65, this.position[1] + 20];
    }
    else if (this.lastDir === 'down') {
      x = [this.position[0] - 20, this.position[0] + 30];
      y = [this.position[1] - 10, this.position[1] + 75];
    }
    else if (this.lastDir === 'left') {
      y = [this.position[1] - 30, this.position[1] + 40];
      x = [this.position[0] - 70, this.position[0] + 20];
    }
    else if (this.lastDir === 'right') {
      y = [this.position[1] - 30, this.position[1] + 40];
      x = [this.position[0] - 10, this.position[0] + 80];
    }

    this.game.chars.push(new Explosion(this.game, [x, y]));
    this.game.handleAttack(this, x, y);
  }
}