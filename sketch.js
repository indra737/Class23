const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var bird;
var pig1;
var log1;


function setup(){
    angleMode(RADIANS)
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
log1= new Log(500,450,120,PI/4)
    box1 = new Box(600,450,70,70);
    box2= new Box(580,470,70,70);
    bird= new Bird(100,300)
    pig1= new Pig(400,400);
    ground= new Ground(width/2,height,width,30)
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.show();
    box2.show();
    ground.show();
    bird.show();
    pig1.show();
    log1.show()
   
}