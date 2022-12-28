function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(6);
}

function draw() {
  background(220);
  
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      // Set the fill color to a random color
      fill(random(255), random(255), random(255));
      
      // Calculate the size and position of the splash
      let size = random(30, 50);
      let xPos = x * 40 + 20;
      let yPos = y * 40 + 20;
      
      // Calculate the progress of the animation (a value between 0 and 1)
      let progress = (frameCount % 100) / 100;
      
      // Use the progress value to calculate the size of the splash at this frame
      size = 10 + (80 - 10) * progress;
      
      // Use the arc() function to draw the splash
      arc(xPos, yPos, size, size, 0, PI + QUARTER_PI, CHORD);
    }
  }
}
