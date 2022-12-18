function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(220);
  
    // Generate a random number of shapes
    let numShapes = random(5, 15);
  
    // Draw the shapes
    for (let i = 0; i < numShapes; i++) {
      push();
      translate(random(width), random(height));
      rotate(random(TWO_PI));
      scale(random(0.5, 2));
  
      // Choose a random Mayan color for the shape
      let r = random(150, 255);
      let g = random(50, 150);
      let b = random(50, 150);
      fill(r, g, b);
  
      // Draw a random geometric shape
      let shapeType = random(1, 4);
      if (shapeType < 1.33) {
        triangle(0, -50, 50, 50, -50, 50);
      } else if (shapeType < 2.66) {
        rect(-50, -50, 100, 100);
      } else {
        ellipse(0, 0, 100, 100);
      }
  
      // Draw a Mayan pattern onto the shape
      strokeWeight(2);
      let numLines = random(5, 15);
      for (let j = 0; j < numLines; j++) {
        let x1 = random(-50, 50);
        let y1 = random(-50, 50);
        let x2 = random(-50, 50);
        let y2 = random(-50, 50);
        line(x1, y1, x2, y2);
      }
  
      // Draw a Mayan symbol onto the shape
      strokeWeight(4);
      arc(0, 0, 50, 50, 0, TWO_PI);
      pop();
    }
  }
    