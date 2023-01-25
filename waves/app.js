let xspacing = 16;    // How far apart should each horizontal location be spaced
let w;                // Width of entire wave
let theta = 0.0;      // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0;   // How many pixels before the wave repeats
let dx;               // Value for incrementing x
let yvalues;  // Using an array to store height values for the wave

let xspacing2 = 8;    // How far apart should each horizontal location be spaced
let theta2 = 0.0;      // Start angle at 0
let amplitude2 = 50.0; // Height of wave
let period2 = 250.0;   // How many pixels before the wave repeats
let dx2;               // Value for incrementing x
let yvalues2;  // Using an array to store height values for the wave

let xspacing3 = 20;    // How far apart should each horizontal location be spaced
let theta3 = 240;      // Start angle at 0
let amplitude3 = 100.0; // Height of wave
let period3 = 125.0;   // How many pixels before the wave repeats
let dx3;               // Value for incrementing x
let yvalues3;  // Using an array to store height values for the wave

let wave1Color;
let wave2Color;
let wave3Color;


function setup() {
  createCanvas(710, 400);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  dx2 = (TWO_PI / period2) * xspacing2;
  dx3 = (TWO_PI / period3) * xspacing3;
  yvalues = new Array(floor(w/xspacing));
  yvalues2 = new Array(floor(w/xspacing2));
  yvalues3 = new Array(floor(w/xspacing3));
  wave1Color = [random(255), random(255), random(255)];
  wave2Color = [random(255), random(255), random(255)];
  wave3Color = [random(255), random(255), random(255)];
  bgColor = [random(255), random(255), random(255)];
}

function draw() {
  background(bgColor);
  theta = (frameCount / period) * TWO_PI;
  calcWave();
  renderWave();
  theta2 = (frameCount / period2) * TWO_PI;
  calcWave2();
  renderWave2();
  theta3 = (frameCount / period3) * TWO_PI;
  calcWave3();
  renderWave3();
}

function calcWave() {
  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function calcWave2() {
  // For every x value, calculate a y value with sine function
  let x = theta2;
  for (let i = 0; i < yvalues2.length; i++) {
    yvalues2[i] = sin(x)*amplitude2;
    x+=dx2;
  }
}

function calcWave3() {
    // For every x value, calculate a y value with sine function
    let x = theta3;
        for (let i = 0; i < yvalues3.length; i++) {
      yvalues3[i] = sin(x)*amplitude3;
      x+=dx3;
    }
}

function renderWave() {
    noStroke();
    
    fill(wave1Color);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x*xspacing, height/2+yvalues[x], 8, 8);
    }
  }
  
  function renderWave2() {
    noStroke();
    fill(wave2Color);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues2.length; x++) {
      ellipse(x*xspacing2, height/2+yvalues2[x], 8, 8);
    }
}

  
function renderWave3() {
    noStroke();
    fill(wave3Color);
    // A simple way to draw the wave with an ellipse at each location
        for (let x = 0; x < yvalues3.length; x++) {
      ellipse(x*xspacing3, height/2+yvalues3[x], 8, 8);
    }
}
  
