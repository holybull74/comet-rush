function initGame() {
    console.log("Generating map)");
    canvas.removeEventListener("mousemove", checkPos);
    canvas.removeEventListener("mouseup", checkClick);
    clearInterval(fadeId);
    clearInterval(timerId);
    clearInterval(updateUI);
    introMusic.pause();
    var idInt = setInterval(update, 33.34);
    themeSong.load();
    themeSong.play();
    themeSong.loop = true;
    generateMap();
}


function update() {
    collision();
    scrollMap();
    handleInput();
    fireWalker.move();
    fireWalkerCollision();
    back();
    render();
}