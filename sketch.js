
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);
	var ball_options={
		isStatic=false,
		restitution=0.3,
		friction=0,
		density=1.2

	}

	function keyPressed(){
		if (keyCode === UP_ARROW){
            
			Matter.Body.applyForce (ball,0.5,0.7);

		}
	
	}


	engine = Engine.create();
	world = engine.world;

	Matter.Bodies.circle(400,400,10,[options]);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  display()
  groundObj.display();
  groundObj = new ground(width/2,670,width,20);
  leftside = new ground(1100,600,20,120);
  rightside = new ground (2000,700,20,120);
}



