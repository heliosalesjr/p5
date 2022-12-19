let shapeSize = 50; // initial size of each shape
let numColumns = 10; // number of columns
let numRows = 10; // number of rows
let shapeTypes = ['rect', 'ellipse', 'triangle']; // types of shapes to draw

let shapes = []; // array to store shape objects

function setup() {
  createCanvas(500, 500);
  noStroke(); // disable outline for shapes
  
  // create shape objects and add them to the array
  for (let i = 0; i < numColumns; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = i * shapeSize + shapeSize / 2;
      let y = j * shapeSize + shapeSize / 2;
      let c = color(random(255), random(255), random(255));
      let shapeType = random(shapeTypes);
      let s = new Shape(x, y, shapeSize, c, shapeType);
      shapes.push(s);
    }
  }

  for (let i = 0; i < shapes.length; i++) {
    if (random(1) < 0.2) {
      shapes[i].rotate = true;
    }
  }
  
  
}

function draw() {
  background(200); // set background color
  
  // draw and animate the shapes
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
    shapes[i].animate();
  }
}

// Shape class
class Shape {
    constructor(x, y, size, c, type) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.c = c;
      this.type = type;
      this.rotate = false; // flag to determine whether shape should rotate
      this.start = random(1000); // random starting point for animation
    }
    
    display() {
      // set color and draw shape
      fill(this.c);
      push(); // save current transformation matrix
      translate(this.x, this.y); // translate to shape's position
      if (this.rotate) {
        rotate(frameCount / 20); // rotate shape
      }
      if (this.type == 'rect') {
        rect(-this.size / 2, -this.size / 2, this.size, this.size);
      } else if (this.type == 'ellipse') {
        ellipse(0, 0, this.size, this.size);
      } else if (this.type == 'triangle') {
        triangle(0, -this.size / 2, -this.size / 2, this.size / 2, this.size / 2, this.size / 2);
      }
      pop(); // restore previous transformation matrix
    }
    
    animate() {
      // animate size of shape
      this.size = map(sin((frameCount + this.start) / 30), -1, 1, 50, 100);
    }
  }
  