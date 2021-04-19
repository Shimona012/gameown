function level3(){
    console.log("level 3");
    background(bg2);
    //Minu.collide(bg2i);
    //bg2i.visible=true;
 
    //Minu.visible=false;
    if(frameCount%30===0){
        comb();
    }
    bb.visible=false;
    redG.destroyEach();
    pinkG.destroyEach();
    blueG.destroyEach();
    yellowG.destroyEach();
   // Minu.velocityX;
   text("Honey:"+score,700,50);
   text("Bitten:"+bitten,550,50);
   if(frameCount%20===0&&bitten>=1){
    bitten=bitten-1;
    }
    if(bb2.isTouching(Minu)||bb3.isTouching(Minu)||bbees.isTouching(Minu)){
        bitten=bitten+1;
      }
    bbees.bounceOff(edges);
    bb2.bounceOff(edges);
    bb3.bounceOff(edges);  
    bb2.changeAnimation("gb",gbi);
    bb3.changeAnimation("gb",gbi);
    bbees.changeAnimation("gb",gbi);
   /* fill("black");
    textSize(25);
    text("LEVEL 3",400,200);*/
    if(keyDown("RIGHT_ARROW")){
        Minu.x=Minu.x+5;
      }
  
      if(keyDown("LEFT_ARROW")){
        Minu.x=Minu.x-5;
      }
  
      if(keyDown("UP_ARROW")){
        Minu.y=Minu.y-5;
      }
  
      if(keyDown("DOWN_ARROW")){
        Minu.y=Minu.y+5;
      }
    }
    if(bitten>20){
        gameState="end";
        //byee.stop();
      }
  
    