
var trex,trex_running,ground,groungimage,invisibleGround
function preload() {
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groungimage=loadImage("ground2.png")
}

function setup() 
{
  createCanvas(400,400);
  /*var friends=["Arnav","Joseph"];
  console.log(friends.length);
  
 var sum = 0;
var marks = [34,60,3,19,34]
//var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
for(var i=0;i<marks.length;i=i+1){
sum=sum+marks[i]

}*/
console.log(sum/marks.length)

                                                 
trex=createSprite(50,160,20,50)
trex.addAnimation("running",trex_running)
ground=createSprite(200,380,400,10)
ground.addImage(groungimage)
ground.velocityX=-4;
invisibleGround=createSprite(200,390,400,5)
invisibleGround.visible=false;
}


function draw() 
{
background(220);
if (keyDown("space")){
trex.velocityY=-5

}
if (ground.x<0){
ground.x=ground.width/2


}




trex.collide(invisibleGround)

trex.velocityY=trex.velocityY+0.5




drawSprites()
}

