let angle; // Declare a variable to store the angle for the branches

function setup() {
  createCanvas(400, 400); // Create a canvas with a width and height of 400 pixels
  angle = PI / 4; // Set the angle for the branches
  strokeWeight(2); // Set the stroke weight for the lines
}

function draw() {
  background(0); // Set the background color to black
  translate(width / 2, height); // Move the origin point to the center of the canvas
  branch(100); // Call the branch() function with a starting length of 100 pixels
}

function branch(len) {
  stroke(255, 153, 255); // Set the color of the stroke to pink
  line(0, 0, 0, -len); // Draw a line from the current position to (0, -len)
  translate(0, -len); // Move the origin point to the end of the line that was just drawn
  if (len > 4) { // If the length is greater than 4 pixels
    push(); // Save the current transformation state
    rotate(map(mouseX,0,width,-PI/4,PI/4)); // Rotate the canvas based on the x-coordinate of the mouse
    branch(len * 0.67); // Recursively call the branch() function with a length that is 67% of the current length
    pop(); // Restore the previous transformation state
    push(); // Save the current transformation state
    rotate(map(mouseY,0,height,-PI/4,PI/4)); // Rotate the canvas based on the y-coordinate of the mouse
    branch(len * 0.67); // Recursively call the branch() function with a length that is 67% of the current length
    pop(); // Restore the previous transformation state
  }
}
