let targets = 50;
let currentTarget = 0;
let currentCircle = 0;

let positions = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  for (let i = 0; i < targets; i++) {
    positions.push([random(width), random(height)]);
  }
}

function draw() {
  for (let i = 0; i < targets; i++) {
    if (i === currentTarget) {
      let x = positions[i][0];
      let y = positions[i][1];
      for (let j = 0; j <= currentCircle; j++) {
        let size = (j + 1) * 20;
        fill(random(256), random(256), random(256));
        ellipse(x, y, size, size);
      }
    } else {
      let x = positions[i][0];
      let y = positions[i][1];
      fill(random(256), random(256), random(256));
      ellipse(x, y, (currentCircle + 1) * 20, (currentCircle + 1) * 20);
    }
  }
  if (frameCount % 20 === 0) {
    currentCircle++;
    if (currentCircle === 5) {
      currentCircle = 0;
      currentTarget++;
    }
    for (let i = 0; i < targets; i++) {
      let x = positions[i][0];
      let y = positions[i][1];
      let randomX = random(-10, 10);
      let randomY = random(-10, 10);
      positions[i] = [x + randomX, y + randomY];
    }
  }
  if (currentTarget === targets) {
    noLoop();
  }
}
