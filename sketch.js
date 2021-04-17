const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backGround,bgImage;
var snownum;
snowdrops=[];
var world,engine;

function preload(){
  
   bgImage=loadImage("snow1.jpg");
   
 }

function setup() {
  createCanvas(1000,1000);
 // engine = Engine.create();
 //   world = engine.world;
 


 backGround=createSprite(550,350,800,400);
 backGround.addImage("ground",bgImage);
 backGround.scale=2

 if (frameCount % 150 ===0){
  for(var snownum=0;snownum<200;snownum++){
    snowdrops.push(new Snow(random(0,width),random(0,height)));
  }
} 
 //snow1= new Snow(300,300,40);
}

function draw() {
  background(255,255,255); 
  for (var snownum=0;snownum < 200;snownum++){
    snowdrops[snownum].display();
    snowdrops[snownum].reposition();
    } 
 
  drawSprites();
}