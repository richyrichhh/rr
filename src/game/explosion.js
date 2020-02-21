import Character from './character';
import { drawImage } from '../util';

export default class Explosion extends Character {
  constructor(game, pos) {
    super(game, pos);
    this.state = 'stand';
    
    this.animations = {
      stand: {
        frames: 1,
        frameData: {
          up: ['../src/game/animations/referee/stand-up-0.png'],
          down: ['../src/game/animations/referee/stand-up-0.png']
        }
      }
    }
  }
}
