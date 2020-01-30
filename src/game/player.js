import Character from './character';

export default class Player extends Character {
  constructor(game) {
    super(game, [600, 300]);
    this.animations = {
      stand: {
        frames: 2,
        frameData: {
          up: ['../src/game/animations/referee/stand-up-0.png', '../src/game/animations/referee/stand-up-1.png'],
          down: ['../src/game/animations/referee/stand-down-0.png', '../src/game/animations/referee/stand-down-1.png']
        }
      },
      move: {
        frames: 6,
        frameData: {
          up: ['../src/game/animations/referee/walk-up-0.png', '../src/game/animations/referee/walk-up-1.png', '../src/game/animations/referee/walk-up-2.png', '../src/game/animations/referee/walk-up-3.png', '../src/game/animations/referee/walk-up-4.png', '../src/game/animations/referee/walk-up-5.png'],
          down: ['../src/game/animations/referee/walk-down-0.png', '../src/game/animations/referee/walk-down-1.png', '../src/game/animations/referee/walk-down-2.png', '../src/game/animations/referee/walk-down-3.png', '../src/game/animations/referee/walk-down-4.png', '../src/game/animations/referee/walk-down-5.png']
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
        frames: 6,
        frameData: {
          up: ['../src/game/animations/referee/death-0.png', '../src/game/animations/referee/death-1.png', '../src/game/animations/referee/death-2.png', '../src/game/animations/referee/death-3.png', '../src/game/animations/referee/death-4.png', '../src/game/animations/referee/death-5.png'],
          down: ['../src/game/animations/referee/death-0.png', '../src/game/animations/referee/death-1.png', '../src/game/animations/referee/death-2.png', '../src/game/animations/referee/death-3.png', '../src/game/animations/referee/death-4.png', '../src/game/animations/referee/death-5.png']
        }
      }
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
    this.game.handleAttack(this, x, y);
  }
}