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
  
      // Choose a random color for the shape
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
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
  
      // Draw a random number of skulls
      let numSkulls = int(random(3, 8));
      for (let k = 0; k < numSkulls; k++) {
        push();
        translate(random(-50, 50), random(-50, 50));
        rotate(random(TWO_PI));
        scale(random(0.5, 2));
        drawSkull();
        pop();
      }
  
      pop();
    }
  }
  
  function drawSkull() {
    // Draw the skull
    fill(0);
    stroke(255);
    strokeWeight(2);
    arc(0, -50, 100, 100, 0, PI);
    line(-50, -25, 50, -25);
    circle(-25, -75, 25);
    circle(25, -75, 25);
  
    // Draw the eyes
    fill(255);
    noStroke();
    circle(-25, -75, 10);
    circle(25, -75, 10);

    // Draw the teeth
    stroke(255);
    strokeWeight(1);
    line(-35, -25, -30, -30);
    line(-30, -30, -25, -25);
    line(30, -30, 35, -25);
    line(25, -25, 30, -30);
    }
