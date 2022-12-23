let raindrops = []; // array to store raindrop objects
let interval = 1000; // interval between raindrop creation (in milliseconds)
let lastTime = 0; // time of last raindrop creation

function setup() {
  createCanvas(400, 400); // create canvas element
  background(240); // set sky background color
}

function draw() {
  background(240); // set sky background color

  for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].update(); // update raindrop position
    raindrops[i].show(); // draw raindrop on canvas
  }

  let currentTime = millis(); // get current time in milliseconds
  if (currentTime - lastTime > interval) { // if enough time has passed since last raindrop creation
    raindrops.push(new Raindrop()); // create new raindrop
    lastTime = currentTime; // update time of last raindrop creation
  }
}

class Raindrop {
  constructor() {
    this.pos = createVector(random(width), random(-100, -10)); // random start position
    this.vel = createVector(0, random(5, 15)); // random velocity
    this.size = random(5, 15); // random size
    this.color = color(255, 0, 0); // red color
  }

  update() {
    this.pos.add(this.vel); // add velocity to position
    if (this.pos.y > height) { // if raindrop goes off screen
      this.pos.y = random(-100, -10); // reset to random start position
      this.pos.x = random(width);
    }
  }

  show() {
    let c = color(255, 0, 0); // red color
    let y = map(this.pos.y, 0, height, 0, 1); // map y position to range 0-1
    c = lerpColor(c, color(0, 0, 255), y); // interpolate between red and violet based on y position
    stroke(c); // set stroke color
    strokeWeight(this.size); // set stroke weight
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.size); // draw line to represent raindrop
  }
}

