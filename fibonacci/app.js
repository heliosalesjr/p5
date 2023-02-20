let n = 0;
let radius = 5;

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
}

function draw() {
  // Calculate the next number in the Fibonacci sequence
  let f = fibonacci(n);

  // Calculate the angle for the current number
  let phi = n * 137.5;

  // Calculate the coordinates for the current number
  let x = f * cos(phi);
  let y = f * sin(phi);

  // Set a random fill color for the ellipse
  fill(random(255), random(255), random(255));

  // Set a random radius for the ellipse
  let r = random(1, 10);

  // Draw the ellipse at the current coordinates
  ellipse(width / 2 + x, height / 2 + y, r * radius, r * radius);

  // Increment the Fibonacci sequence counter
  n++;
}

// Calculates the nth number in the Fibonacci sequence
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}