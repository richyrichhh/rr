import Explosion from './explosion';
import { drawImage } from '../util';

export default class BigExplosion extends Explosion {
  constructor(game, pos) {
    super(game, [pos[0] - 100, pos[1] - 100]);
  }

  draw(ctx) {
    // this.handleMovement();
    var img = new Image();
    var pos = this.position;
    var lastDirLR = this.lastDirLR;
    // img.onload = function() {
    //   drawImage(ctx, img, pos[0], pos[1], 84, 75, 0, (lastDirLR === 'left' ? true : false), false);
    // }
    img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
    drawImage(ctx, img, pos[0], pos[1], 250, 250, 0, false, false);
  }
}