import Character from './character';
import { distance } from '../util';
import Powerup from './powerup';

const dirs = ['left', 'down', 'right', 'up'];

export default class Enemy extends Character {
  constructor(game) {
    super(game, game.randomPosAtEdges());
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
    this.type = 1;
    this.AI();
  }

  
  AI() {
    if (!this.dead) {
      this.move(dirs[Math.floor(Math.random() * 4)]);
      if (!this.dead && distance(this.position, this.game.player.position) < 100) this.attack();
      setTimeout(() => this.AI(), 1000);
    }

  }



  // startAI() {
  //   setInterval(() => this.AI(), 1000);
  // }

  die() {
    if (!this.dead) {
      this.state = 'death';
      this.dead = true;
      this.frame = 0;
      this.frameLength = 8;
      this.frameTime = 8;
      this.game.kills += 1;
      setTimeout(() => {
        if (Math.random() > 0.9) {
          if (Math.random() > 0.75) {
            this.game.items.push(new Powerup(this.game, this.position, 'health'));
          } else {
            this.game.items.push(new Powerup(this.game, this.position, 'special'));
          }
        }
        this.game.chars.splice(this.game.chars.indexOf(this), 1)
      }, 750);
    }
  }
}