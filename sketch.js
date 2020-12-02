var wall,thickness;

var bullet,speed,weight;

var damage;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,35,8);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);


}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
   
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

      if (damage > 10) {

      wall.shapeColor = "red";

      }
     
      if (damage < 10 ) {
     
      wall.shapeColor = "green";
     
      }

  }
  
    

    

    
  drawSprites();
}