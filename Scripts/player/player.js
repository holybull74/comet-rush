//Player
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

	var player = {img:null, x:300, y:600, dir:1, idle:true, width:100, height:100};
	
	var frameIndex = 0; 	// Index of the sprite to display via drawImage.
	var currentFrame = 0; 	// Counter for the frames.
	var maxFrames = 3; 		// The number of frames a single sprite is drawn.
	
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);

	var idInt3 = setInterval(update3, 70);

	var n=0;

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

    

	

	

	function animate() {
		currentFrame++;
		if (currentFrame == maxFrames) {
			frameIndex++;
			currentFrame = 0;
			if (frameIndex == 4)
				frameIndex = 0;
		}
	}