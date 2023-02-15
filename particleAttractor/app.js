let attractor;

// An array to store the particles
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create the attractor at the center of the screen
  attractor = new Attractor(width / 2, height / 2);
  
  // Create an array to store the particles
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let mass = random(1, 3);
    let particle = new Particle(x, y, mass);
    particles.push(particle);
  }
}

function draw() {
  background(220);
    // Update the attractor's position to the mouse position
  attractor.pos.x = mouseX;
  attractor.pos.y = mouseY;
  attractor.display();
  
  // Apply the attraction force to each particle and update its position
  for (let i = 0; i < particles.length; i++) {
    let force = attractor.calculateAttraction(particles[i]);
    particles[i].applyForce(force);
    particles[i].update();
    particles[i].display();
  }
}

// Define the Attractor class
class Attractor {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = 20;
    this.G = 1;
  }

  // Calculate the attraction force for a given particle
  calculateAttraction(p) {
    let force = p5.Vector.sub(this.pos, p.pos);
    let distance = force.mag();
    // Limit the distance to prevent extreme attraction forces
    distance = constrain(distance, 2, 15);
    force.normalize();
    let strength = (this.G * this.mass * p.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

  // Draw the attractor as a red circle
  display() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 2 * this.mass, 2 * this.mass);
  }
}

// Define the Particle class
class Particle {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
  }

  // Apply a force to the particle
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  // Update the position and velocity of the particle
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  // Draw the particle as a blue circle
  display() {
    noStroke();
    fill(0, 0, 255);
    ellipse(this.pos.x, this.pos.y, 2 * this.mass, 2 * this.mass);
  }
}
