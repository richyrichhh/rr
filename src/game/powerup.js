import { drawImage } from '../util';

export default class Powerup {
  constructor(game, pos, type) {
    this.game = game;
    this.position = pos;
    this.centerPos = [pos[0] + 25, pos[1] + 25];
    this.type = type;
  }

  collect() {
    switch (this.type) {
      case 'health':
        if (this.game.player.health < 5) this.game.player.health += 1;
      case 'special':
        if (this.game.specialMeter < 10) this.game.specialMeter = Math.min(10, this.game.specialMeter + 2);
      default:
        this.game.items.splice(this.game.items.indexOf(this), 1);
        break;
    }
  }

  draw(ctx) {
    var img = new Image();
    if (this.type === 'health') img.src = "../src/game/animations/powerups/health.png";
    else if (this.type === 'special') img.src = "../src/game/animations/powerups/special.png";
    drawImage(ctx, img, this.position[0], this.position[1], 50, 50, 0, false, false);
  }
}