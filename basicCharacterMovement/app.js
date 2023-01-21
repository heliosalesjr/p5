let xpos, ypos; // x and y position of the circle
let xvel = 0; // x velocity of the circle
let yvel = 0; // y velocity of the circle
let gravity = 0.3; // gravity applied to the circle
let moveSpeed = 3; // speed at which the circle moves horizontally
let platforms = []; // array to store the platforms 

function setup() {
  createCanvas(400, 400); // create the canvas
  xpos = width/2; // set the initial x position of the circle to the center of the canvas
  ypos = height/2; // set the initial y position of the circle to the center of the canvas

  for (let i = 0; i < 3; i++) {
    // create 3 random platforms and add them to the platforms array
    platforms.push(new Platform(random(25, width - 25), random(height/2, height - 25), random(50, 150), 20));
  }
}

function draw() {
  background(255); // clear the canvas
  ellipse(xpos, ypos, 50, 50); // draw the circle

  yvel += gravity; // increase the y velocity based on gravity
  ypos += yvel; // update the y position based on the y velocity

  for (let i = 0; i < platforms.length; i++) {
    platforms[i].show(); // call the show function of each platform
    // check if the circle is colliding with the platform
    if (ypos > platforms[i].y - 25 && ypos < platforms[i].y + 25 && xpos > platforms[i].x && xpos < platforms[i].x + platforms[i].w) {
        if(yvel >= 0){ // if the circle is falling on the platform
          yvel = 0; // set the y velocity to 0
          ypos = platforms[i].y - 25; // set the y position just above the platform
        }else{
          yvel *= -0.8; // if the circle is jumping on the platform, make it bounce back
        }
    }
  }

  xpos += xvel;  // update the x position based on the x velocity
  if (xpos < 25 || xpos > width - 25) { // check if the circle hits the sides of the canvas
    xvel *= -1;
  }
  if (ypos > height) { //This if statement checks if the y position of the circle is greater than the height of the canvas. If it is, it means that the circle has fallen off the canvas, so the code sets the y position of the circle back to the center of the canvas.
    ypos = height/2;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) { // if the up arrow is pressed
    yvel = -6; // set the y velocity to -6, making the circle jump
  }
  if (keyCode === LEFT_ARROW) { // if the left arrow is pressed
    xvel = -moveSpeed; // set the x velocity to -moveSpeed, making the circle move left
  }
  if (keyCode === RIGHT_ARROW) { // if the right arrow is pressed
    xvel = moveSpeed; // set the x velocity to moveSpeed, making the circle move right
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) { // if the left or right arrow is released
    xvel = 0; // set the x velocity to 0, making the circle stop moving horizontally
  }
}

class Platform { // Platform class to represent the platforms
  constructor(x, y, w, h) {
    this.x = x; // x position of the platform
    this.y = y; // y position of the platform
    this.w = w; // width of the platform
    this.h = h; // height of the platform
  }

  show() { // function to draw the platform
    rect(this.x, this.y, this.w, this.h);
  }
}