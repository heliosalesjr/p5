let x, y; // coordinates of jellyfish
let bodySize, tentacleLength, tentacleAmplitude, tentacleFrequency, tentacleSpeed; // size of jellyfish

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  bodySize = 60;
  tentacleLength = 100;
  tentacleAmplitude = 10;
  tentacleFrequency = 0.01;
  tentacleSpeed = 0.07;
  noStroke();
  frameRate(30);
}

function draw() {
  background(0, 10);
  
  // draw jellyfish body
  fill(200, 100, 255, 200);
  ellipse(x, y, bodySize, bodySize*2);
  
  // draw jellyfish tentacles
  strokeWeight(4);
  stroke(200, 100, 255, 100);
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI * i / 8;
    let tx = x + sin(angle) * bodySize/2;
    let ty = y + cos(angle) * bodySize;
    let tx2 = tx + sin(frameCount * tentacleFrequency + i * 0.5) * tentacleAmplitude;
    let ty2 = ty + sin(frameCount * tentacleSpeed + i * 0.5) * tentacleLength;
    line(tx, ty, tx2, ty2);
  }
  
  // move jellyfish randomly
  x += random(-1, 1);
  y += random(-0.2, 0.2);
  
  // keep jellyfish on screen
  x = constrain(x, bodySize/2, width - bodySize/2);
  y = constrain(y, bodySize, height - bodySize);
}
