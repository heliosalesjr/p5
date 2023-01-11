let angle = 0;
let speed = 0.05;

function setup() {
  //create the canvas and set background color
  createCanvas(400, 400);
  background(0);
}

function draw() {
 
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      // Calculate the distance of each point from the center of the canvas
      let distance = dist(x, y, width / 2, height / 2);
     
      //map the distance to an offset value between -2 and 2
      let offset = map(distance, 0, max(width, height) / 2, -2, 2);
     
      // Add the offset to the global angle
      let a = angle + offset;
     
      // Randomize the size of the shape and set the shape location
      let r = random(10, 30);
      let randomness = random(0.5, 1.5);
      let x2 = x + r * cos(a);
      let y2 = y + r * sin(a);
     
      //disable the stroke and give a random color between yellow and orange
      noStroke();
      let colorR = random(200,255);
      let colorG = random(100,200);
      fill(colorR,colorG,0);
     
      //draw the shape
      ellipse(x2, y2, r*randomness, r);
    }
  }
  //increment the angle
  angle += speed;
 
  //add more random circles to the canvas
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 30);
    noStroke();
    fill(255, random(150, 255), 0);
    ellipse(x, y, r, r);
  }
}