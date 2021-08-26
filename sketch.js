var spaceBgImg;
var spaceCraft, spaceLeftImg, spaceRightImg, spaceUpImg, spaceCraftImg;
var iss, issImg;
var hasDocked = false;


function preload(){
  spaceBgImg = loadImage("assets/spacebg.jpg");
  spaceLeftImg = loadImage("assets/spacecraft3.png");
  spaceRightImg = loadImage("assets/spacecraft4.png");
  spaceUpImg = loadImage("assets/spacecraft2.png");
  spaceCraftImg = loadImage("assets/spacecraft1.png");
  issImg = loadImage("assets/iss.png");
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);

//create ISS
  iss = createSprite(width/2, height/2);
  iss.addImage(issImg);
  iss.scale = 1.5;

//create SpaceCraft
  spaceCraft = createSprite(iss.x-40, iss.y + 200 );
  spaceCraft.addImage('normal', spaceCraftImg);
  spaceCraft.addImage('left', spaceLeftImg);
  spaceCraft.addImage('right', spaceRightImg);
  spaceCraft.addImage('up', spaceUpImg);
  spaceCraft.changeImage('normal');
  spaceCraft.scale = 0.3;
//create Point 
  point = createSprite(iss.x-105, iss.y+30, 50, 50);
  point.visible = false;

}


function draw() {
  background(spaceBgImg);  

  spaceCraft.depth = iss.depth;
  iss.depth +=1;
  

  //condition for movement of SpaceCraft
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-2, 2);

    //move left
      if(keyIsDown(LEFT_ARROW)){
         spaceCraft.x -= 1;
         spaceCraft.changeImage('left');      
      }
    //move right
      if(keyIsDown(RIGHT_ARROW)){
        spaceCraft.x += 1;
        spaceCraft.changeImage('right');      
    }
    //move up
      if(keyIsDown(UP_ARROW)){
        spaceCraft.y -= 1;
        spaceCraft.changeImage('up'); 
    }

    if(spaceCraft.isTouching(point)){
      hasDocked = true;
      spaceCraft.x = point.x;
      spaceCraft.y = point.y+85
    }

  }

  drawSprites();
}
function keyReleased(){
  spaceCraft.changeImage('normal')
}