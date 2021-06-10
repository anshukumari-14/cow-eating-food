var green1,green2,green3,green4,greenImg1,greenImg2,greenIm3,greenImg4;
var fastfood1,fastfood2,fastfood3,fastfoodImg1,fastfoodImg2,fastfoodImg3;
var cow,cow1;
var axe,axe1;
var score =0;
var PLAY =1;
var END = 0;
var gameState=PLAY;
var gameover,gameover1,restart;

function preload(){
  fastfoodImg1=loadImage("fastfood1.gif")
  fastfoodImg2=loadImage("fastfood2.gif")
  fastfoodImg3=loadImage("fastfood3.gif")
  greenImg1=loadImage("green1.gif")
  greenImg2=loadImage("green2.gif")
  greenImg3=loadImage("green3.gif")
  greenImg4=loadImage("green4.gif")
  greenImg5=loadImage("green5.gif")
  cow1=loadImage("cow.gif")
  axe1=loadImage("axe.gif")
  gameover1=loadImage("gameOver.png")
  
}
function setup(){
  createCanvas(600,600)
 cow = createSprite(200,200,20,20) 
  cow.addImage(cow1)
  cow.scale=0.3;
  
 gameover=createSprite(300,150,100,40);
  gameover.addImage(gameover1);
  gameover.scale=1;
  
 restart=createSprite(300,250,500,60);
  restart.scale=0.8;
  restart.shapecolor="White";
  
  green1Group = createGroup();
  green2Group = createGroup();
  green3Group = createGroup();
  green4Group = createGroup();
  green5Group = createGroup();
  fastfoodsGroup = createGroup();
  axesGroup = createGroup();
}
function draw(){
  background(255)
  if (gameState === PLAY){
  textSize(17)
  text("Score: "+score,455,57)
    gameover.visible=false;
  restart.visible=false;
  cow.y=World.mouseY;
  cow.x=World.mouseX;
  var select_green = Math.round(random(1,5));
  if(World.frameCount % 150 === 0){
    if(select_green ===1){
      greens1();
    } else if(select_green ===2){
      greens2();
    } else if(select_green ===3){
      greens3();
    } else if(select_green ===4){
      greens4();
    }else {
      greens5();
    }
  }
  if(cow.isTouching(green1Group)){
    green1Group.destroyEach();
    score=score+3;
  }
  if(cow.isTouching(green2Group)){
    green2Group.destroyEach();
    score=score+3;
  }
  if(cow.isTouching(green3Group)){
    green3Group.destroyEach();
    score=score+3;
  }
  if(cow.isTouching(green4Group)){
    green4Group.destroyEach();
    score=score+3;
  }
  if(cow.isTouching(green5Group)){
    green5Group.destroyEach();
    score=score+3;
  }
  if(cow.isTouching(fastfoodsGroup)){
    fastfoodsGroup.destroyEach();
    score=score*0;
  }
  if(cow.isTouching(axesGroup)){
    gameState=END;
    axesGroup.destroyEach();
    axesGroup.velocityY=0;
    score=0;
    
  }
  fastfoods1();
  axes1();
 }
  else if(gameState === END){
    gameover.visible=true;
    textSize(35)
    text("Press Key to restart",200,250);
    text.shapecolor="White";
    fastfoodsGroup.setVelocityXEach(0);
    green1Group.setVelocityXEach(0);
    green2Group.setVelocityXEach(0);
    green3Group.setVelocityXEach(0);
    green4Group.setVelocityXEach(0);
    green5Group.setVelocityXEach(0);
    
    if(mousePressedOver(restart)){
      reset();
    }
    
  }
  drawSprites()
}
function greens1(){
  green1 = createSprite(0,Math.round(random(550,50)),20,20)
  green1.addImage(greenImg1)
  green1.scale=0.3;
  green1.velocityX = 5;
  green1.lifetime=150;
  green1Group.add(green1);
}
function greens2(){
  green2 = createSprite(0,Math.round(random(550,50)),20,20)
  green2.addImage(greenImg2)
  green2.scale=0.3;
  green2.velocityX=5;
  green2.lifetime=150;
  green2Group.add(green2);
}
function greens3(){
  green3 = createSprite(0,Math.round(random(550,50)),20,20)
  green3.addImage(greenImg3)
  green3.scale=0.3;
  green3.velocityX=5;
  green3.lifetime=150;
  green3Group.add(green3);
}
function greens4(){
  green4 = createSprite(0,Math.round(random(550,50)),20,20)
  green4.addImage(greenImg4)
  green4.scale=0.3;
  green4.velocityX=5;
  green4.lifetime=150;
  green4Group.add(green4)
}
function greens5(){
  green5 = createSprite(0,Math.round(random(550,50)),20,20)
  green5.addImage(greenImg5)
  green5.scale=0.3;
  green5.velocityX=5;
  green5.lifetime=150;
  green5Group.add(green5)
}

function fastfoods1(){
  if(frameCount % 130 === 0){
    var fastfood = createSprite(Math.round(random(80,550),60,20,20));
    fastfood.velocityY=8;
    var r = Math.round(random(1,3))
    switch(r){
      case 1: fastfood.addImage(fastfoodImg1);
      break;
      case 2: fastfood.addImage(fastfoodImg2);
      break;
      case 3: fastfood.addImage(fastfoodImg3);
      break;
      default: break;
    }
  
      fastfood.scale=0.2;
    fastfood.lifetime=150;
    fastfoodsGroup.add(fastfood);
}
}
function axes1(){
  if(frameCount % 150 === 0){
  axe=createSprite(Math.round(random(80,550),60,20,20));
  axe.addImage(axe1)
  axe.scale=0.9;
  axe.velocityY=4;
  axe.lifetime=150;
    axesGroup.add(axe);
}
}
function reset(){
  gameState=PLAY;
  gameover.visible=false;
  restart.visible=false;
  green1Group.destroyEach();
  green2Group.destroyEach();
  green3Group.destroyEach();
  green4Group.destroyEach(); 
  green5Group.destroyEach();
  fastfoodsGroup.destroyEach();
  
  
  
}
