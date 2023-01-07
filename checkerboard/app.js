function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if ((i + j) % 2 === 0) {
        fill(random(255), random(255), random(255));
      } else {
        fill(random(255), random(255), random(255));
      }

      let x = i * 40;
      let y = j * 40;

      rect(x, y, 40, 40);

      fill(random(255), random(255), random(255));

      if (random(1) < 0.5) {
        circle(x + 20, y + 20, 20);
      } else {
        triangle(x + 10, y + 10, x + 30, y + 10, x + 20, y + 30);
      }
    }
  }
}
