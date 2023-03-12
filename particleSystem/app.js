let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // Add a new particle to the system on mouse press
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }

  // Update and display all particles in the system
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.color = color(random(200, 255), random(200, 255), 0);
    this.size = random(10, 20);
  }

  update() {
    // Move the particle towards the mouse pointer
    let target = createVector(mouseX, mouseY);
    let direction = target.sub(this.position);
    direction.normalize();
    direction.mult(0.5);
    this.acceleration = direction;

    // Update velocity and position
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    // Apply some friction to slow down the particle
    this.velocity.mult(1);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}
