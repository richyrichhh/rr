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
      this.ctx.drawImage(img, (this.game.canvas.width / 2) - (530/2), (this.game.canvas.height / 2) - (289/2) - 150);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillText(`You only put down ${this.game.kills} referee${this.game.kills !== 1 ? 's' : ''}, and beat Shaq ${this.game.bosses} time${this.game.bosses !== 1 ? 's' : ''}!`, this.game.canvas.width / 2 - 270, this.game.canvas.height / 2, 1000);
      this.ctx.fillText(`That's why you don't have any rings, Chuck.`, this.game.canvas.width / 2 - 270, (this.game.canvas.height / 2) + 50, 500);
      this.ctx.fillText(`Press a key to play again.`, this.game.canvas.width / 2 - 270, (this.game.canvas.height / 2) + 100, 500);

      setTimeout(() => document.addEventListener('keydown', () => location.reload()), 500);



    }
    
    bg.src = '../src/game/animations/black.png';
  }
}