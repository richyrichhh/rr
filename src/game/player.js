import Character from './character';

export default class Player extends Character {
  constructor(game) {
    super(game);
    this.animations = {
      move: [],
      attack: []
    }
  }
}