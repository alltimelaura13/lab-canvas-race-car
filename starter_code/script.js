window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };



//coche:


  function startGame() {

    var canvas = new Canvas("canvas");
    canvas.draw();

  }
};


function Canvas(id) {
  var canvas = document.getElementById('canvas');
  canvas.width = 500;
  canvas.height = 650;
  this.ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = "images/car.png";

  img.onload = (function() {
    this.ctx.drawImage(img, 225, 540, 50, 100);
  }).bind(this);

}

//carretera:

Canvas.prototype.drawRect = function(x, y, width, height, color) {
  this.ctx.beginPath();
  this.ctx.rect(x, y, width, height);
  this.ctx.fillStyle = color;
  this.ctx.fill();
  this.ctx.closePath();
}

Canvas.prototype.drawSquare = function(x, y, width) {
  this.drawRect(x, y, width, width);
}



Canvas.prototype.draw = function() {
  this.drawRect(0, 10, 500, 1000, "rgb(0, 153, 0)");
  this.ctx.save();
  this.drawRect(30, 10, 440, 800, "rgb(140, 140, 140)");
  this.ctx.save();
  this.drawRect(40, 10, 420, 800, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(45, 10, 410, 800, "rgb(140, 140, 140)");
  this.ctx.save();
  this.drawRect(245, 50, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(245, 150, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(245, 250, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(245, 350, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(245, 450, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(245, 550, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(245, 650, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();
  this.drawRect(245, 750, 10, 40, "rgb(255, 255, 255)");
  this.ctx.save();

}
