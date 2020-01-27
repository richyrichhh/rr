function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.animate = function(ctx) {
  this.drawBackground(ctx);

};

GameView.prototype.drawBackground = function(canvas) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

GameView.prototype.start = function () {
  setInterval(() => { 
    this.game.step(this);
  }, 20);

};

module.exports = GameView;
