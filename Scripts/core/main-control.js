// IIFE - Immediately Invoked Function Expression

(function () {
 	console.log("Executing script");
	//Canvas
    var stage = document.getElementById("stage");
    var canvas = document.getElementById("myCanvas");
	canvas.width = 1400;
    canvas.height = 900;
    var surface = canvas.getContext("2d");

	//Main
	initGame();
	
	var idInt =	setInterval(update, 33.34);
	
	function initGame() {
		generateMap();
	}
    
	function update() {
		scrollMap();
		handleInput();
		handleInputLav();
		collisionCheck();
		render();
	}
})();