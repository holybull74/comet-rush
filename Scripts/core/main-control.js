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

    var frameIndex = 0; 	// Index of the sprite to display via drawImage.
	var currentFrame = 0; 	// Counter for the frames.
	var maxFrames = 3; 		// The number of frames a single sprite is drawn.

    var player = {
        img: null, x: 300, y: 600, dir: 1, idle: true,
        animate: function () {
            currentFrame++;
            if (currentFrame == maxFrames) {
                frameIndex++;
                currentFrame = 0;
                if (frameIndex == 4)
                    frameIndex = 0;
            }
        }
    };
	
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
    topRight.src = "./Assets/TopRight.png";

    var botRight = new Image();
    botRight.src = "./Assets/BottRight.png";

    var lavaTop = new Image();
    lavaTop.src = "./Assets/lavaTop.png";

    var lavaBot = new Image();
    lavaBot.src = "./Assets/lavaBot.png";

	var black = new Image();
    black.src = "./Assets/black.png";

    var map =[
				[0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,1,5,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,1,6,0,0,0,0,0,1,5,0,0,0,0,0,0,0,3,0,0,0,0,2,6,0,0,0,0,0,0,0,0,0,3,0,0,0,1,3,6,0,0,0,0,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,0,0,0,0],	
				[1,3,3,3,3,4,6,7,7,7,7,7,2,4,3,3,3,3,3,3,3,3,3,3,3,3,4,6,7,7,7,7,7,7,1,3,3,3,3,3,3,4,4,6,7,7,7,7,2,4,3,3,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,1,3,3,5],
				[2,4,4,4,4,4,6,8,8,8,8,8,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,8,8,8,8,8,8,2,4,4,4,4,4,4,4,4,6,8,8,8,8,2,4,4,4,4,4,4,4,6,8,8,8,8,8,8,8,8,8,8,8,2,4,4,6]	
			 ];

    var idInt =	setInterval(update, 33.34);
    var n=0;

	initGame();

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
                switch (map[row][col]) {
                    case 0:
                        tempTile.img = black;
                        break;
                    case 1:
                        tempTile.img = topLeft;
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
                        break;
                    case 6:
                        tempTile.img = botRight;
                        break;
                    case 7:
                        tempTile.img = lavaTop;
                        break;
                    case 8:
                        tempTile.img = lavaBot;
                        break;
                }
                map[row][col] = tempTile;
            }
        }
    } 
	
    function update() {
        scrollMap();
        handleInput();
        animate();
        render();
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
        player.y -= 30;
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
        player.y += n * 30;
        n = 0;
    }

    function handleInput() {
        if (leftPressed == true) {
            player.img = images[2];
            player.dir = 1;
            player.idle = false;
            if (player.x > 0)
            { player.x -= 5; }
        }
        else if (rightPressed == true) {
            player.img = images[3];
            player.dir = -1;
            player.idle = false;
            if (player.x < 300 || (end == true && player.x < 1300))
            { player.x += 5; }
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
        setTimeout(animate, 1000);
        player.animate();
    }

    function render() {
        surface.clearRect(0, 0, canvas.width, canvas.height);
        for (var row = 0; row < map.length; row++) {
            for (var col = 0; col < map[0].length; col++) {
                surface.drawImage(  map[row][col].img,
                                    map[row][col].x,
                                    map[row][col].y);
            }
        }
        if (player.idle == true)
            surface.drawImage(  player.img, 
                                player.x, 
                                player.y);
        else
            surface.drawImage(  player.img,
                                frameIndex * 100, 0, 100, 100,		// Source rectangle.
                                player.x, player.y, 100, 100);	// Dest rectangle.
    }
})();

