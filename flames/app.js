let flames = [];

function setup() {
  // Create the canvas and set its size
  createCanvas(400, 400);
  // Create an array of 100 Flame objects
  for (let i = 0; i < 100; i++) {
    flames[i] = new Flame();
  }
}

function draw() {
  // Set the background to black
  background(0);
  // Display and update each flame
  for (let flame of flames) {
    flame.display();
    flame.update();
  }
}

class Flame {
  constructor() {
    // Set random position, size, color, and speed for each flame
    this.x = random(width);
    this.y = random(height);
    this.size = random(10, 30);
    this.r = random(150,255);
    this.g = random(70);
    this.b = 0;
    this.speed = random(1, 4);
  }

  display() {
    // Draw the flame using multiple overlapping circles
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size);
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.size * 0.8);
    fill(255, 200, 0);
    ellipse(this.x, this.y, this.size * 0.6);
    fill(255, 150, 0);
    ellipse(this.x, this.y, this.size * 0.4);
    fill(255, 100, 0);
    ellipse(this.x, this.y, this.size * 0.2);
  }

  update() {
    // Move the flame upward and add a random horizontal movement
    this.y -= this.speed;
    this.x += random(-2, 2);
    // If the flame goes off the top of the canvas, move it back to the bottom
    if (this.y < 0) {
      this.y = height;
    }
  }
}