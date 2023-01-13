var canvas;
var color1, color2, color3;
var x, y;
var a = 0;
var r = 0;

function setup() {
  canvas = createCanvas(400, 400);
  //create random colors for the spiral and background
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  color3 = color(random(255), random(255), random(255));
  //create random location for the center of the spiral
  x = width/2 + random(-width/4, width/4);
  y = height/2 + random(-height/4, height/4);
}

function draw() {
  //draw the background with a random color
  background(color3);
  strokeWeight(8);
  noFill();
  for (var i = 0; i < 600; i++) {
    //increment angle of the spiral using frameCount
    a = i / 50 - frameCount/50;
    r = i / 2;
    //create a gradient color for the spiral
    var c = lerpColor(color1, color2, i / 300);
    stroke(c);
    //draw the spiral
    arc(x, y, r, r, a, a + PI/100);
    //draw additional spirals 
    arc(x + 150, y + 150, r, r, a, a + PI/10);
    arc(x - 150, y - 150, r, r, a, a + PI/10);
    arc(x + 150, y - 150, r, r, a, a + PI/10);
    arc(x - 150, y + 150, r, r, a, a + PI/10);
  }
}
