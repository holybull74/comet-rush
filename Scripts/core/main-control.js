function initGame(){
        console.log("Generating map)");
        var idInt = setInterval(update, 33.34);
        themeSong.load();
        themeSong.play();
        themeSong.loop = true;
        generateMap();
}


function update(){
        collision();
        scrollMap();
        handleInput();
        fireWalker.move();
        fireWalkerCollision();
        back();
        render();
}