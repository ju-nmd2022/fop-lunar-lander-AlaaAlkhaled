let x = 0;
let y = 0;
let r = 50;

let spaceShipX = 300;
let spaceShipY = 300;

function setup() {
    background(255, 255, 255);
    frameRate(5);
    }

function homeScreen(){
    x = random(width);
    y = random(height);
    r = random(50);
    red = random(255);
    green = random(255);
    blue = random(255);
    c = color(red, green, blue);
    fill(c);
    ellipse(x, y, 2*r);
    
    button(150, 150, 175, 50);
}

function button(){
    fill(255, 0, 0);
    rect(200, 200 ,200, 50, 10);

    fill(255, 255, 255);
    text("Start The Game", 225, 230);
    textSize(20);
}

function gameScreen(){
    background(255, 255, 255);

    fill(25, 100, 200);
    arc(spaceShipX , spaceShipY + 140, 100, 60, PI, 0);
    ellipse(spaceShipX, spaceShipY + 110, 20, 50);

    fill(200, 100, 100);
    ellipse(spaceShipX , spaceShipY + 100, 50, 100);

    fill(25, 100, 200);
    ellipse(spaceShipX, spaceShipY + 130, 10, 50);

    base();

}

function base(){
    fill(25, 25, 50);
    rect(0, 500, 1000, 500);
}


function draw(){
    // homeScreen();
    gameScreen();
    
}
