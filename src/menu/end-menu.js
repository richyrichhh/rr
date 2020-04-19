export default class EndMenu {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.ctx.font = '25px proxima nova';
  }

  render() {
    let img = new Image();
    img.src = '../src/game/animations/gameover.png';
    let bg = new Image();
    bg.onload = () => {
      this.ctx.drawImage(bg, 0, 0);
      this.ctx.drawImage(img, (this.game.canvas.width / 2) - (530/2), (this.game.canvas.height / 2) - (289/2));
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillText(`You put down ${this.game.kills} referee${this.game.kills > 1 ? 's' : ''}!`, this.game.canvas.width / 2 - 240, this.game.canvas.height / 2 + 50, 500);



    }
    
    bg.src = '../src/game/animations/black.png';
  }
}