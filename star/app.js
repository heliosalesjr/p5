let star;
let expanding = false;
let colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colorIndex = Math.floor(Math.random()*colors.length);
let transition = 20;
let frameCount = 0;

function setup() {
  createCanvas(400, 400);
  star = new Star(width/2, height/2, 30);
}

function draw() {
  background(200);
  star.show();
  if (expanding) {
    star.expand();
    frameCount++;
    if(frameCount % transition == 0) {
      star.changeColor();
    }
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, star.x, star.y) < star.r) {
    expanding = !expanding;
    frameCount = 0;
  }
}

class Star {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    fill(colors[colorIndex]);
    beginShape();
    for (let a = 0; a < TWO_PI; a += TWO_PI / 5) {
      let sx = this.x + cos(a) * this.r;
      let sy = this.y + sin(a) * this.r;
      vertex(sx, sy);
      sx = this.x + cos(a + PI / 5) * this.r / 2;
      sy = this.y + sin(a + PI / 5) * this.r / 2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  expand() {
    this.r += 2;
  }

  changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
  }
}