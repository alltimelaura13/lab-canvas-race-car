function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.car = new car(this.canvas, "images/car.png");

  // this.bars = [];
  //
  // setInterval(this.addBar.bind(this), 1000);
}
//
// Game.prototype.isReady = function() {
//   return this.car.isReady();
// }
//
// Game.prototype.addBar = function() {
//   this.bars.push(new Bar(this.canvas, 10, 100));
// }
//
// Game.prototype.clear = function() {
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// }
//
//
//
// Game.prototype.draw = function() {
//   if (this.isReady()) {
//     this.clear();
//     this.drawBg();
//     this.car.draw();
//   }
//   window.requestAnimationFrame(this.draw.bind(this));
// }
//
// var game = new Game("canvas");
// game.draw();
