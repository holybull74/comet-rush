var gameoverPic = true;
var mainUpdateInterval;

function initGame() {
    var divHealthBar = document.getElementById("healthBar");
    var divHealthP = document.getElementById("healthPercentage");
    divHealthBar.style.visibility = "visible";
    divHealthP.style.visibility = "visible";
    introMusic.pause();  
    themeSong.play();
    themeSong.loop = true;    
    mainUpdateInterval = setInterval(update, 1000/frames);
}


function update() {
    
    handleInput();  
    collision();      
    scrollMap();
    fireWalker.move();
    fireWalkerCollision();
    fireWolf.move();
    fireWolfCollision();
	handleInputFireBoss();
	moveBoss();
	fireBossCollision();
    render();
}