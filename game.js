let circlesX = 0;
let circlesY = 0;
let circlesR = 50;

let start = false;

let x = 300;
let y = 120;
let rotation = 0;
let speed = 3;
let gravity = 4;
let velocity = 1;

let waveHeight = 20;
let waveSpacing = 0.05;

let ringRotation = 0;

let baseX = 50;
let baseY = 550;
let direction = 1;
let fuelLevel = 300;


function setup() {
createCanvas(600, 600);
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
fill(c);
  ellipse(circlesX, circlesY, 2 * circlesR);
}

function button() {
fill(255, 0, 0);
rect(200, 250, 200, 50, 10);

fill(255, 255, 255);
textSize(20);
text("Start The Game", 230, 280);
}

function restartButton(){
    fill(255, 0, 0);
    rect(200, 250, 200, 50, 10);
    
    fill(255, 255, 255);
    textSize(20);
    text("Play again", 250, 280);
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

  //flames
// noStroke();
// fill(255, 180, 0);
// ellipse(0, 0, random(15, 25), 60);
// fill(255, 255, 0);
// ellipse(0, 0, 20, random(30, 50));

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
push();
fill(20, 120, 204);
rect(-width, 565, width * 2, height);
pop();

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

function draw() {
    if (start) {
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
    y += speed;

    //Moving the spaceship
    if (dist(x, y, baseX, baseY) >= 50) {
        if (keyIsDown(38) && fuelLevel > 0) {
        //move up
        translate(x, y);
        noStroke();
        fill(255, 180, 0);
        ellipse(0, 0, random(15, 25), 50);
        fill(255, 255, 0);
        ellipse(0, 0, 20, random(30, 40));
        y -= 5;
        fuelLevel -= 2;
        } else if (keyIsDown(40) && fuelLevel > 0) {
        //move down
        y += 5;
        fuelLevel -= 2;
        }
        if (keyIsDown(37) && fuelLevel > 0) {
        //move left
        x -= 3;
        fuelLevel -= 1;
        } else if (keyIsDown(39) && fuelLevel > 0) {
        // move right
        x += 3;
        fuelLevel -= 1;
        }

        if (x > 90 && y > 570) {
        background(220);
        restartButton();
        textAlign(CENTER, CENTER);
        fill(0, 0, 0);
        text("Epic fail!", 300, 150);
        noLoop();

        } else if (x <70  && y >= 530 && speed < 5) {
        gravity = 0;
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        text("Smooth landing", width / 2, height / 2);
        noLoop();
        }
        
        console.log( y);
    }
    } else {
    button();
    startGame();
    }
    if (mouseX >= 200 && mouseX <= 400 && mouseY >= 250 && mouseY <= 300) {
    start = true;
    }
}


