var blocks = [];
var colors = ["hotpink","orange","yellow","red","purple","green","blue","black","white","gray"];

// create canvas and set background color randomly
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255),random(255),random(255));
  // create array of block objects
  for (var i = 0; i < 50; i++) {
    blocks[i] = new Block();
  }
}

// call the display and move function of each block object
function draw() {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].display();
    blocks[i].move();
  }
}

class Block {
  constructor() {
    // set size, position and eye position of block
    this.size = random(50, 150);
    this.x = random(this.size/2, width - this.size/2);
    this.y = random(this.size/2, height - this.size/2);
    this.eyeSize = this.size / 10;
    this.eyeX = this.x - this.size/4;
    this.eyeY = this.y - this.size/4;
    this.eyeXoffset = 0;
    this.eyeYoffset = 0;
    // set mood and color of block randomly
    this.mood = random() < 0.1 ? "sad" : "smiling";
    if (this.mood == "smiling") {
      this.color = random(colors);
    } else {
      this.color = random(["lightblue","lightgreen","lightgray"]);
    }
    // set random speed and direction for block to move
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
  }

  // display block on canvas
  display() {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    fill(255);
    ellipse(this.eyeX + this.eyeXoffset, this.eyeY + this.eyeYoffset, this.eyeSize, this.eyeSize);
    ellipse(this.eyeX + this.size/2 + this.eyeXoffset, this.eyeY + this.eyeYoffset, this.eyeSize, this.eyeSize);
    if (this.mood == "smiling") {
      arc(this.x, this.y + this.size/4, this.size/2, this.size/4, 0, PI);
    } else {
      arc(this.x, this.y + this.size/4, this.size/2, this.size/4, PI, TWO_PI);
    }
  }

  // move block and change direction when it reaches the edge of the canvas

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.eyeX = this.x - this.size/4;
    this.eyeY = this.y - this.size/4;
    if (this.x > width - this.size/2 || this.x < this.size/2) {
      this.xSpeed *= -1;
    }
    if (this.y > height - this.size/2 || this.y < this.size/2) {
      this.ySpeed *= -1;
    }
    var xdiff = mouseX - this.eyeX - this.size/4;
    var ydiff = mouseY - this.eyeY - this.size/4;
    var distance = sqrt((xdiff * xdiff) + (ydiff * ydiff));
    // update the position of the eyes so that they are always looking at the cursor
    this.eyeXoffset = xdiff / distance * this.size/8;
    this.eyeYoffset = ydiff / distance * this.size/8;
  }

}



