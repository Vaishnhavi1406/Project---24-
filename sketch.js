
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject, groundObject
var world; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER); 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine); 
	world = engine.world;  
	dustbinObj = new dustbin(1200,650); 
	paperObject = new paper(200, 450, 40);  
	groundObject = new ground (width/2, 670, width, 20); 

	var render = Render.creat({
		element: document.body, 
		engine: engine, 
		options:{
			width: 1200, 
			height: 700, 
			wireframes: false 
		}
			

	}); 
		
Engine.run(engine); 

}


function draw() {             
  rectMode(CENTER);
  background(0); 

  dustbinObj.display(); 

  paperObject.display(); 

  groundObject.display(); 

  drawSprites();

  keyPressed();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85}); 
	}
}