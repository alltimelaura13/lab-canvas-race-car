function Car() {

}

Car.prototype.draw = function() {
  var img = new Image();
  img.src = "images/car.png";

  img.onload = (function() {
    this.ctx.drawImage(img, 225, 530, 50, 100);
  }).bind(this);
}
