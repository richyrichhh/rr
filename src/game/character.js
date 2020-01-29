import { debounce, drawImage } from '../util';



export default class Character {
  constructor(game, pos = [0, 0]) {
    this.position = pos,
    this.movement = [0, 0],
    this.maxHealth = 100,
    this.currentHealth = 100,
    this.game = game,
    this.upgrades = [];
    this.state = 'stand';
    this.lastDir = '';
    this.lastDirLR = 'left';
    this.lastDirUD = 'up';
    this.frame = 0;
    this.frameLength = 80;
    this.frameTime = this.frameLength;
    // this.resetAnimation = this.resetAnimation.bind(this);
  }

  resetAnimation() {
    this.state = 'stand';
    this.frame = 0;
    this.frameLength = 80;
  }

  handleReset() {
    if (this.movement[0] === 0 && this.movement[1] === 0 && this.state === 'move') {
      this.resetAnimation();
    }
  }
  handleMovement() {
    this.handleReset();
    if (this.movement[0] > 0) {
      if (this.movement[0] >= 4) {
        this.position[0] += 4;
        this.movement[0] -= 4;
      } else {
        this.position[0] -= this.movement[0];
        this.movement[0] = 0;
      }
    }
    if (this.movement[0] < 0) {
      if (this.movement[0] <= -4) {
        this.position[0] -= 4;
        this.movement[0] += 4;
      } else {
        this.position[0] += this.movement[0];
        this.movement[0] = 0;
      }
    }
    if (this.movement[1] > 0) {
      if (this.movement[1] >= 4) {
        this.position[1] += 4;
        this.movement[1] -= 4;
      } else {
        this.position[1] -= this.movement[1];
        this.movement[1] = 0;
      }
    }
    if (this.movement[1] < 0) {
      if (this.movement[1] <= -4) {
        this.position[1] -= 4;
        this.movement[1] += 4;
      } else {
        this.position[1] += this.movement[1];
        this.movement[1] = 0;
      }
    }

  }

  draw(ctx) {
    // this.handleMovement();
    var img = new Image();
    var pos = this.position;
    var lastDirLR = this.lastDirLR;
    img.onload = function() {
      drawImage(ctx, img, pos[0], pos[1], 84, 75, 0, (lastDirLR === 'left' ? true : false), false);
    }
    img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
  }

  move(dir) {
    this.state = 'move';
    this.frameLength = 8;
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
    console.log('attacking');
    if (this.state === 'death') return null;

    this.state = 'attack';
    this.frameLength = 8;
    this.frameTime = 8;
    this.frame = 0;
    let x;
    let y;
    if (this.lastDir === 'up') {
      x = [this.position[0] - 20, this.position[0] + 20];
      y = [this.position[1] - 60, this.position[1]];
    }
    else if (this.lastDir === 'down') {
      x = [this.position[0] - 20, this.position[0] + 20];
      y = [this.position[1], this.position[1] + 60];
    }
    else if (this.lastDir === 'left') {
      y = [this.position[1] - 30, this.position[1] + 30];
      x = [this.position[0] - 60, this.position[0]];
    }
    else if (this.lastDir === 'right') {
      y = [this.position[1] - 30, this.position[1] + 30];
      x = [this.position[0], this.position[0] + 60];
    }
    this.game.handleAttack(this, x, y);
  }

  die() {
    if (this.state !== 'death') {
      this.state = 'death';
      this.frame = 0;
      this.frameLength = 8;
      this.frameTime = 8;
      setTimeout(() => this.game.chars.splice(this.game.chars.indexOf(this), 1), 1000);
    }
  }
}