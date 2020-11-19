//Create variables here
var dog,happyDog;
var database;
var food,foodStock;
var dogImage;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.1;

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87);

 if(keyDown(UP_ARROW)){
   writeStock(food);
   dog.addImage(happyDog);
 }
  
 textSize(20);
 stroke("red");
 text("Note:Press UP_ARROW to feed Drago milk",100,20);
  //add styles here

  drawSprites();

  fill(255,255,254);
   stroke("black");
    text("Food remaining : "+foodStock,170,200);
    
  
}

function readStock(data){
 foodStock=data.val();
}

function writeStock(x){
  if(x<0){
    x=0;
   } else{
     x=x+1;
   }
  
database.ref('/'.update({
  Food:x
}))
}



