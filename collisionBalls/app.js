let balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    let ball = {
      x: random(width),
      y: random(height),
      r: random(20, 40),
      vx: random(-5, 5),
      vy: random(-5, 5)
    };
    balls.push(ball);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < balls.length; i++) {
    let ball1 = balls[i];
    circle(ball1.x, ball1.y, ball1.r*2);
    ball1.x += ball1.vx;
    ball1.y += ball1.vy;
    if (ball1.x < ball1.r || ball1.x > width - ball1.r) {
      ball1.vx = -ball1.vx;
    }
    if (ball1.y < ball1.r || ball1.y > height - ball1.r) {
      ball1.vy = -ball1.vy;
    }
    
    for (let j = i+1; j < balls.length; j++) {
      let ball2 = balls[j];
      let dx = ball2.x - ball1.x;
      let dy = ball2.y - ball1.y;
      let dist = sqrt(dx*dx + dy*dy);
      let minDist = ball1.r + ball2.r;
      if (dist < minDist) {
        let angle = atan2(dy, dx);
        let sinAngle = sin(angle);
        let cosAngle = cos(angle);
        let vx1 = ball1.vx * cosAngle + ball1.vy * sinAngle;
        let vy1 = ball1.vy * cosAngle - ball1.vx * sinAngle;
        let vx2 = ball2.vx * cosAngle + ball2.vy * sinAngle;
        let vy2 = ball2.vy * cosAngle - ball2.vx * sinAngle;
        let v1x = ((ball1.r - ball2.r) * vx1 + 2 * ball2.r * vx2) / (ball1.r + ball2.r);
        let v2x = ((ball2.r - ball1.r) * vx2 + 2 * ball1.r * vx1) / (ball1.r + ball2.r);
        ball1.vx = v1x * cosAngle - vy1 * sinAngle;
        ball1.vy = vy1 * cosAngle + v1x * sinAngle;
        ball2.vx = v2x * cosAngle - vy2 * sinAngle;
        ball2.vy = vy2 * cosAngle + v2x * sinAngle;
        ball1.x += ball1.vx;
        ball1.y += ball1.vy;
        ball2.x += ball2.vx;
        ball2.y += ball2.vy;
      }
    }
  }
}

function mouseClicked() {
  let ball = {
    x: mouseX,
    y: mouseY,
    r: random(20, 40),
    vx: random(-5, 5),
    vy: random(-5, 5)
  };
  balls.push(ball);
}
