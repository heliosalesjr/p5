let nums = [2, 1];

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  // Generate new Lucas number and calculate angle
  let next = nums[nums.length-1] + nums[nums.length-2];
  let angle = random(TWO_PI);

  // Calculate position of circle
  let x = cos(angle) * next * 2;
  let y = sin(angle) * next * 2;

  // Draw circle
  let c = color(random(255), random(255), random(255));
  fill(c);
  noStroke();
  ellipse(width/2 + x, height/2 + y, next, next);

  // Add new Lucas number to array
  nums.push(next);

  // Remove oldest Lucas number if array is too long
  if (nums.length > 50) {
    nums.shift();
  }
}