<<<<<<< HEAD
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
=======
function initGame() {

    introMusic.pause();  
    themeSong.play();
    themeSong.loop = true;    
    var idInt = setInterval(update, 1000/frames);
>>>>>>> master
}


function update() {
    
    handleInput();  
    collision();      
    scrollMap();
<<<<<<< HEAD
    for (var i = 0; i < fireWalker.length; i++)
        fireWalker[i].move();
=======
    fireWalker.move();
>>>>>>> master
    fireWalkerCollision();
    fireWolf.move();
    fireWolfCollision();
	handleInputFireBoss();
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