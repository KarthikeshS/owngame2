const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var man1,man2,man3,man4;
var backgroundImg;
var bg1;
var man1Img,man2Img,man3Img,man4Img;
var cow,cowImg;
var boy1,boy2,girl1,girl2;
var boy1Img,boy2Img,girl3Img,girl4Img;
var goat,goatImg;
var zone,zoneImg;
var play;
var START;

var END =0;
var PLAY =1;
var gameState = START;

function preload(){
    man1Img = loadImage("images/man1.png");
    man2Img = loadImage("images/man2.png");
    man3Img = loadImage("images/man3.png");
    man4Img = loadImage("images/man4.png");

    backgroundImg = loadImage("images/images.jpg");

    zoneImg = loadImage("images/zone.jpg");

}

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    zone = createSprite(600,300,1200,100);
    zone.addImage(zoneImg);
    zone.scale=4;
    

    boy1 = new Team(300,300);
    boy1.scale = 1;
    boy1.visible = false;

    boy2 = new Team(500,300);
    boy2.scale = 1;
    boy2.visible = false;

    girl1 = new Team(700,300);
    girl1.scale = 1;
    girl1.visible = false;

    girl2 = new Team(900,300);
    girl2.scale = 1;
    girl2.visible = false;

    bg1 = createSprite(600,300);
    bg1.addImage(backgroundImg);
    bg1.scale = 3.7;
    bg1.visible = false;
   


   

    play = createButton('PLAY');
    play.position(550,550);
    play.style('background', 'red'); 
    play.scale = 5;

}
function draw(){

Engine.update(engine);

    background(0);
    drawSprites();
    
if(gameState === START){
    textSize(30);
    fill("white");
    text("SAVE THE OZONE LAYER CLICK PLAY TO PLANT THE PLANTS AND TREES",100,80);
        zone.visible = true;
    //play.display();
}
    
if(gameState === PLAY){

        zone.visible = false;
        boy1.visible = true;
        boy2.visible = true;
        girl1.visible = true;
        girl2.visible = true;
        
        bg1.visible = true;
        play.hide();
        boy1.display();
        boy2.display();
        girl1.display();
        girl2.display();
}

play.mousePressed(() => {
    gameState = PLAY;
        
        
            }
        );
    

    
    


}