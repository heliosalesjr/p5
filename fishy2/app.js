function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  background(240);

  // Use a loop to draw multiple fish
  for (let i = 0; i < 10; i++) {
    // Generate a random color for the fish
    fill(random(255), random(255), random(255));

    // Draw the body of the fish
    ellipse(random(width), random(height), 150, 75);

    // Draw the tail of the fish
    push();
    translate(random(width), random(height));
    rotate(PI / 4);
    triangle(-70, 0, -60, -20, -50, 0);
    pop();

    // Draw the fins of the fish
    triangle(random(width - 50) + 25, random(height - 20) + 10, random(width - 50) + 35, random(height - 20), random(width - 50) + 45, random(height - 20) + 10);
    triangle(random(width - 50), random(height - 20) + 10, random(width - 50) + 10, random(height - 20), random(width - 50) + 20, random(height - 20) + 10);

    // Draw the eyes of the fish
    fill(255);
    ellipse(random(width - 30) + 15, random(height - 30) + 15, 20, 20);
    ellipse(random(width - 30) + 15, random(height - 30) + 15, 20, 20);

    // Draw the pupils of the eyes
    fill(0);
    ellipse(random(width - 30) + 15, random(height - 30) + 15, 10, 10);
    ellipse(random(width - 30) + 15, random(height - 30) + 15, 10, 10);
  }
}
