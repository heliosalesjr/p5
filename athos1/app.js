function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();
}

function draw() {
  background(220);
  
  // Set the size of the tiles
  let tileSize = 50;
  
  // Calculate the number of rows and columns based on the size of the tiles and the size of the canvas
  let numRows = Math.ceil(height / tileSize);
  let numCols = Math.ceil(width / tileSize);
  
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      // Use the translate() function to move the origin to the center of the tile
      translate(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
      
      // Generate a random color inspired by Athos Bulcão's palette
      fill(color(random(180, 220), random(80, 100), random(80, 100)));
      
      // Use the rect() function to draw a rectangle
      rect(-tileSize / 2, -tileSize / 2, tileSize, tileSize);
      
      // Use an if statement to determine if the ellipse should be drawn
      if ((x % 2 == 0 && y % 2 == 0) || (x % 2 == 1 && y % 2 == 1)) {
        // Use the ellipse() function to draw an ellipse
        ellipse(0, 0, tileSize * 0.8, tileSize * 0.8);
      }
      
      // Use the line() function to draw a line
      stroke(255);
      strokeWeight(2);
      line(-tileSize / 2, 0, tileSize / 2, 0);
      
      // Reset the transformation matrix
      resetMatrix();
    }
  }
}
