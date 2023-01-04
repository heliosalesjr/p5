function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI /3, 0.01);
}

function draw() {
  background(0);

  angle = slider.value();
  stroke(255);
  translate(200, height); // moves the beginning of the code here - before it was (0,0), now this is going to be the (0,0)
  
  branch(100);
}

function branch(len) {
  
  line(0,0,0,-len);
  translate(0, -len);
  
  if (len > 10) {

      push();
      rotate(angle);
      branch(len*0.67);
      pop();
      push();
      rotate(-angle);
      branch(len*0.67);
      pop();
  }
  
}

