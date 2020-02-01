export default class startMenu {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.render();
  }

  render() {
    let img = new Image();
    img.src = '../src/game/animations/logo.png';
    this.ctx.drawImage(img, this.game.canvas.width / 2, this.game.canvas.height / 2 + 100);
    this.ctx.fillText(`The referees have all gone blind and are on a rampage! Now it's up to Charles Barkley to help them see again.`, this.game.canvas.width / 2, this.game.canvas.height / 2 - 100, 500);
  }
}