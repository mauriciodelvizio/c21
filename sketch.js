const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var bola;
var button

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  button = createImg("up.png");
  button.position(250, 200);
  button.size(100, 100);
  button.mouseClicked(push);

  var bola_options = {
    restitution: 0.9,
    frictionAir: 0.01
  }

  bola = Bodies.circle(200, 50, 15, bola_options);
  World.add(world, bola);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw(){
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(bola.position.x, bola.position.y, 15);
}

function push(){
  Matter.Body.applyForce(bola, {x: 0, y: 0}, {x: 0.05, y: 0.05});
}
