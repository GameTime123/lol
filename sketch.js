const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var refusingtomakesenseinmath
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var refusingtomakesenseinmath_options ={
        restitution:8
    } 
    refusingtomakesenseinmath=Bodies.circle(200,200,15,refusingtomakesenseinmath_options);
    World.add(world,refusingtomakesenseinmath);
    var ground_options ={
        isStatic: true
    }
   
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    console.log(refusingtomakesenseinmath);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(refusingtomakesenseinmath.position.x,refusingtomakesenseinmath.position.y,15,15)
}