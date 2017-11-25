window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  function startGame() {
    var img = new image();
    img.src = "images/car.png";

    img.onload = function() {
      ctx.drawImage(img, 200, 200, 100, 100);
    }
    this.button.onclick = function() {

    }
  }
};


function Canvas(id) {
  var canvas = document.getElementById(id);
  canvas.width = 500;
  canvas.height = 800;
  this.ctx = canvas.getContext("2d");
}

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


var canvas = new Canvas("canvas");
canvas.draw();
