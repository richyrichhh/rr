export default class startMenu {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.renderInt;
    this.ctx.font = '25px proxima-nova'

  }

  render() {
    console.log('rendering startmenu');
    // this.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.ctx.fillStyle = "black";
    let bg = new Image();
    bg.onload = () =>  {
      this.ctx.drawImage(bg, 0, 0);
      this.ctx.drawImage(img, this.game.canvas.width / 2 - 100, this.game.canvas.height / 2 - 200);
      this.ctx.fillText(`The referees have all gone blind and are on a rampage!`, this.game.canvas.width / 2 - 240, this.game.canvas.height / 2 + 50, 500);
      this.ctx.fillText(`Now it's up to Charles Barkley to help them see again.`, this.game.canvas.width / 2 - 240, this.game.canvas.height / 2 + 80, 500);
      this.ctx.fillText(`Controls:`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 130, 500);
      this.ctx.fillText(`↑↓←→ Movement`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 155, 500);
      this.ctx.fillText(`A    Attack`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 180, 500);
      this.ctx.fillText(`Press any key to start`, this.game.canvas.width / 2 + 100, this.game.canvas.height / 2 + 155, 500);
    }
    bg.src = 'https://i.ytimg.com/vi/QggJzZdIYPI/maxresdefault.jpg';
    // this.ctx.drawImage(bg, 0, 0);
    let img = new Image();
    img.src = '../src/game/animations/logo.png';
    // this.ctx.drawImage(img, this.game.canvas.width / 2 - 100, this.game.canvas.height / 2 - 200);
    this.ctx.color = 'black';

  }

  start() {
    // this.render();
    this.renderInt = setInterval(() => this.render(), 1000);
  }
}