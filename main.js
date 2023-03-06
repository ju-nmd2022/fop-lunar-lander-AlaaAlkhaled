

// let circlesX = 0;
// let circlesY = 0;
// let circlesR = 50;

// function setup() {
//     createCanvas(600, 600);
//     background(255, 255, 255);
//     frameRate(5);
//     }




// // WAVES

// // let waveY = height - 400;
// // let waveHeight = 20;
// // let waveSpacing = 0.05;
// // // let fishX = 0;

// // function setup(){
// //     createCanvas(600, 600);
// // }

// // function draw() {
// //     background(0, 140, 200);
// //     strokeWeight(1);
// //     stroke(255, 240, 240);
// //     for (let waveX = 0; waveX <= width; waveX += 20) {
// //     let waveY = 550 + waveHeight * sin(waveSpacing * waveX + frameCount * 0.05);
// //     line(waveX, waveY, waveX + 20, waveY + waveHeight * sin(waveSpacing * (waveX + 20) + frameCount * 0.05));
// //     }
    

//     // fishX += 2;
//     // if (fishX > width) {
//     // fishX = 0;
//     // }
    
//     // let fishY = height - (y + waveHeight * sin(waveSpacing * fishX + frameCount * 0.05));
    
//     // push();
//     // translate(fishX, fishY);
//     // scale(1);
//     // fill(255, 220, 200);
//     // noStroke();
//     // triangle(0, 0, 40, -20, 80, 0);
//     // ellipse(40, 20, 40);
//     // pop();




// // let spaceShipX = 300;
// // let spaceShipY = 300;

// // function spaceShip(){
// // background(255, 255, 255);

// // fill(25, 100, 200);
// // arc(spaceShipX , spaceShipY + 140, 100, 60, PI, 0);
// // ellipse(spaceShipX, spaceShipY + 110, 20, 50);

// // fill(200, 100, 100);
// // ellipse(spaceShipX , spaceShipY + 100, 50, 100);

// // fill(25, 100, 200);
// // ellipse(spaceShipX, spaceShipY + 130, 10, 50);
// // }

// // spaceShip();

// function button(){
//     fill(255, 0, 0);
//     rect(200, 250 , 200, 50, 10);

//     fill(255, 255, 255);
//     textSize(20);
//     text("Start The Game", 230, 280);
// }

// function draw (){
//     circlesX = random(width);
//     circlesY = random(height);
//     circlesR = random(50);
//     red = random(255);
//     green = random(255);
//     blue = random(255);
//     c = color(red, green, blue);
//     fill(c);
//     ellipse(circlesX, circlesY, 2*circlesR);
//     button();
// }

function draw(){
    fill(255, 0, 0);
    rect(200, 250, 200, 50, 10);
    
    fill(255, 255, 255);
    textSize(20);
    text("Play again", 250, 280);
}