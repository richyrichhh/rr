import Character from './character';

export default class Enemy extends Character {
  constructor(game, pos) {
    super(game, pos);
    this.animations = {
      stand: {
        frames: 0,
        frameData: []
      },
      move: {
        frames: 0,
        frameData: []
      },
      attack: {
        frames: 0,
        frameData: []
      }
    }
    this.imageUrl = this.animations.stand.frameData[0]
  }
}