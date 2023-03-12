let bg;
let hourColor;
let minuteColor;
let secondColor;

function setup() {
  createCanvas(500, 500);
  bg = color(random(255), random(255), random(255));
  hourColor = color(random(255), random(255), random(255));
  minuteColor = color(random(255), random(255), random(255));
  secondColor = color(random(255), random(255), random(255));
}

function draw() {
  background(bg);

  // Set the origin of the canvas to the center
  translate(width/2, height/2);

  // Get the current time
  let hours = hour();
  let minutes = minute();
  let seconds = second();

  // Convert the time to radians
  let hourAngle = map(hours % 12, 0, 12, 0, 360) + map(minutes, 0, 60, 0, 30);
  let minuteAngle = map(minutes, 0, 60, 0, 360);
  let secondAngle = map(seconds, 0, 60, 0, 360);

  // Draw the clock hands
  drawHourHand(hourAngle, 80, 10, hourColor);
  drawMinuteHand(minuteAngle, 120, 6, minuteColor);
  drawSecondHand(secondAngle, 140, 2, secondColor);
}

function drawHourHand(angle, length, width, color) {
  push();
  rotate(radians(angle));
  stroke(color);
  strokeWeight(width);
  line(0, 0, 0, -length);
  pop();
}

function drawMinuteHand(angle, length, width, color) {
  push();
  rotate(radians(angle));
  stroke(color);
  strokeWeight(width);
  line(0, 0, 0, -length);
  pop();
}

function drawSecondHand(angle, length, width, color) {
  push();
  rotate(radians(angle));
  stroke(color);
  strokeWeight(width);
  line(0, 0, 0, -length);
  pop();
}
