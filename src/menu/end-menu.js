export default class EndMenu {
  constructor(game, ctx, win = false) {
    this.game = game;
    this.ctx = ctx;
    this.win = win;
    this.ctx.font = '25px proxima nova';
  }

  render() {
    let img = new Image();
    !this.win ? img.src = '../src/game/animations/trophy.png' : img.src = '../src/game/animations/gameover.png';
    let bg = new Image();
    if (!this.win) {
      bg.onload = () => {
        img.height = 200;
        img.width = 150;
        this.ctx.drawImage(bg, 0, 0);
        this.ctx.drawImage(img, (this.game.canvas.width / 2) - (300 / 2), (this.game.canvas.height / 2) - (400 / 2) - 50);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillText(`You put down ${this.game.kills} referee${this.game.kills !== 1 ? 's' : ''}, and beat up Shaq ${this.game.bossKills} time${this.game.bossKills !== 1 ? 's' : ''}!`, this.game.canvas.width / 2 - 270, this.game.canvas.height / 2, 1000);
        this.ctx.fillText(`Looks like Shaq was carried by Kobe after all.`, this.game.canvas.width / 2 - 270, (this.game.canvas.height / 2) + 50, 500);
        this.ctx.fillText(`Press a key to play again.`, this.game.canvas.width / 2 - 270, (this.game.canvas.height / 2) + 100, 500);

        setTimeout(() => document.addEventListener('keydown', () => location.reload()), 500);
      }
    } else {
      bg.onload = () => {
        this.ctx.drawImage(bg, 0, 0);
        this.ctx.drawImage(img, (this.game.canvas.width / 2) - (530/2), (this.game.canvas.height / 2) - (289/2) - 150);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillText(`You only put down ${this.game.kills} referee${this.game.kills !== 1 ? 's' : ''}, and beat up Shaq ${this.game.bossKills} time${this.game.bossKills !== 1 ? 's' : ''}!`, this.game.canvas.width / 2 - 270, this.game.canvas.height / 2, 1000);
        this.ctx.fillText(`That's why you don't have any rings, Chuck.`, this.game.canvas.width / 2 - 270, (this.game.canvas.height / 2) + 50, 500);
        this.ctx.fillText(`Press a key to play again.`, this.game.canvas.width / 2 - 270, (this.game.canvas.height / 2) + 100, 500);
  
        setTimeout(() => document.addEventListener('keydown', () => location.reload()), 500);
      }
    }
    
    bg.src = '../src/game/animations/black.png';
  }
}