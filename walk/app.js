let x, y;  // Declare variables for the x and y position of the circle
let frames = 0; // Declare variable to keep track of the number of frames that the circle has been moving in its current direction
let direction;  // Declare variable to store the current direction of the circle
let trail = [];  // Declare an array to store the previous positions of the circle

function setup() {
  createCanvas(400, 400);
  x = width/2;  // Set the starting x position of the circle to be in the middle of the canvas
  y = height/2; // Set the starting y position of the circle to be in the middle of the canvas
  direction = floor(random(0,4)); // Generate a random number between 0 and 4 to decide the starting direction of the circle
}

function draw() {
  background(51); // Clear the canvas with a gray background color
  
  if(frames > 10){
    direction = floor(random(0,4)); // Change the direction of the circle after 10 frames
    frames = 0;  // reset the frames counter
  }
  
  trail.push([x, y]); // Add the current position of the circle to the trail array
  if (trail.length > 100) { // If the trail array has more than 100 positions
    trail.shift();  // remove the oldest position
  }
  
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    fill(255, i);  // set the fill color with increasing transparency
    noStroke();
    ellipse(pos[0], pos[1], 24, 24); // Draw the circle at each of the positions in the trail array
  }
  
  if (direction === 0) {
    // move up
    y -= 5;
  } else if (direction === 1) {
    // move down
    y += 5;
  } else if (direction === 2) {
    // move right
    x += 5*sqrt(2);
  } else {
    // move left
    x -= 5*sqrt(2);
  }
  frames++; // increment the frame counter
  x = constrain(x, 0, width); // Constrain the x position of the circle to be within the canvas
  y = constrain(y, 0, height); // Constrain the y position of the circle to be within the canvas
  
  fill(255); // set the fill color of the circle
  noStroke();
  ellipse(x, y, 24, 24); // Draw the circle at the new x and y position
}