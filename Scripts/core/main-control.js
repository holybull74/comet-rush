function initGame() {

    introMusic.pause();  
    themeSong.play();
    themeSong.loop = true;    
    var idInt = setInterval(update, 1000/frames);
}


function update() {
    
    handleInput();  
    collision();      
    scrollMap();
    fireWalker.move();
    fireWalkerCollision();
    fireWolf.move();
    fireWolfCollision();
    render();
}