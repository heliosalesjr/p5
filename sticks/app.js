let lines = []; // Initialize an array to store the lines drawn

function setup() {
  createCanvas(windowWidth, windowHeight); // Set canvas dimensions to device screen size
}

function draw() {
  background(0); // Set background color to black on each frame
  strokeWeight(2); // Set the stroke weight to 2
  for (let i = 0; i < lines.length; i++) { // Loop through the lines array and draw each line
    let lineData = lines[i]; // Get the line data from the array
    stroke(lineData.color); // Set the stroke color to the line color
    line(lineData.x1, lineData.y1, lineData.x2, lineData.y2); // Draw the line
  }
}

function mouseClicked() {
  let lineData = { // Create an object to store the line data
    x1: width / 2, // Starting x-coordinate at center of the canvas
    y1: height / 2, // Starting y-coordinate at center of the canvas
    x2: mouseX, // Ending x-coordinate at the mouse position
    y2: mouseY, // Ending y-coordinate at the mouse position
    color: color(random(255), random(255), random(255)) // Random color for the line
  };
  lines.push(lineData); // Add the line data to the array
}
