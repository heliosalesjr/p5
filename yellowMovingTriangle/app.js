let points = []; // an array to store the position of each point
let angle = []; // an array to store the angle of each point
let a = []; // an array to store the horizontal radius of each point's movement
let b = []; // an array to store the vertical radius of each point's movement

// The setup function is called once when the program starts
function setup() {
  createCanvas(400, 400); // creates a canvas with the specified width and height

  // loop to initialize the arrays with random values
  for (let i = 0; i < 5; i++) {
    points[i] = createVector(0, 0); // creates a 2D vector object to store the position of each point
    angle[i] = random(TWO_PI); // generates a random angle in radians
    a[i] = random(100, 200); // generates a random horizontal radius
    b[i] = random(50, 150); // generates a random vertical radius
  }
}

// The draw function is called repeatedly to create animation
function draw() {
  background(255); // sets the background color to white

  // loop to update the position of each point
  for (let i = 0; i < 5; i++) {
    angle[i] += random(-0.1, 0.1); // adds a random offset to the angle
    points[i].x = width / 2 + cos(angle[i]) * a[i]; // calculates the x-coordinate of the point
    points[i].y = height / 2 + sin(angle[i]) * b[i]; // calculates the y-coordinate of the point
  }

  fill(255, 255, 0,70); // sets the fill color to yellow
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y); // creates a yellow triangle using the first 3 points

  fill(0, 0, 255,70); // sets the fill color to blue
  triangle(points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y); // creates a blue triangle using the 2nd, 3rd, and 4th points

  fill(255, 0, 0,80); // sets the fill color to red
  triangle(points[2].x, points[2].y, points[3].x, points[3].y, points[4].x, points[4].y); // creates a red triangle using the 3rd, 4th, and 5th points

  fill(0, 250, 0,80); // sets the fill color to green
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[4].x, points[4].y); // creates a red triangle using the 3rd, 4th, and 5th points

  // loop to draw lines connecting each pair of points
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      line(points[i].x, points[i].y, points[j].x, points[j].y); // creates a line between two points
    }
  }
}