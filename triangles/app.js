function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function draw() {
  background(220);
  
  // Set the size of the triangles
  let triangleSize = 40;
  
  // Calculate the number of rows and columns based on the size of the triangles and the size of the canvas
  let numRows = Math.ceil(height / triangleSize);
  let numCols = Math.ceil(width / triangleSize);
  
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      // Generate a random number between 0 and 1
      let r = random();
      
      // If the random number is less than 0.5, skip drawing this triangle
      if (r < 0.5) {
        continue;
      }
      
      fill(random(255), random(255), random(255));
      triangle(x * triangleSize, y * triangleSize, x * triangleSize + triangleSize, y * triangleSize, x * triangleSize + triangleSize / 2, y * triangleSize + triangleSize / 2);
    }
  }
}
