import Character from './character';
import { drawImage } from '../util';

export default class Explosion extends Character {
  constructor(game, pos) {
    super(game, pos);
    this.state = 'stand';
    
    this.animations = {
      stand: {
        frames: 16,
        frameData: {
          up: ['../src/game/animations/explosion/tile-0.png', '../src/game/animations/explosion/tile-1.png', '../src/game/animations/explosion/tile-2.png', '../src/game/animations/explosion/tile-3.png', '../src/game/animations/explosion/tile-4.png', '../src/game/animations/explosion/tile-5.png', '../src/game/animations/explosion/tile-6.png', '../src/game/animations/explosion/tile-7.png', '../src/game/animations/explosion/tile-8.png', '../src/game/animations/explosion/tile-9.png', '../src/game/animations/explosion/tile-10.png', '../src/game/animations/explosion/tile-11.png', '../src/game/animations/explosion/tile-12.png', '../src/game/animations/explosion/tile-13.png', '../src/game/animations/explosion/tile-14.png', '../src/game/animations/explosion/tile-15.png'],
          down: ['../src/game/animations/explosion/tile-0.png', '../src/game/animations/explosion/tile-1.png', '../src/game/animations/explosion/tile-2.png', '../src/game/animations/explosion/tile-3.png', '../src/game/animations/explosion/tile-4.png', '../src/game/animations/explosion/tile-5.png', '../src/game/animations/explosion/tile-6.png', '../src/game/animations/explosion/tile-7.png', '../src/game/animations/explosion/tile-8.png', '../src/game/animations/explosion/tile-9.png', '../src/game/animations/explosion/tile-10.png', '../src/game/animations/explosion/tile-11.png', '../src/game/animations/explosion/tile-12.png', '../src/game/animations/explosion/tile-13.png', '../src/game/animations/explosion/tile-14.png', '../src/game/animations/explosion/tile-15.png']
        }
      }
    }
  }
}
