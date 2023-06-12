let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // Update and display particles
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

function mouseMoved() {
  // Create a new particle at the mouse position for the left half
  let particleLeft = new Particle(mouseX, mouseY);
  particles.push(particleLeft);
  
  // Create a mirrored particle at the mouse position for the right half
  let particleRight = new Particle(width - mouseX, mouseY);
  particles.push(particleRight);
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 30);
    this.color = color(random(255), random(255), random(255));
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.alpha = 255;
    this.fadeSpeed = random(1, 3);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.alpha -= this.fadeSpeed;
  }

  display() {
    noStroke();
    fill(this.color, this.alpha);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
