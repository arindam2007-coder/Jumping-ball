var canvas;
var music;
var block1,block2,block3,block4
var ball,edges 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30)
    block1.shapeColor = "blue"
    block2 = createSprite(295,380,200,30)
    block2.shapeColor = "green"
    block3 = createSprite(515,580,200,30)
    block3.shapeColor = "red"
    block4 = createSprite(740,580,220,30)
    block4.shapeColor = "pink"



    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = "black"
    ball.velocityX = 4
    ball.velocityY = 9

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites()
    ball.bounceOff(edges)
    
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
    ball.shapeColor = "blue"    
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = "green"    
        }
        if(block3.isTouching(ball)&&ball.bounceOff(block3)){
            ball.shapeColor = "red"    
            }
            if(block4.isTouching(ball)&&ball.bounceOff(block4)){
                ball.shapeColor = "pink"    
                }
    drawSprites()



    //add condition to check if box touching surface and make it box
}
