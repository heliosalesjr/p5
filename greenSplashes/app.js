function setup() {
  createCanvas(800, 800);
	noLoop();
}

function draw() {
  background(150);

  // Set minimum and maximum size for parent circles
  const parentMinSize = 150;
  const parentMaxSize = 300;

  // Set distance between parent and child circles and between child and grandchild circles
  const childDistance = 50;
  const grandchildDistance = 30;

  // Draw 3 parent circles
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let sized = random(parentMinSize, parentMaxSize);
    let greenShade = color(random(0,150), random(100, 255), random(50,100));
    
    // Draw parent circle
    fill(greenShade);
    noStroke();
    ellipse(x, y, sized);
    
    // Draw child circles
    let childSize = sized / 5;
    fill(greenShade);
    for (let j = 0; j < 10; j++) {
      let angle = TWO_PI / 10 * j;
      let cx = x + cos(angle) * (sized / 2 + childDistance);
      let cy = y + sin(angle) * (sized / 2 + childDistance);
      ellipse(cx, cy, childSize);
      
      // Draw grandchild circles
      let grandchildSize = childSize / 5;
      fill(greenShade);
      for (let k = 0; k < 3; k++) {
        let gangle = TWO_PI / 3 * k;
        let gx = cx + cos(gangle) * (childSize / 2 + grandchildDistance);
        let gy = cy + sin(gangle) * (childSize / 2 + grandchildDistance);
        ellipse(gx, gy, grandchildSize);
      }
    }
  }
}