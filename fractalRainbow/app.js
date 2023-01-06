// Declare variables for the angle of rotation, the axiom (starting string) and current sentence,
// the length of each line, the rules for generating the fractal, and the colors for the rainbow palette
let angle;
let axiom = "F";
let sentence = axiom;
let len = 100;
let rules = [];
let colors = ["#ff0000", "#ffa500", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];

function setup() {
  // Create the canvas and set the angle of rotation
  createCanvas(800, 600);
  angle = radians(25);

  // Set the rule for generating the fractal
  rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
  };

  // Set the background color and draw the initial fractal
  background(51);
  turtle();
}

// Define the turtle function to draw the fractal
function turtle() {
  // Reset the transformation matrix and translate to the starting position
  resetMatrix();
  translate(width / 2, height);

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    // If the character is "F", draw a line using the current color from the rainbow palette
    if (current == "F") {
      stroke(colors[i % colors.length]);
      line(0, 0, 0, -len);
      translate(0, -len);
    // If the character is "+", rotate the turtle clockwise
    } else if (current == "+") {
      rotate(angle);
    // If the character is "-", rotate the turtle counterclockwise
    } else if (current == "-") {
      rotate(-angle);
    // If the character is "[", push the current transformation matrix onto the stack
    } else if (current == "[") {
      push();
    // If the character is "]", pop the top transformation matrix from the stack
    } else if (current == "]") {
      pop();
    }
  }
}

// Define the generate function to create a new iteration of the fractal
function generate() {
  // Decrease the length of the lines to create a more detailed fractal
  len *= 0.7;
  // Initialize an empty string for the new sentence
  let nextSentence = "";
  // Iterate through each character in the current sentence
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    let found = false;
    // Check if the current character matches any of the rules
    for (let j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        // If a match is found, add the corresponding b value to the new sentence
        nextSentence += rules[j].b;
        break;
      }
    }
    // If no match is found, add the current character to the new sentence
    if (!found) {
// Set the current sentence to the new sentence
      nextSentence += current;
    }
  }
  sentence = nextSentence;
    // Draw the fractal using the updated sentence

  turtle();
}

function draw() {
  if (frameCount % 60 == 0) {
    generate();
  }
}
