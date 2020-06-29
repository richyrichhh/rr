// import {gameStart} from '../index';

export default class startMenu {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.renderInt;
    this.ctx.font = '25px proxima-nova'

  }

  render() {
    // console.log('rendering startmenu');
    // this.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.ctx.fillStyle = "black";
    let img = new Image();
    img.src = '../src/game/animations/cb-logo.png';
    let bg = new Image();
    bg.onload = () =>  {
      this.ctx.drawImage(bg, 0, 0);
      this.ctx.drawImage(img, Math.floor((this.game.canvas.width / 2) - (485 / 2)), 50, 485, 237);
      this.ctx.fillText(`The refs are blind! They're trying to hand the Lakers another win!`, this.game.canvas.width / 2 - 280, this.game.canvas.height / 2 + 50, 600);
      this.ctx.fillText(`It's up to Charles Barkley to help them see the light.`, this.game.canvas.width / 2 - 240, this.game.canvas.height / 2 + 80, 500);
      this.ctx.fillText(`Controls:`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 130, 500);
      this.ctx.fillText(`Movement : ↑↓←→`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 155, 500);
      this.ctx.fillText(`Attack : A`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 180, 500);
      this.ctx.fillText(`Special : S`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 205, 500);
      this.ctx.fillText(`Toggle Pause : P`, this.game.canvas.width / 2 - 300, this.game.canvas.height / 2 + 230, 500);
      this.ctx.fillText(`* Shaq will show up to give the refs a hand at 20 kills, then every 30 kills after that.`, this.game.canvas.width / 2 - 385, this.game.canvas.height / 2 + 260, 1000);
      this.ctx.fillText(`Press any key to start`, this.game.canvas.width / 2 + 100, this.game.canvas.height / 2 + 155, 500);
      // document.addEventListener('keydown', gameStart);

    }
    bg.src = '../src/game/animations/white.jpg';
    // this.ctx.drawImage(bg, 0, 0);

    // this.ctx.drawImage(img, this.game.canvas.width / 2 - 100, this.game.canvas.height / 2 - 200);
    this.ctx.color = 'black';

  }

  start() {
    // this.render();
    this.renderInt = setInterval(() => this.render(), 1000);
  }
}