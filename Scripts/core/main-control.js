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
    fireWolf.move();
    fireWolfCollision();
	moveBoss();
	fireBossCollision();
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