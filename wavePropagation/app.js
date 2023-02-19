let t = 0; // time variable
let xscl = 50; // horizontal scaling factor
let yscl = 50; // vertical scaling factor
let cols; // number of columns
let rows; // number of rows

function setup() {
  // Set up the canvas
  createCanvas(800, 800);
  
  // Calculate number of columns and rows
  cols = 10;
  rows = 10;
}

function draw() {
  // Set background color
  background(235);

  // Move the origin to the center of the canvas
  translate(width/4, height/4);

  // Loop over each grid cell
  for (let i = -1; i < cols; i++) {
    for (let j = -1; j < rows; j++) {
      // Calculate the x and y position of the current cell
      let x = width/2 - i * xscl;
      let y = height/2 - j * yscl;

      // Set the stroke color based on x and y
      stroke(x/width, 20, y/height);

      // Set the stroke weight based on the distance from the origin and time
      strokeWeight(sqrt(x*x + y*y) / 50 * (1 + sin(-sqrt(x*x + y*y) + PI*t)) + 5);

      // Draw a point at the current position
      point(x, y);
    }
  }

  // Increment time
  t += radians(1);
}