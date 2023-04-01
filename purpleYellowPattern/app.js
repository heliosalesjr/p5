function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  noLoop();
}

function draw() {
  background(220);
  
  const numCols = 10;
  const numRows = 10;
  const squareSize = width / numCols;
  
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      const x = i * squareSize;
      const y = j * squareSize;
      
      // random square color
      const hue = random(50, 70); // shades of yellow
      const saturation = random(50, 100); // random saturation
      const brightness = random(70, 100); // random brightness
      
      fill(hue, saturation, brightness);
      rect(x, y, squareSize, squareSize);
      
      // random circle color
      const circleHue = random(240, 300); // shades of purple
      const circleSaturation = random(50, 100); // random saturation
      const circleBrightness = random(70, 100); // random brightness
      
      // random half-circle position
      const centerX = random(x, x + squareSize);
      const centerY = random(y, y + squareSize);
      const halfCircleOrientation = random(['LEFT', 'RIGHT', 'TOP', 'BOTTOM']);
      const startAngle = {
        LEFT: PI,
        RIGHT: 0,
        TOP: HALF_PI,
        BOTTOM: -HALF_PI
      }[halfCircleOrientation];
      
      fill(circleHue, circleSaturation, circleBrightness);
      arc(centerX, centerY, squareSize, squareSize, startAngle, startAngle + PI);
    }
  }
}
