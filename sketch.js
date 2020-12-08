var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() { 
createCanvas(600,600); 
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10); 
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)

obstaclesGroup = new Group();
FoodGroup=new Group();
}


function draw() {
background("white");
 
 if(ground.x<0) {
   ground.x=ground.width/2;
 }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY +0.8;
  
  
  monkey.collide(ground);
  spawnFood();
  spawnObstacle();
  
 stroke("white");
  textSize(15);
  fill("white");
  text("Score: "+score,500,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  
    
 stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  
  
  drawSprites();  
}

function spawnFood(){
  if(frameCount%80===0){
  var banana=createSprite(500,50,40,10);
    banana.y=random(150,200);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=300;
    monkey.depth=banana.depth+1;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacle(){
if(frameCount%80===0) {
  var obstacle=createSprite(400,320,40,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-6;
  obstacle.lifetime=300;
  
obstaclesGroup.add(obstacle);
} 
  
}