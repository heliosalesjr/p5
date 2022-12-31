let grid;
let turn = 'X'; // X goes first

function setup() {
  createCanvas(300, 300);
  grid = [    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}

function draw() {
  background(200);
  drawGrid();
  checkWin();
}

function drawGrid() {
  strokeWeight(4);
  stroke(0);
  // horizontal lines
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  // vertical lines
  line(0, 100, 300, 100);
  line(0, 200, 300, 200);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = j * 100 + 50;
      let y = i * 100 + 50;
      let spot = grid[i][j];
      textSize(64);
      fill(0);
      text(spot, x, y);
    }
  }
}

function mousePressed() {
  // only allow the user to make a move if it is their turn
  if (turn === 'X') {
    let i = floor(mouseY / 100);
    let j = floor(mouseX / 100);
    if (grid[i][j] === '') {
      grid[i][j] = turn;
      turn = 'O'; // switch turns
      // check if game is over
      if (checkWin()) {
        // stop the game if there is a winner
        noLoop();
      } else {
        // if game is not over, let the computer make a move
        if (turn === 'O') {
          computerMove();
        }
      }
    }
  }
}
function computerMove() {
  // check if there is a winning move for the computer
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === '') {
        grid[i][j] = 'O';
        if (checkWin()) {
          return;
        }
        grid[i][j] = '';
      }
    }
  }
  // check if there is a winning move for the user and block it
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === '') {
        grid[i][j] = 'X';
        if (checkWin()) {
          grid[i][j] = 'O';
          return;
        }
        grid[i][j] = '';
      }
    }
  }
  // make a random move if no winning moves are available
  let availableSpots = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === '') {
        availableSpots.push([i, j]);
      }
    }
  }
  let randomIndex = floor(random(availableSpots.length));
  let spot = availableSpots[randomIndex];
  grid[spot[0]][spot[1]] = 'O';
}

function checkWin() {
  let winner = '';
  // check rows
  for (let i = 0; i < 3; i++) {
    if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][0] !== '') {
      winner = grid[i][0];
    }
  }
  // check columns
  for (let i = 0; i < 3; i++) {
    if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] !== '') {
      winner = grid[0][i];
    }
  }
  // check diagonals
  if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== '') {
    winner = grid[0][0];
  }
  if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2] && grid[2][0] !== '') {
    winner = grid[2][0];
  }

  if (winner !== '') {
    console.log(winner + " wins!");
    return true;
  }
  return false;
}


