function Rectangle(_width, _hight) {
      this.width = _width || 0;
      this.height = _hight || 0;
      //Count number of objects
      if (Rectangle.prototype.count)
            Rectangle.prototype.count = Rectangle.prototype.count + 1
      else
            Rectangle.prototype.count = 1

}

Rectangle.prototype.clacArea = function () {
      return this.height * this.width
}
Rectangle.prototype.toString = function () {
      console.log("Area: " + this.height * this.width)
}
var rect = new Rectangle(10, 20);
var rect1 = new Rectangle(20, 22);
var rect2 = new Rectangle(30, 1);

rect.clacArea();
rect.toString();

console.log("Number of Objects: " + rect.count)

//////////////////////////////////////////////////////////////////////////////////////
//Encapsulation
function Square() {
      var dim = 30;
      var Area = {
            clacArea() {
                  return dim * dim;
            }
      };
      Object.defineProperty(Area, "dim", {
            get: function () {
                  return dim;
            },
            set: function (value) {
                  dim = value;
            },

      });

      return Area;
}
var d = new Square(10);
d.dim = 20;
console.log(d.dim);
console.log(d.clacArea());

