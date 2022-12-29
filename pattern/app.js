let worms;

function setup() {
  createCanvas(400, 400);
  worms = [];
  for (let i = 0; i < random(5, 15); i++) {
    worms.push(new Worm());
  }
}

function draw() {
  background(220);
  for (let worm of worms) {
    worm.update();
    worm.draw();
  }
}

class Worm {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.speedX = random(1, 5);
    this.speedY = random(1, 5);
    this.diameter = 50;
    this.eyeDiameter = 15;
    this.eyeColor = color(255, 255, 255);
    this.bodyColor = color(0, 200, 0);
    this.isSmiling = random(1) < 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw() {
    fill(this.bodyColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(this.eyeColor);
    ellipse(this.x - this.eyeDiameter, this.y - this.eyeDiameter, this.eyeDiameter, this.eyeDiameter);
    ellipse(this.x + this.eyeDiameter, this.y - this.eyeDiameter, this.eyeDiameter, this.eyeDiameter);
    if (this.isSmiling) {
      arc(this.x, this.y + this.eyeDiameter, this.diameter * 0.5, this.diameter * 0.5, 0, PI);
    } else {
      line(this.x - this.eyeDiameter, this.y + this.eyeDiameter, this.x + this.eyeDiameter, this.y + this.eyeDiameter);
    }
  }
}
