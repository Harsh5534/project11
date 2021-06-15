var boy, boyImg;
var path; 
var leftBoundery, rightBoundery; 
var pathImg;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(130,340,30,30);
  boy.addAnimation("JakeRunning",boyImg);
  boy.scale = 0.08;

  leftBoundery = createSprite(0, 0, 100, 800);
  leftBoundery.visible = false;

  rightBoundery = createSprite(410, 0, 100, 800);
  rightBoundery.visible = false;

}

function draw() {
  background(0);
  
  path.velocityY = 4;
  boy.x = World.mouseX;
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundery);
  boy.collide(rightBoundery);

  if(path.y > 400){
    path.y = height/2;
  }
  drawSprites();
}
