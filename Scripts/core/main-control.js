// IIFE - Immediately Invoked Function Expression

(function () {
 	console.log("Executing script");
 	const SIZE=100;
	const ROWS = 4; 
	const COLS = 72;

    var stage = document.getElementById("stage");
    var canvas = document.getElementById("myCanvas");
	canvas.width = 1400;
    canvas.height = 900;
    var surface = canvas.getContext("2d");

	var leftPressed = false;
	var rightPressed = false;
	var jumpPressed = false;
    
	var isPressed=false;
	var end=false;
	
	var images = [new Image(), new Image(), new Image(), new Image()];
	images[0].src = "./Assets/idle-l.png";
	images[1].src = "./Assets/idle-r.png";
	images[2].src = "./Assets/run-l.png";
	images[3].src = "./Assets/run-r.png";
	var imagesLav=[new Image(),new Image()];
	imagesLav[0].src = "./Assets/lavaTop.png";
	imagesLav[1].src = "./Assets/lavaBot.png";

	var player = {img:null, x:300, y:600, dir:1, idle:true, width:100, height:100};
	
	var frameIndex = 0; 	// Index of the sprite to display via drawImage.
	var currentFrame = 0; 	// Counter for the frames.
	var maxFrames = 3; 		// The number of frames a single sprite is drawn.
	
	var frameLavaIndex = 0; 	// Index of the sprite to display via drawImage.
	var currentLavaFrame = 0; 	// Counter for the frames.
	var maxLavaFrames = 1; 		// The number of frames a single sprite is drawn.

	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);

    var topLeft = new Image();
    topLeft.src = "./Assets/TopLeft.png";

    var botLeft = new Image();
    botLeft.src = "./Assets/BottLeft.png";

    var topMid = new Image();
    topMid.src = "./Assets/TopMid.png";

    var center = new Image();
    center.src = "./Assets/Center.png";

    var topRight = new Image();
    topRight.src = "./Assets/TopRigth.png";

    var botRight = new Image();
    botRight.src = "./Assets/BottRight.png";

    var lavaTop = new Image();
    lavaTop.src = "./Assets/lavaTop.png";

    var lavaBot = new Image();
    lavaBot.src = "./Assets/lavaBot.png";
	
	var leftCorner = new Image();
    leftCorner.src = "./Assets/leftCorner.png";
	
	var rightCorner = new Image();
    rightCorner.src = "./Assets/rightCorner.png";
	
	var middle = new Image();
    middle.src = "./Assets/middle.png";
	
	var rightPlatform = new Image();
    rightPlatform.src = "./Assets/rightPlatform.png";
	
	var leftPlatform = new Image();
    leftPlatform.src = "./Assets/leftPlatform.png";

	var centerCorners= new Image();
    centerCorners.src = "./Assets/centerCorners.png";
	
	var black = new Image();
    black.src = "./Assets/black.png";

    var map =[
				[0,0,0,0,0,0,11,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,14,13,0,1,5,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,11,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,1,6,0,0,0,0,0,1,5,0,0,0,0,0,0,0,11,0,0,0,0,2,6,0,0,0,0,0,0,0,0,0,11,0,0,0,1,3,6,0,0,0,0,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,13,0,0,0,0,0,0],		
				[1,3,3,3,3,9,6,7,7,7,7,7,2,10,3,3,3,3,3,3,3,12,3,3,3,3,9,6,7,7,7,7,7,7,1,3,3,12,3,3,3,9,4,6,7,7,7,7,2,10,3,3,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,1,3,3,5],	
				[2,4,4,4,4,4,6,8,8,8,8,8,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,8,8,8,8,8,8,2,4,4,4,4,4,4,4,4,6,8,8,8,8,2,4,4,4,4,4,4,4,6,8,8,8,8,8,8,8,8,8,8,8,2,4,4,6]
			 ];

	initGame();
	var idInt3 = setInterval(update3, 70);
	var idInt =	setInterval(update, 33.34);
	var idInt2 =	setInterval(update2, 350);
	var n=0;

	function initGame() {
		generateMap();
	}

	function generateMap() {
		//Generating MAP.
		for (var row = 0; row < ROWS; row++) {
			for (var col = 0; col < COLS; col++) {
				var tempTile = {};
				tempTile.x = col * SIZE;
				tempTile.y = (5 + row) * SIZE;
				tempTile.aRock = false;
				tempTile.lava = false;
				switch (map[row][col]) {
					case 0:
						tempTile.img = black;
						break;
					case 1:
						tempTile.img = topLeft;
						tempTile.aRock = true;
						break;
					case 2:
						tempTile.img = botLeft;
						break;
					case 3:
						tempTile.img = topMid;
						break;
					case 4:
						tempTile.img = center;
						break;
					case 5:
						tempTile.img = topRight;
						tempTile.aRock = true;
						break;
					case 6:
						tempTile.img = botRight;
						break;
					case 7:
						tempTile.img = lavaTop;
						tempTile.lava = true;
						break;
					case 8:
						tempTile.img = lavaBot;
						tempTile.lava = true;
						break;
					case 9:
						tempTile.img = leftCorner;
						break;
					case 10:
						tempTile.img = rightCorner;
						break;
					case 11:
						tempTile.img = middle;
						break;
					case 12:
						tempTile.img = centerCorners;
						break;
					case 13:
						tempTile.img = rightPlatform;
						break;
					case 14:
						tempTile.img = leftPlatform;
						break;
				}
				map[row][col] = tempTile;
			}
		}
	}
    
	function update() {
		scrollMap();
		handleInput();
		handleInputLav();
		collisionCheck();
		render();
	}

	function update2() {
		animateLava();
	}

	function update3() {
		animate();
	}

	function scrollMap() {
		if (isPressed && player.x >= 300) {
			for (var row = 0; row < map.length; row++) {
				for (var col = 0; col < map[0].length; col++) {
					map[row][col].x -= 5;
					if (map[map.length - 1][map[0].length - 1].x == 1300) {
						end = true;
						break;
					}
				}
			}
		}
	}

	function onKeyDown(event) {
		switch (event.keyCode) {
			case 65: // A
			case 37: //LEFT
				if (leftPressed == false)
					leftPressed = true;
				break;
			case 68: // D
			case 39: //RIGHT
				isPressed = true;
				if (rightPressed == false)
					rightPressed = true;
				break;
			case 32:
				if (jumpPressed == false)
					jumpPressed = true;
				jump();
				break;
		}
	}

	function jump() {
		player.y -= 100;
		n++;
	}

	function onKeyUp(event) {
		isPressed = false;
		switch (event.keyCode) {
			case 65: // A
			case 37: //LEFT
				leftPressed = false; break;
			case 68: // D
			case 39: //RIGHT
				rightPressed = false; break;
			case 32:
				jumpPressed = false;
				back();
				break;

		}
	}

	function back() {
		player.y += n * 100;
		n = 0;
	}

	function handleInput() {
		if (leftPressed == true) {
			player.img = images[2];
			player.dir = 1;
			player.idle = false;
			if (player.x > 0)
			{ player.x += -5; }
		}
		else if (rightPressed == true) {
			player.img = images[3];
			player.dir = -1;
			player.idle = false;
			if (player.x < 300 || (end == true && player.x < 1300))
			{ player.x += +5; }
		}
		else {
			player.idle = true;
			if (player.dir == 1)
				player.img = images[0];
			else
				player.img = images[1];
		}
	}

	function handleInputLav() {
		for (var c = 0; c < map[0].length; c++) {
			if (map[2][c].lava === true) {
				map[2][c].img = imagesLav[0];
			}
			if (map[3][c].lava === true) {
				map[3][c].img = imagesLav[1];
			}
		}
	}

	function animateLava() {
		currentLavaFrame++;
		if (currentLavaFrame == maxLavaFrames) {
			frameLavaIndex++;
			currentLavaFrame = 0;
			if (frameLavaIndex == 2)
				frameLavaIndex = 0;
		}
	}

	function animate() {
		currentFrame++;
		if (currentFrame == maxFrames) {
			frameIndex++;
			currentFrame = 0;
			if (frameIndex == 4)
				frameIndex = 0;
		}
	}

	function collisionCheck() {
		for (var r = 0; r < map.length; r++) {
			for (var c = 0; c < map[0].length; c++) {
				if (map[1][c].aRock === true) {
					//Collision between ROCKS & PLAYER.
					if ((player.x + player.width - 25 >= map[1][c].x) || (player.y + SIZE <= map[1][c].y)) {
						//clearInterval(idInt);
						//alert("O My God, I crashed...");						
					}
					if (player.y + SIZE >= map[1][c].y) {
						//alert("O My God, I crashed...");
					}
				}
			}
		}
	}	

	function render() {
		surface.clearRect(0, 0, canvas.width, canvas.height);
		for (var row = 0; row < map.length; row++) {
			for (var col = 0; col < map[0].length; col++) {
				surface.drawImage(map[row][col].img,
					map[row][col].x,
					map[row][col].y);
				if (map[2][col].lava === true) {
					surface.drawImage(map[2][col].img,
						frameLavaIndex * 100, 0, 100, 100,
						map[2][col].x, map[2][col].y, 100, 100);
				}
				if (map[3][col].lava === true) {
					surface.drawImage(map[3][col].img,
						frameLavaIndex * 100, 0, 100, 100,
						map[3][col].x, map[3][col].y, 100, 100);
				}
			}
		}
		if (player.idle == true)
			surface.drawImage(player.img, player.x, player.y);
		else
			surface.drawImage(	player.img,
								frameIndex * 100, 0, 100, 100,		// Source rectangle.
								player.x, player.y, 100, 100);	// Dest rectangle.
	}
})();