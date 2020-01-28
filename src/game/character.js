function drawImage(context, img, x, y, width, height, deg, flip, flop, center) {

  context.save();

  if (typeof width === "undefined") width = img.width;
  if (typeof height === "undefined") height = img.height;
  if (typeof center === "undefined") center = false;

  // Set rotation point to center of image, instead of top/left
  if (center) {
    x -= width / 2;
    y -= height / 2;
  }

  let flipScale;
  let flopScale;
  // Set the origin to the center of the image
  context.translate(x + width / 2, y + height / 2);
  // Rotate the canvas around the origin
  var rad = 2 * Math.PI - deg * Math.PI / 180;
  context.rotate(rad);
  // Flip/flop the canvas
  if (flip) flipScale = -1; else flipScale = 1;
  if (flop) flopScale = -1; else flopScale = 1;
  context.scale(flipScale, flopScale);
  // Draw the image    
  context.drawImage(img, -width / 2, -height / 2, width, height);
  context.restore();
}

export default class Character {
  constructor(game, pos = [0, 0]) {
    this.position = pos,
    this.maxHealth = 100,
    this.currentHealth = 100,
    this.game = game,
    this.upgrades = [];
    this.state = 'stand';
    this.lastDirLR = 'left';
    this.lastDirUD = 'up';
    this.frame = 0;
  }

  draw(ctx) {
    var img = new Image();
    var pos = this.position;
    var lastDirLR = this.lastDirLR;
    img.onload = function() {
      drawImage(ctx, img, pos[0], pos[1], 84, 75, 0, (lastDirLR === 'left' ? true : false), false);
    }
    console.dir(this.animations);
    img.src = this.animations[this.state].frameData[this.lastDirUD][this.frame];
  }

  move(dir) {
    this.state = 'move'
    if (dir === 'up') {
      if (this.position[1] - 20 < 0) {
        this.position[1] = 0
      } else this.position[1] -= 20;
      this.lastDirUD = 'up';
    }
    else if (dir === 'down') {
      if (this.position[1] + 20 > this.game.dimensions['height']) {
        this.position[1] = this.game.dimensions['height'];
      } else this.position[1] += 20;
      this.lastDirUD = 'down';
    }
    else if (dir === 'left') {
      if (this.position[0] - 20 < 0) {
        this.position[0] = 0
      } else this.position[0] -= 20;
      this.lastDirLR = 'left';
    }
    else if (dir === 'right') {
      if (this.position[0] + 20 > this.game.dimensions['width']) {
        this.position[0] = this.game.dimensions['width'];
      } else this.position[0] += 20;
      this.lastDirLR = 'right';
    }
    setTimeout(() => this.state = 'stand', 500);
    console.log(this.lastDir);
  }

  attack() {
    if (this.lastDirUD === 'up') {

    }
  }
}