var fixedRect,movingRect;





function setup() {
  var canvas = createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,300,100,20);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);
  
  movingRect.x =mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)
    {
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="pink";
  
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  
  }

  drawSprites();
}