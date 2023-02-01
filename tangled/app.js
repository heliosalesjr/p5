// create an empty array to store the points
var points = []; 
let bg    ;


function setup() {
  createCanvas(400, 400);
  bg = color(random(150,200),random(180,220),random(200,255));
  for (var i = 0; i < 50; i++) {
    // create a new vector for each point with random x and y values within the canvas
    points[i] = createVector(random(width), random(height)); 
  }
}

function draw() {
    background(bg);
    for (var i = 0; i < points.length; i++) {
    // move x and y coordinates of each point randomly by a small amount
    points[i].x += random(-1, 1); 
    points[i].y += random(-1, 1); 
    // draw a small circle at the point's new location
    ellipse(points[i].x, points[i].y, 8, 8);
  }
  for (var i = 0; i < points.length - 1; i++) {
    // connect each point to the next point in the array with a line
    line(points[i].x, points[i].y, points[i+1].x, points[i+1].y); 
  }
  // connect the last point to the first point to complete the shape
  line(points[points.length-1].x, points[points.length-1].y, points[0].x, points[0].y); 
}