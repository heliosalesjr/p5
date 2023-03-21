let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0.05);
    this.color = color(random(255), random(255), 0);
    this.size = random(5, 15);
    this.alpha = 255;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.alpha -= 2;
  }

  display() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}
