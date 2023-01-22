let shapes = [];
let minDistance = 50; // Minimum distance between shapes

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 50; i++) {
    // randomly decide if we're going to add a pentagon or an octagon
    let r = random();
    if (r < 0.5) {
      let p = new Pentagon(random(width), random(height));
      // check if the new shape is too close to any other shape already in the array
      if (validPlacement(p)) {
        shapes.push(p);
      } else {
        i--; // if it's too close, decrement i so we don't skip an iteration
      }
    } else {
      let o = new Octagon(random(width), random(height));
      if (validPlacement(o)) {
        shapes.push(o);
      } else {
        i--;
      }
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
  }
}

class Octagon {
  constructor(x, y) {
    this.x = x; // x-coordinate of the center of the octagon
    this.y = y; // y-coordinate of the center of the octagon
    this.size = random(25, 75); // random size of the octagon between 25 and 75
    this.color = color(random(255), random(255), random(255)); // random color of the octagon
  }
  display() {
    push();
    translate(this.x, this.y); // move the coordinate system to the center of the octagon
    fill(this.color); // set the fill color
    stroke(0); // set the stroke color
    strokeWeight(2); // set the stroke weight
    beginShape();
    for (let i = 0; i < 8; i++) {
      // use trigonometry to calculate the vertices of the octagon
      vertex(this.size * cos(i * TWO_PI / 8), this.size * sin(i * TWO_PI / 8));
    }
    endShape(CLOSE);
    pop();
  }
}

class Pentagon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(25, 75);
    this.color = color(random(255), random(255), random(255));
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < 5; i++) {
      vertex(this.size * cos(i * TWO_PI / 5), this.size * sin(i * TWO_PI / 5));
    }
    endShape(CLOSE);
    pop();
  }
}

function validPlacement(shape) {
  for (let i = 0; i < shapes.length; i++) {
    let d = dist(shape.x, shape.y, shapes[i].x, shapes[i].y);
    if (d < (shape.size + shapes[i].size) / 2 + minDistance) {
      return false;
    }
  }
  return true;
}
