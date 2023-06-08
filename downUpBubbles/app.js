
let bubbles = [];
let floorLevel;
let usedPositions = [];

function setup() {
  createCanvas(400, 400);
  floorLevel = height - 50;
}

function draw() {
  background(220);

  // Display bubbles
  for (let bubble of bubbles) {
    bubble.update();
    bubble.display();
  }
}

function mousePressed() {
  let newBubble = new Bubble(mouseX, mouseY);
  bubbles.push(newBubble);
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(20, 50);
    this.ySpeed = random(1, 3);
    this.color = color(random(255), random(255), random(255));
    this.bounceCount = 0;
  }

  update() {
    this.y += this.ySpeed;
    
    // Check for floor collision
    if (this.y + this.radius >= floorLevel) {
      this.y = floorLevel - this.radius; // Set bubble at the floor level
      this.ySpeed *= -0.8; // Reverse and reduce y-speed
      this.bounceCount++;
    }
    
    // Check for bounce limit
    if (this.bounceCount >= 3) {
      this.ySpeed = 0; // Stop bubble from bouncing
    }
    
    // Check for overlapping bubbles
    if (this.ySpeed === 0) {
      let overlapping = true;
      while (overlapping) {
        let newX = this.x + random(-5, 5);
        let newY = this.y + random(-5, 5);
        overlapping = false;
        for (let usedPos of usedPositions) {
          let distance = dist(newX, newY, usedPos.x, usedPos.y);
          if (distance < this.radius + usedPos.radius) {
            overlapping = true;
            break;
          }
        }
        if (!overlapping) {
          this.x = newX;
          this.y = newY;
        }
      }
    }
    
    // Store bubble position
    usedPositions.push({ x: this.x, y: this.y, radius: this.radius });
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
