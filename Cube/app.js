let cubes = [];

function setup() {
  createCanvas(400, 400, WEBGL);
  for (let i = 0; i < 5; i++) {
    // Generate cubes closer to the center of the canvas
    cubes[i] = new Cube(random(-width / 4, width / 4), random(-height / 4, height / 4), random(-100, 100), random(50, 150), random(-0.5, 0.5));
  }
}

function draw() {
  background(200);
  for (let i = 0; i < 5; i++) {
    cubes[i].display();
    cubes[i].update();
  }
}

class Cube {
  constructor(x, y, z, size, speed) {
    // Initialize the position, size, and floating speed of the cube
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.speed = speed;
  }

  display() {
    // Draw the cube
    translate(this.x, this.y, this.z);
    stroke(255);
    noFill();
    box(this.size);
  }

  update() {
    // Update the position of the cube
    this.z += this.speed;
    // Change direction if the cube reaches the edge of the floating range
    if (this.z > 100 || this.z < -100) {
      this.speed = -this.speed;
    }
  }
}

