/*three objects created in Matter.jslibrary -> World, Engine and Bodies
rename them as World, Engineand Bodies so that it is easy to writeand read our code. This is callednamespacing​ in programming.*/
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
/*●Engine is used to create thephysics engine.
●World is used to create thephysical world and add objectsto it.
●Bodies is used to create the physical objects which inhabit the world.
*/
var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }
  object=Bodies.rectangle(400, 380, 800, 20, ground_options);
  World.add(world,object);

  var ball_option={
    restitution:1.0
  }
  ball=Bodies.circle(200, 100, 40, ball_option);
  World.add(world,ball);
}

function draw() {
  background(255,255,200);
  Engine.update(engine);
  rectMode(CENTER)
  rect(object.position.x, object.position.y, 800, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);
}