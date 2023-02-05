let particles = []; // array to store particles

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    fill(p.color);
    rect(p.x, p.y, p.size, p.size); // draw particle
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.1; // add gravity
    if (p.y > height) {
      p.y = height;
      p.vy *= -0.7; // bounce off the ground
    }
  }
  let p = {
    x: mouseX,
    y: mouseY,
    vx: random(-5, 5),
    vy: random(-5, 5),
    size: random(10, 30),
    color: color(random(255), random(255), random(255))
  };
  particles.push(p); // add a new particle every frame
}
