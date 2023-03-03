
let stars;
let x = 0;
let y = 0;
let rotation = 0;
let speed = 0;

function setup() {
    createCanvas(600, 600);
    background(255, 255, 255);
    stars = [600, 400, 200, 0, -200, -400, -600, -800, -100, -1200, -1400, -1600];


}

function spaceShip(x, y){
    push();

    //flames
    noStroke();
    fill( 255, 180, 0);
    ellipse(300, 120, random(15, 25), 50);
    fill(255, 255, 0);
    ellipse (300, 120, random(10, 20), 40);

    //spaceship drawing
    fill(25, 100, 200);
    arc(300 , 120, 50, 40, PI, 0);
    
    
    fill(255, 0, 0);
    ellipse(300, 100, 30, 60);

    fill(25, 100, 200);
    ellipse(300, 120, 10, 20);

    ellipse (300, 100, 10, 10);
    ellipse(300, 85, 10, 10);

    pop();
    
}

// function keyPressed(){
//     // x = x +  speed;
//     // y = y +  speed;
//     // if (keyIsDown(38)){
//     //     y -= 5;
//     // } else if (keyIsDown(40)){
//     //     y += 5;
//     // } if (keyIsDown(37)){
//     //     x -= 5;
//     // } else if (keyIsDown(39)){
//     //     x += 5;
//     // }
// }
// x = x +  speed;
// y = y +  speed;

function draw(){
    background(0, 0 ,0);
    translate(x, y);
    spaceShip(x, y);


    //Moving the spaceship
    if (keyIsDown(38)){
        y -= 3;
    } else if (keyIsDown(40)){
        y += 3;
    } if (keyIsDown(37)){
        x -= 3;
    } else if (keyIsDown(39)){
        x += 3;
    }

    //Stars
    for(let i = 0; i< stars.length; i++){
        fill(230, 255, 0);
        ellipse(random(10, 500), stars[i], random(10, -10), random(10, -10));
        
    }
}

