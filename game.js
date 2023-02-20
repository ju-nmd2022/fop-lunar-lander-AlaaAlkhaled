let x = 0;
let y = 0;
let r = 50;

let spaceShipX = 400;
let spaceShipY = 400;
let rotation = 0;
let speed = 0;

function setup() {
    background(255, 255, 255);
    frameRate(10);
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

function gameScreen(spaceShipX, spaceShipY, rotation){
    push();
    
    // background(255, 255, 255);
    rotate(rotation);
    fill(25, 100, 200);
    arc(300 , 450, 100, 60, PI, 0);
    ellipse(300, 400, 20, 50);

    fill(200, 100, 100);
    ellipse(300 , 400, 50, 100);

    fill(25, 100, 200);
    ellipse(300, 440, 10, 50);

    base();
    pop();
}

function base(){
    fill(25, 25, 50);
    rect(0, 500, 1000, 500);
}





function draw(){
    background(255, 255, 255);
    // homeScreen();
    gameScreen(spaceShipX, spaceShipY, rotation);
    
    spaceShipX = Math.cos(rotation) * speed;
    spaceShipY = Math.sin(rotation) * speed;

    if (keyIsDown(38)){
        speed = 5;
    } else if (keyIsDown(40)){
        speed = -5;
    } else {
        speed = 0;
    }
    if (keyIsDown(37)){
        rotation = rotation - 0.05;
    } else if (keyIsDown(39)){
        rotation = rotation + 0.05;
    }
    

}

console.log(spaceShipX);