const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var division;
var particle;

function preload(){

}


function setup() {
  createCanvas(1000,700);
  
  engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  
  

	groundSprite=createSprite(width/2, height-18, width,13);
	groundSprite.shapeColor=color(255);
		
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

  division = new Divisions(12,500,4,350);

  particle = new Particle(400,350,5);

   boxPosition=width/2-100
 	 boxY=610;


 	boxleftSprite=createSprite(boxPosition-395,boxY-270, 10,700);
 	boxleftSprite.shapeColor=color("red");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+110, boxY+85, 1000,12);
 	boxBase.shapeColor=color("red");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+595 , boxY-270, 10,700);
 	boxleftSprite.shapeColor=color("red");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	
  

}



var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;




function draw() {
  background(0);  

  
  for (var k =0; k<= width; k = k + 80) {
	divisions.push(new Divisions(k,height - divisionHeight/2,10,divisionHeight));
  }
  
  for (var k =0; k < divisions.length;  k++ ){
	   
		 divisions[k].display ();
  
  } 


  
 
  
  
  drawSprites();
  division.display();
  particle.display();
 
 
}





