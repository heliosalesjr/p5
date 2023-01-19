var snowflakes = []; // array to hold all the snowflake objects

function setup() {
  createCanvas(windowWidth, windowHeight); // create a canvas that fills the entire browser window
  for (var i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake()); // create new snowflake objects and add them to the array
  }
}

function draw() {
  background(0); // set the background color to black
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update(); // update the position of the snowflake
    snowflakes[i].display(); // display the snowflake
  }
}

function Snowflake() {
  this.posX = random(0, width); // set a random x position for the snowflake
  this.posY = random(0, -height); // set a random y position for the snowflake (off the top of the screen)
  this.size = random(2, 5); // set a random size for the snowflake
  this.speed = random(1, 3); // set a random speed for the snowflake

  this.update = function() {
    this.posY += this.speed; // update the y position of the snowflake based on its speed
    if (this.posY > height) { // if the snowflake goes off the bottom of the screen
      this.posY = random(0, -height); // reset its y position to a random position off the top of the screen
      this.posX = random(0, width); // reset its x position to a random position
    }
  }

  this.display = function() {
    stroke(255); // set the stroke color to white
    if(Math.random() < 0.15){  // with 15% probability
      var flicker = random(-0.15, 0.15); // set a random flicker value between -0.15 and 0.15
      strokeWeight(this.size + flicker); // add the flicker value to the strokeWeight
    }else{
      strokeWeight(this.size); // set the strokeWeight to the original size
    }
    point(this.posX, this.posY); // draw the snowflake
  }
}