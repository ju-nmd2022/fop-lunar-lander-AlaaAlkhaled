
let start = false;
let x = 300;
let y = 120;
let rotation = 0;
let speed = 3;
let gravity = 4;

let waveHeight = 20;
let waveSpacing = 0.05;

let ringRotation = 0;

let baseX = 50;
let baseY = 550;
let direction = 1;
let fuelLevel = 300;

let gameOver = false;
let gameWon = false;

function setup() {
createCanvas(700, 800);
background(255, 255, 255);
frameRate(30);
}

function startGame() {
circlesX = random(width);
circlesY = random(height);
circlesR = random(50);

red = random(255);
green = random(255);
blue = random(255);

c = color(red, green, blue);
fill(color(random(255), random(255), random(255)));
  ellipse(circlesX, circlesY, 2 * circlesR);
}

function button() {
fill(255, 0, 0);
rect(200, 250, 200, 50, 10);

fill(255, 255, 255);
textSize(20);
text("Start The Game", 230, 280);
}

function moon() {
push();
noStroke();
fill(171, 96, 74);
ellipse(500, 50, 50, 50);
fill(171, 96, 74);
push();
translate(500, 50);
rotate(radians(ringRotation));
stroke(150);
strokeWeight(5);
noFill();
ellipse(0, 0, 90, 50);
pop();

ringRotation += 0.5;
stroke(150);
strokeWeight(5);
noFill();
ellipse(500, 50, 70, 30);
pop();
push();
fill(255);
ellipse(470, 40, 5, 5);
ellipse(490, 60, 5, 5);
ellipse(520, 30, 5, 5);
ellipse(540, 80, 5, 5);
ellipse(560, 50, 5, 5);
pop();
for (let i = 0; i < 5; i++) {
    fill(255, 255, 200, random(0, 255));
    ellipse(410 + i * 30, 40 + i * 20, 8, 7);
}
}

function spaceShip(x, y) {
push();
translate(x, y);

  //spaceship drawing
fill(25, 100, 200);
arc(0, 0, 50, 40, PI, 0);

fill(255, 0, 0);
ellipse(0, -20, 30, 60);

fill(random(150, 200));
ellipse(0, 0, 10, 20);

ellipse(0, -20, 10, 10);
ellipse(0, -35, 10, 10);

  //Light
fill(255, 25, 255, 100);
triangle(+ 20, -80, -20, -80, 0, -40);
pop();
}

function drawBase() {
push();
fill(170, 170, 170);
rectMode(CENTER);
rect(baseX, 550, 100, 30, 5);
fill(120, 120, 120);
rect(baseX, 530, 80, 15, 5);
pop();
}

function waves() {

fill(20, 120, 204);
rect(-width, 565, width * 2, height);

strokeWeight(10);
stroke(20, 120, 200);
strokeCap(PROJECT);

let prevY = 580 + waveHeight * sin(waveSpacing * 0 + frameCount * 0.1);
for (let waveX = 0; waveX <= width; waveX += 20) {
let waveY = 580 + waveHeight * sin(waveSpacing * waveX + frameCount * 0.1);
line(waveX, prevY, waveX + 20, waveY);
prevY = waveY;
}
}

function retryButton() {
  if (gameOver || gameWon) {
    fill(255, 0, 0);
    rect(width / 2 - 100, height / 2 + 50, 200, 50, 10);
    fill(255, 255, 255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Retry", width / 2, height / 2 + 75);
  }
}

function resetGame() {
  x = 300;
  y = 120;
  rotation = 0;
  speed = 3;
  gravity = 4;
  fuelLevel = 300;
  start = false;
  gameOver = false;
  gameWon = false;
  loop();
}

function mousePressed() {
  if (!start && mouseX >= 200 && mouseX <= 400 && mouseY >= 250 && mouseY <= 300) {
    start = true;
  }

  if ((gameOver || gameWon )&& mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 && mouseY >= height / 2 + 50 && mouseY <= height / 2 + 100) {
    resetGame();
    start = true;
  }
}

function showGameOver() {
  background(220);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text("Epic fail!", width / 2, height / 2);
  retryButton();
}

function showGameWon() {
  // background(220);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text("Smooth landing!", width / 2, height / 2);
  retryButton();
}

function draw() {
  
  if (start) {
    if (!gameOver && !gameWon) {
      push();
      background(0, 0, 40);
      spaceShip(x, y);
      moon();
      drawBase();
      push();
      waves();
      pop();

      textSize(16);
      fill(255);
      text("Fuel: " + fuelLevel, 20, 20);
      y += gravity;

      // Moving the spaceship
      if (dist(x, y, baseX, baseY) >= 10) {
        if (keyIsDown(38) && fuelLevel > 0) {
          // move up
          translate(x, y);
          noStroke();
          // flames
          fill(255, 180, 0);
          ellipse(0, 0, random(15, 25), 50);
          fill(255, 255, 0);
          ellipse(0, 0, 20, random(30, 40));
          y -= 5;
          fuelLevel -= 2;
        } 
        else if (keyIsDown(40) && fuelLevel > 0) {
          // move down
          y += 6;
          fuelLevel -= 2;
        }
        if (keyIsDown(37) && fuelLevel > 0) {
          // move left
          x -= 3;
          fuelLevel -= 1;
        } 
        else if (keyIsDown(39) && fuelLevel > 0) {
          // move right
          x += 3;
          fuelLevel -= 1;
        }
        if (x > 40 && x < 70 && y >= 400) {
          gravity = 1;
          speed = 1;
          textSize(32);
          textAlign(CENTER, CENTER);
          fill(255, 0, 0);
          if (y > 400 && y < 480) {
            text("Move slow to the base", width / 2, height / 2);
          }
          if (y == 500) {
            gameWon = true;
            gravity = 0;
            textSize(32);
            textAlign(CENTER, CENTER);
            textStyle(BOLD);
            fill(255, 0, 0);
            text("Smooth landing ", width / 2, height / 2);
            noLoop();
          }
        } 
        else if (x > 61 && y > 570) {
          gameOver = true;
        }
      }
    } 
    else {
      showGameOver();
    }
    if (gameOver) {
      showGameOver();
    } 
    else if (gameWon) {
      showGameWon();
    }
  } 
  else {
    button();
    startGame();
  }
}
