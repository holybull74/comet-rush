var gameOver = false;
var mainUpdateInterval;
var divHealthBar = document.getElementById("healthBar");
var divHealthP = document.getElementById("healthPercentage");

function initGame() {    
    divHealthBar.style.visibility = "visible";
    divHealthP.style.visibility = "visible";
    introMusic.pause();  
    themeSong.play();
    themeSong.loop = true;    
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
function bossDeath(){
    alert('Victory!');
}

function gameEnd()
{   
   clearInterval(mainUpdateInterval);
   renderGameOver();
}