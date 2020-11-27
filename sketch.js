const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,ground
var plinko = [];
var particle = [];





function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,480,20);
  division1 = new Division(100,690,10,180);
  division2 = new Division(200,690,10,180);
  division3 = new Division(300,690,10,180);
  division4 = new Division(400,690,10,180);

for (var i = 50;i<width ;i = i + 50){
  plinko.push(new Plinko(i,75,10))
}
for (var i = 75;i<width-20 ;i = i + 50){
  plinko.push(new Plinko(i,175,10))
}
for (var i = 50;i<width ;i = i + 50){
  plinko.push(new Plinko(i,275,10))
}


  Engine.run(engine);
}

function draw() {
  background("green");
  ground.display();
  division1.display();
  division2.display(); 
  division3.display(); 
  division4.display(); 
  for(var j = 0; j< particle.length; j++){
    particle[j].display();
  }
  for(var i = 0;i<plinko.length;i++) {
    plinko[i].display();
  }
  if(frameCount%60 ===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  drawSprites();
  }