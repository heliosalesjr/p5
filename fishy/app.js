let startY = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(300); // Set the frame rate to 30 frames per second
}

function draw() {
  background(250, 250, 210);
  
  for (let i = 0; i < 5; i++) {
    // Generate a random position for the fish
    let x = random(width);
    startY[i] = random(height);
    
    // Generate a random size for the fish
    let fishSize = random(50, 100);
    
    // Generate a random color for the fish
    let r = random(100, 255);
    let g = random(50, 150);
    let b = random(50, 150);
    fill(r, g, b);
    
    // Calculate the current y position of the fish based on the elapsed time
    let elapsedTime = frameCount / 30; // Calculate elapsed time in seconds
    let y = startY[i] - elapsedTime * height / 3; // Calculate the y position based on elapsed time
    
    // Draw the fish
    beginShape();
    vertex(x, y);
    vertex(x - fishSize/2, y - fishSize/2);
    vertex(x - fishSize, y);
    vertex(x - fishSize/2, y + fishSize/2);
    vertex(x, y);
    endShape(CLOSE);
    
    // Draw the eye
    fill(0);
    ellipse(x - fishSize/4, y - fishSize/10, fishSize/10, fishSize/10);
  }
}
