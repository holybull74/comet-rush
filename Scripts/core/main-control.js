var inTransition = false;
var transitionToIceLevel = false;
var transitionToFinalStage = false;
var gameOver = false;
var transitionTime = 0.0;
var mainUpdateInterval;
var divHealthBar = document.getElementById("healthBar");
var divHealthP = document.getElementById("healthPercentage");
var maxKenHealth = false;

function initGame() {   
    maxKenHealth = true; 
    divHealthBar.style.visibility = "visible";
    divHealthP.style.visibility = "visible";
    introMusic.pause();
    if(playSounds)
    {
       themeSong.play();
       themeSong.loop = true;
    } 
    //loadIceLevel();        
    mainUpdateInterval = setInterval(update, 1000/frames);
    arriveToStage();
    //teleportOut();
}


function update() {
    
    handleInput();  
    collision();      
    scrollMap();   
    
    if(!transitionToIceLevel && !transitionToFinalStage)
        {
            for (var i = 0; i < fireWalker.length; i++)
                fireWalker[i].move();

            fireWalkerCollision();
            for (var i = 0; i < fireWolf.length; i++)
                fireWolf[i].move();

            fireWolfCollision();
            moveBoss();
            fireBossCollision();
        }  
    if(transitionToIceLevel && !transitionToFinalStage)
        {
            for (var i = 0; i < iceWalker.length; i++)
                 iceWalker[i].move();

             iceWalkerCollision();
             for (var i = 0; i < iceBear.length; i++)
                 iceBear[i].move();

             iceBearCollision();
             moveiceBoss();
	         iceBossCollision();
        }
      
   
    render();
}

function teleportOut()
{    
    frameIndex = 0;
    player.img = images[14];        
    playerTeleportSound.play();
    setTimeout(fadeInterval, 667);
}

function fadeInterval()
{
  
    stageArrivalDrawPermit = false;
    clearInterval(playerAnimationIntervalID);
    stageArrival = true;
    stageDeparture = false;
    inTransition = true;        
    fadeTransition = setInterval(function(){screenTransition(1)}, 1000/frames);
}

function screenTransition(stageSelection)
{
    surface.fillStyle = "rgba(0,0,0, 0.2)";
    surface.fillRect(0, 0, canvas.width, canvas.height);
    transitionTime += 0.1;

        if (transitionTime >= 5) 
        {
            if(stageSelection === 1) // Load stage 1 ice level
                {
                   
                    clearInterval(fadeTransition);
                    themeSong.pause();
                    generateIceMap();   
                    createIceBears();
                    createIceWalkers();              
                    transitionToIceLevel = true;                    
                    iceThemeSong.play();
                    player.x = 300;
                    player.y = 600;
                    iceThemeSong.loop = true;
                    transitionTime = 0.0;  
                    stageArrivalTimer = 0;
                    inTransition = false;                    
                    arriveToStage();               

                }
            if(stageSelection === 2) // Load Final Stage
                {

                }
            
        }

}

// New
function toIceLevel(){
    alert('To next level , Coming SOON!...');
}

function gameEnd()
{  
   clearInterval(mainUpdateInterval);
   renderGameOver();
   setTimeout(closeTab,5000);

}

function closeTab()
{   
    open(location, '_self').close(); 
}