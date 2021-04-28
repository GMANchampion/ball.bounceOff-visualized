var canvas;
var blockB,blockO,blockR,blockG;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    blockB = createSprite(0,580,360,30);
    blockB.shapeColor = "blue";

    blockO = createSprite(295,580,200,30);
    blockO.shapeColor = "orange";

    blockR = createSprite(515,580,200,30);
    blockR.shapeColor = "red";

    blockG = createSprite(740,580,220,30);
    blockG.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = (random(3,9));
    ball.velocityY = (random(3,9));
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    /*ball.bounceOff(blockB);
    ball.bounceOff(blockO);
    ball.bounceOff(blockR);
    ball.bounceOff(blockG);*/

    if(blockB.isTouching(ball) && ball.bounceOff(blockB)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(blockO.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(blockR.isTouching(ball) && ball.bounceOff(blockR)){
        ball.shapeColor = "red";
    }

    if(blockG.isTouching(ball) && ball.bounceOff(blockG)){
        ball.shapeColor = "green";

}
    drawSprites();
}