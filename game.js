let circlesX = 0;
let circlesY = 0;
let circlesR = 50;

let start = false;

let x = 0;
let y = 0;
let rotation = 0;
let speed = 0;
let gravity = 1;

let waveHeight = 20;
let waveSpacing = 0.05;

let ringRotation = 0;

let baseX = 50;
let baseY = 550;
let direction = 1;

let fuelLevel = 200;


function setup() {
    createCanvas(600, 600);
    background(255, 255, 255);
    frameRate(30);
}

function startGame(){
    circlesX = random(width);
    circlesY = random(height);
    circlesR = random(50);
    red = random(255);
    green = random(255);
    blue = random(255);
    c = color(red, green, blue);
    fill(c);
    ellipse(circlesX, circlesY, 2*circlesR);
}

function button(){
    fill(255, 0, 0);
    rect(200, 250 , 200, 50, 10);

    fill(255, 255, 255);
    textSize(20);
    text("Start The Game", 230, 280);
}


function moon(){
    push();
    noStroke();
    fill (171, 96, 74);
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

function spaceShip(x, y){
    push();
    translate(x, y);

    //flames
    noStroke();
    fill( 255, 180, 0);
    ellipse(300, 120, random(15, 25), 60);
    fill(255, 255, 0);
    ellipse (300, 120, 20, random(30, 50));

    //spaceship drawing
    
    fill(25, 100, 200);
    arc(300 , 120, 50, 40, PI, 0);
    
    
    fill(255, 0, 0);
    ellipse(300, 100, 30, 60);
    
    fill(random(150, 200));
    ellipse(300, 120, 10, 20);

    ellipse (300, 100, 10, 10);
    ellipse(300, 85, 10, 10);

    //Light
    fill(255, 255, 255, 100);
    triangle(300, 75, 280, 40, 320, 40);
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
    // baseX -= 3 * direction;
    // if (baseX > width || baseX <0){
    // direction *= -1;    
}


function waves() {
    push();
    fill(20, 120, 204);
    rect(- width, 565, width * 2, height);
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

function draw(){
    if (start){
    background(0, 0 ,40);
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
    
    //Moving the spaceship
    if (dist(x, y, baseX, baseY) >= 50) {
        if (keyIsDown(38) && fuelLevel > 0){
            //move up
        y -= 3;
        fuelLevel -= 1;
    } else if (keyIsDown(40) && fuelLevel > 0){
        //move down
        y += 3;
        fuelLevel -= 1;
    } if (keyIsDown(37) && fuelLevel > 0){
        //move left
        x -= 3;
        fuelLevel -= 1;
    } else if (keyIsDown(39) && fuelLevel > 0){
        // move right
        x += 3;
        fuelLevel -= 1;
    } if (x > -220 && y === 410){
        speed = 0;
        
        
        background(220);
        textAlign(CENTER, CENTER);
        fill(0, 0, 0);
        text("Epic fail!", width / 2, height / 2);
        noLoop();
    } else if (x <= -220 && y === 400){
        gravity = 0;
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        text("Smooth landing", width / 2, height / 2);
    }
}
console.log(x);
}else {
    button();
    startGame();
}
    if (mouseX >= 200 && mouseX <= 400 && mouseY >= 250 && mouseY <= 300) {
        start = true;
    }
    
}

