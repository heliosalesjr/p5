let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Display particles
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

function mouseDragged() {
  // Create a new particle at the mouse position
  let newParticle = new Particle(mouseX, mouseY);
  particles.push(newParticle);
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
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}