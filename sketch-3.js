var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);

  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321); 

  bullet=createSprite(50,200,70,30);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = "bwhite"
}

function hascollided (lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

function draw() {
  background(0,0,0);
  
  if(hascollided(bullet,wall)){

  bullet.velocityX = 0;

  var damage = 0.5*weight*speed*speed/22500 /(thickness *thickness *thickness);

  if(damage>5){
    wall.shapeColor= "red"
  }

  if(damage<5){
    wall.shapeColor = "green"
  }

}  

  drawSprites();
}