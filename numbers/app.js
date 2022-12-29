function setup() {
  createCanvas(400, 400);
  background(240);
  noStroke();
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  let num = floor(random(10)); // Generate a random number between 0 and 9
  let colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }

  switch (num) {
    case 0:
      draw0(colors);
      break;
    case 1:
      draw1(colors);
      break;
    case 2:
      draw2(colors);
      break;
    case 3:
      draw3(colors);
      break;
    case 4:
      draw4(colors);
      break;
    case 5:
      draw5(colors);
      break;
    case 6:
      draw6(colors);
      break;
    case 7:
      draw7(colors);
      break;
    case 8:
      draw8(colors);
      break;
    case 9:
      draw9(colors);
      break;
  }
}

function draw0(colors) {
  fill(colors[0]);
  ellipse(200, 200, 200, 200);
  fill(colors[1]);
  rect(150, 100, 100, 200);
  fill(colors[2]);
  rect(250, 100, 100, 200);
}

function draw1(colors) {
  fill(colors[0]);
  rect(200, 100, 50, 300);
  fill(colors[1]);
  triangle(150, 300, 250, 300, 200, 100);
  fill(colors[2]);
  ellipse(200, 200, 100, 100);
}

// ... define the other functions for the other numbers
function draw2(colors) {
  fill(colors[0]);
  arc(200, 100, 200, 200, 0, PI);
  fill(colors[1]);
  arc(200, 300, 200, 200, PI, TWO_PI);
  fill(colors[2]);
  ellipse(200, 200, 100, 100);
}

function draw3(colors) {
  fill(colors[0]);
  arc(200, 100, 200, 200, 0, PI);
  fill(colors[1]);
  arc(200, 300, 200, 200, PI, TWO_PI);
  fill(colors[2]);
  arc(200, 200, 200, 200, 0, TWO_PI);
}

function draw4(colors) {
  fill(colors[0]);
  rect(150, 100, 100, 300);
  fill(colors[1]);
  triangle(250, 100, 250, 300, 350, 200);
  fill(colors[2]);
  ellipse(200, 200, 100, 100);
}

function draw5(colors) {
  fill(colors[0]);
  rect(250, 100, 100, 300);
  fill(colors[1]);
  triangle(150, 100, 150, 300, 250, 300);
  fill(colors[2]);
  arc(200, 200, 200, 200, 0, TWO_PI);
}

function draw6(colors) {
  fill(colors[0]);
  rect(150, 100, 200, 300);
  fill(colors[1]);
  triangle(250, 100, 250, 300, 350, 300);
  fill(colors[2]);
  arc(200, 200, 200, 200, 0, TWO_PI);
}

function draw7(colors) {
  fill(colors[0]);
  rect(250, 100, 100, 300);
  fill(colors[1]);
  triangle(150, 300, 250, 100, 350, 300);
  fill(colors[2]);
  ellipse(200, 200, 100, 100);
}

function draw8(colors) {
  fill(colors[0]);
  rect(150, 100, 100, 300);
  fill(colors[1]);
  rect(250, 100, 100, 300);
  fill(colors[2]);
  arc(200, 200, 200, 200, 0, TWO_PI);
}

function draw9(colors) {
  fill(colors[0]);
  rect(150, 100, 100, 300);
  fill(colors[1]);
  rect(250, 100, 100, 300);
  fill(colors[2]);
  triangle(150, 100, 250, 100, 200, 300);
}
