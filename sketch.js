const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ball,ground;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,380,200,200);
    ground = new Ground(600,height,1200,20); 
    ball = new Ball(100,100);
    
}

function keyPressed(){
if(keyCode===UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-90})
}

}
         
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ball.display();
    ground.display(); 
    
}