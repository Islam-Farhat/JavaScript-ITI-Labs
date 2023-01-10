// class Shape
// {
//       constructor(_dim1,_dim2)
//       {
//             this.dim1=_dim1;
//             this.dim2=_dim2;
//       }
//       calcArea()
//       {
//            return this.dim1*this.dim2
//       }

//       calcPremiter()
//       {
//             return this.dim1+this.dim2*2
//       }
//       toString()
//       {
//             return `dim1: ${this.dim1} dim2: ${this.dim2}  Area: ${this.calcArea()} Premiter: ${this.calcPremiter()}`
//       }

// }
// class Rectangle extends Shape
// {
//       static counterRect=0;
//       constructor(dim1,dim2)
//       {
//             super(dim1,dim2)
//            Rectangle.counterRect++;
//       }
// }

// class Square extends Shape
// {
//       constructor(dim1)
//       {
//             super(dim1,dim1)

//       }
//       toString()
//       {
//             return `dim: ${this.dim1}  Area: ${this.calcArea()} Premiter: ${this.calcPremiter()}`
//       }
// }
// class Circle extends Shape
// {
//       constructor(_radius)
//       {
//             super()
//             this.radius=_radius
//       }
//       calcArea()
//       {
//            return 3.14*this.radius*this.radius
//       }

//       calcPremiter()
//       {
//             return 2 * 3.14 * this.radius
//       }
//       toString()
//       {
//             return `radius: ${this.radius} Area: ${this.calcArea()} Premiter: ${this.calcPremiter()}`
//       }
// }     
// console.log("Rectangle")
// var rect=new Rectangle(2,3);
// var rect=new Rectangle(2,3);
// console.log(rect.toString())
// console.log(Rectangle.counterRect)

// console.log("Square")
// var square=new Square(10);
// console.log(square.toString())

// console.log("Circle")
// var circle=new Circle(10);
// console.log(circle.toString())


////////////////////////////////////////////////////////////////////////////////////////


function Shape(_dim1,_dim2)
{
      this.dim1=_dim1;
      this.dim2=_dim2;
      
}
Shape.prototype.calcArea=function()
{
      return this.dim1*this.dim2
}

Shape.prototype.calcPremiter=function()
{
      return (this.dim1+this.dim2)*2
}

Shape.prototype.toString = function()
{
      return `dim1: ${this.dim1} dim2: ${this.dim2}  Area: ${this.calcArea()} Premiter: ${this.calcPremiter()}`;
}

function Rectangle(_dim1,_dim2)
{
      Shape.call(this,_dim1,_dim2);
      //Count number of objects
      if (Rectangle.prototype.count)
            Rectangle.prototype.count = Rectangle.prototype.count + 1
      else
            Rectangle.prototype.count = 1
}
Rectangle.prototype = Object.create(Shape.prototype);
var rect=new Rectangle(2,4)
var rect=new Rectangle(2,4)
console.log(rect.toString())
console.log(rect.count)


function Square(_dim1)
{
      Shape.call(this,_dim1,_dim1)
}
Square.prototype = Object.create(Shape.prototype);
var square=new Square(4)
console.log(square.toString());


function Circle(_radius)
{
      Shape.call(this)
      this.radius=_radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.calcArea=function()
{
      return 3.14*this.radius*this.radius
}

Circle.prototype.calcPremiter=function()
{
      return 2 * 3.14 * this.radius
}
Circle.prototype.toString = function()
{
      return `Radius: ${this.radius}  Area: ${this.calcArea()} Premiter: ${this.calcPremiter()}`;
}
var circle=new Circle(4)
console.log(circle.toString());








