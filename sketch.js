var refresh;

var play=1
 var end=3
var gameState=1
var win=4
var r;
var gameoversou,knifeswooshsou;
var sword,fruit1,fruit2,fruit3,fruit4,monster,monster2;
var swordImage,monsterImage,gameoverImage,youwonImage;
var fruitGroup,enemyGroup;
var gameover;
var score=0;
var board;
var second1
var minute1
function preload(){
//load images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  board=loadImage("download.jpg")
  youwonImage=loadImage("rrp.png")
  refresh=loadImage("—Pngtree—reload vector icon_4016000.png")
  
  gameoversou=loadSound("gameover.mp3")
  
  
  knifeswooshsou=loadSound("knifeSwooshSound.mp3")
}

function setup(){
  
   createCanvas(600, 600);

    sword=createSprite(200,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
fruitGroup=new Group();
alienGroup=new Group();  
  
restart=createSprite(300,400)
   restart.scale=0.1
restart.addImage(refresh);
  

  over=createSprite(300,300)
  over.addImage(gameoverImage);
  over.scale=2
}


function draw(){
 
  background(board); 
  fill("black");
  text("target:50",50,50)
   if(score===50){
      gameState=win
    }
  
  sword.y=World.mouseY;
sword.x=World.mouseX;
  
  if(frameCount%1080===0) {
       second1=second1=0
       minute1=minute1+1
     } 
    
    
  
  if (gameState===play){  
    fruits();
    alien();
    gameState=play;
      fill("")
    text("score:"+score,500,50) 
    
    if(sword.isTouching(fruitGroup)){
      fruit.destroy();
      score=score+1
    knifeswooshsou.play();
      
    }
      over.visible=false;
     restart.visible=false;
    
  }
  
    

  
  
  
  
  
   if (gameState===win){
     fruit.velocityY=0
  alien.velocity=0
  over=createSprite(300,300)
  over.addImage(youwonImage);
  over.scale=0.5
  fill("")
  text("score:"+score,270,150)
   }
   
    
  if(sword.isTouching(alienGroup)){
    gameState=end;
   gameoversou.play();
    
    fruitGroup.destroyEach();
    alienGroup.destroyEach();
    
    
}
  

 if(gameState===end){
   
  fruit.velocityY=0
  alien.velocity=0
  
  fill("")
  text("score:"+score,250,250)
  
   over.visible=true;
     restart.visible=true;
 
   
   if(mousePressedOver(restart)){
     gameState=play
score=0

     
     
   }
   
}
  



  
drawSprites();    
  
  
}
 
  



function fruits() {
  if(frameCount%20===0 ){
  fruit=createSprite(Math.round(random(1,600)),500,20,20);
   r=Math.round(random(1,4))
  fruit.scale=0.3
  if(r===1){
    fruit.addImage(fruit1);
   }
  if(r===2){
    fruit.addImage(fruit2);
   }
  if(r===3){
    fruit.addImage(fruit3);
   }
  if(r===4){
    fruit.addImage(fruit4);
   }
  
  fruit.velocityY=Math.round(random(-7,-25))
    
  fruit.lifetime=25
   fruitGroup.add(fruit);
    
  }
}

function alien() {
  if(frameCount%90===0){
 var alien=createSprite(Math.round(random(1,600)),500,20,20);
  
  a=Math.round(random(1,2))
  
  
  if(a===1){
    alien.addImage(monsterImage1)
  }
   if(a===2){
     alien.addImage(monsterImage2)
   }   
     
   alien.velocityY=Math.round(random(-7,-25))
  
  alien.lifetime=30
   alienGroup.add(alien);
  }
  
  }
  
