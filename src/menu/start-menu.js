export default class startMenu {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  render() {
    let img = new Image();
    img.src = '../src/game/animations/logo.png';
    this.ctx.drawImage(img, this.game.canvas.dimensions.width / 2, this.game.canvas.dimensions.height / 2 + 100);

  }
}