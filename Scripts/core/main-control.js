
var mainUpdateInterval;

function initGame() {

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