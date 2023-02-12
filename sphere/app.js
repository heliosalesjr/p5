let ySpeed = 0;  // Vertical speed of the sphere
let xSpeed = 0;  // Horizontal speed of the sphere along the X-axis
let zSpeed = 0;  // Horizontal speed of the sphere along the Z-axis

let sphereX = 0; // X position of the sphere
let sphereY = 0; // Y position of the sphere
let sphereZ = 0; // Z position of the sphere

let gravity = 0.1; // Gravity affecting the sphere

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(200);  // Set the background color to light gray
  stroke(255);      // Set the stroke color to white
  noFill();         // Remove the fill from the sphere

  translate(sphereX, sphereY, sphereZ);  // Move the sphere to its current position
  sphere(50);       // Draw the sphere with a radius of 50

  ySpeed += gravity;    // Increase the vertical speed by the value of gravity
  sphereY += ySpeed;    // Increase the Y position of the sphere by its speed
  sphereX += xSpeed; // Increase the X position of the sphere by its speed
  sphereZ += zSpeed; // Increase the Z position of the sphere by its speed

  // Check if the sphere hits the floor
  if (sphereY > height - 400) {
    ySpeed *= -0.9;  // Reverse the vertical speed and reduce its magnitude
    sphereY = height - 400; // Keep the sphere from going through the floor
  }

  // Check if the sphere hits the right wall
  if (sphereX > width/2 - 25) {
    xSpeed *= -0.9;  // Reverse the horizontal speed along the X-axis and reduce its magnitude
    sphereX = width/2 - 25;  // Keep the sphere from going through the wall
  }

  // Check if the sphere hits the left wall
  if (sphereX < -width/2 + 25) {
    xSpeed *= -0.9;  // Reverse the horizontal speed along the X-axis and reduce its magnitude
    sphereX = -width/2 + 25;  // Keep the sphere from going through the wall
  }

  // Check if the sphere hits the back wall
  if (sphereZ > width/2 - 25) {
    zSpeed *= -0.9;  // Reverse the horizontal speed along the Z-axis and reduce its magnitude
    sphereZ = width/2 - 25;  // Keep the sphere from going through the wall
  }

  // Check if the sphere hits the front wall
  if (sphereZ < -width/2 + 25) {
    zSpeed *= -0.9;  // Reverse the horizontal speed along the Z-axis and reduce its magnitude
    sphereZ = -width/2 + 25;  // Keep the sphere from going through the wall
  }

  // Check if the up arrow key is being pressed
  if (keyIsDown(UP_ARROW)) {
    ySpeed = -5;  // Set the vertical speed to an upward value
  }

  // Check if the left arrow key is being pressed
  if (keyIsDown(LEFT_ARROW)) {
    xSpeed -= 0.5;  // Decrease the horizontal speed along the X-axis
  }

  // Check if the right arrow key is being pressed
  if (keyIsDown(RIGHT_ARROW)) {
    xSpeed += 0.5;  // Increase the horizontal speed along the X-axis
  }
}
