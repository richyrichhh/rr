export default class startMenu {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.renderInt;
    this.ctx.font = '25px proxima-nova'

  }

  render() {
    console.log('rendering startmenu');
    this.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    let img = new Image();
    img.src = '../src/game/animations/logo.png';
    this.ctx.drawImage(img, this.game.canvas.width / 2 - 100, this.game.canvas.height / 2 - 200);
    this.ctx.color = 'black';
    this.ctx.fillText(`The referees have all gone blind and are on a rampage!`, this.game.canvas.width / 2 - 240, this.game.canvas.height / 2 + 50, 500);
    this.ctx.fillText(`Now it's up to Charles Barkley to help them see again.`, this.game.canvas.width / 2 - 240, this.game.canvas.height / 2 + 80, 500);
  }

  start() {
    // this.render();
    this.renderInt = setInterval(() => this.render(), 200);
  }
}