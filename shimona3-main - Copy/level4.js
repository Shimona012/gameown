function level4(){
console.log("Level 4!");
bb.visible=false;
  if(Minu.isTouching(bbees,bb2,bb3)){
          sirensound.play();
         
      }
      else{
          sirensound.stop();
      }
      
      text("Shift to move faster",100,380);
}
function keyPressed(){
    if(keyCode===16){
        if(keyDown("RIGHT_ARROW")){
            Minu.x=Minu.x+15;
          }
      
          if(keyDown("LEFT_ARROW")){
            Minu.x=Minu.x-15;
          }
      
          if(keyDown("UP_ARROW")){
            Minu.y=Minu.y-15;
          }
      
          if(keyDown("DOWN_ARROW")){
            Minu.y=Minu.y+15;
          }
    }
}

