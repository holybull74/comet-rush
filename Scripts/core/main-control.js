var gameOver = false;
var mainUpdateInterval;
var divHealthBar = document.getElementById("healthBar");
var divHealthP = document.getElementById("healthPercentage");

function initGame() {    
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
}


function update() {
    
    handleInput();  
    collision();      
    scrollMap();
    for (var i = 0; i < fireWalker.length; i++)
        fireWalker[i].move();
    fireWalkerCollision();
    for (var i = 0; i < fireWolf.length; i++)
        fireWolf[i].move();
    fireWolfCollision();
	//moveBoss();
	//fireBossCollision();
	moveiceBoss();
	iceBossCollision();
    render();
}

// New
function toIceLevel(){
    alert('To next level , Coming SOON!...');
}

function gameEnd()
{  
   clearInterval(mainUpdateInterval);
   renderGameOver();
}
