const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var paper,slingShot;

 var gameState = "onSling";

function setup() {
 var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  paper = new Ball(100,200,60,60);
  ground = new Ground(600,height,1200,20)
  box = new Box(800,315,150,150)
  slingShot = new SlingShot(paper.body,{x:100,y:200})
}

function draw() {
  background(255);  
  Engine.update(engine);
  strokeWeight(4);
  paper.display();
  box.display();
  ground.display();
  slingShot.display();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}