let eyes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Generate a random number of jellyfish eyes between 10 and 20
  let numEyes = floor(random(10, 20));

  // Create an array of jellyfish eyes
  for (let i = 0; i < numEyes; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(50, 150);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let eye = new JellyfishEye(x, y, size, r, g, b);
    eyes.push(eye);
  }
}

function draw() {
  background(220);

  // Draw all of the jellyfish eyes
  for (let i = 0; i < eyes.length; i++) {
    eyes[i].display();
    eyes[i].update();
  }
}

// JellyfishEye class
class JellyfishEye {
  constructor(x, y, size, r, g, b) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
    this.ySpeed = random(-0.5, 0.5);
  }

  display() {
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
    fill(0);
    ellipse(this.x, this.y, this.size / 2, this.size / 2);
  }

  update() {
    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }
}
