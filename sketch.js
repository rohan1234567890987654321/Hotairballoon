var hotAirBalloon, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hotAirBalloon = createSprite(250,250,10,10);
  //hotAirBalloon.image("")


  var hotAirBalloon = database.ref('hotAirBalloon/position');
  hotAirBalloon.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('hotAirBalloon/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hotAirBalloon.x = position.x;
  hotAirBalloon.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
