let bg;

function setup() {
  createCanvas(400, 400);
  bg = color(random(255), random(255), random(255));
  setInterval(updateBackground, 1000);
}

function draw() {
  background(bg);
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  let now = new Date();
  let hours = arabicToRoman(now.getHours() % 12 || 12);
  let minutes = arabicToRoman(now.getMinutes());
  let seconds = arabicToRoman(now.getSeconds());
  text(`${hours}:${minutes}:${seconds}`, width / 2, height / 2);
}

function updateBackground() {
  bg = color(random(255), random(255), random(255));
}

function arabicToRoman(num) {
  const romanDict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };
  let result = "";
  for (let value of Object.keys(romanDict).reverse()) {
    while (num >= value) {
      result += romanDict[value];
      num -= value;
    }
  }
  return result;
}