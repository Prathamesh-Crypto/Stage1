class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        background(backgroundImage)
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
  
      Tank1 = createSprite(displayWidth/2+40,displayHeight/4-140);
      Tank1.addImage(TankImage1);
      Tank1.scale = 0.5
      Tank2 = createSprite(displayWidth/1-140,displayHeight/2);
      Tank2.addImage(TankImage2);
      Tank2.scale = 0.5
      Tank3 = createSprite(displayWidth/4-350,displayHeight/2);
      Tank3.addImage(TankImage3);
      Tank3.scale = 0.5
      Tank4 = createSprite(displayWidth/2+40,displayHeight/1-140);
      Tank4.addImage(TankImage4);
      Tank4.scale = 0.5
       Tanks = [Tank1, Tank2, Tank3, Tank4];
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(backgroundImage);

        //var display_position = 100;
        
        //index of the array
        var index = 0;
      }
      
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        
        //use data form the database to display the cars in y direction
        var x = Tanks[index-1].x
        var y = Tanks[index-1].y

       // console.log(index, player.index)
  
       if(index === player.index){
        text(allPlayers[plr].name, x,y)
        
      }
      }

      /*if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }*/
  
      drawSprites();
    }
  }