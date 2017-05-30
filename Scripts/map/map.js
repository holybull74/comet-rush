//Map
 	const SIZE=100;
	const ROWS = 4; 
	const COLS = 72;

    //Canvas
    var stage = document.getElementById("stage");
    canvas = document.getElementById("myCanvas");
    canvas.width = 1400;
    canvas.height = 900;
    surface = canvas.getContext("2d");

	var frameLavaIndex = 0; 	// Index of the sprite to display via drawImage.
	var currentLavaFrame = 0; 	// Counter for the frames.
	var maxLavaFrames = 1; 		// The number of frames a single sprite is drawn.

	var frameBackgroundIndex = 0; 	// Index of the sprite to display via drawImage.
	var currentBackgroundFrame = 0; 	// Counter for the frames.
	var maxBackgroundFrames = 5; 		// The number of frames a single sprite is drawn.

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

	var background = new Image();
	background.src = "./Assets/backgroundSprite.png";

    var rightSideWithCorner = new Image();
    rightSideWithCorner.src = "./Assets/rightSideWithCorner.png";

    var singlePlatform = new Image();
    singlePlatform.src = "./Assets/singlePlatform.png";

var map =[
    [0,0,0,0,0,0,11,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,14,13,0,1,5,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,11,0,0,16,0,0,0,0,0,0,0,0,0,0,0,16,0,0,16,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,15,0,0,0,0,0,1,5,0,0,0,0,0,0,0,11,0,0,0,0,2,6,0,0,0,0,0,0,0,0,0,11,0,0,0,1,3,15,0,0,0,0,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,13,0,0,0,0,0,0],
    [1,3,3,3,3,9,6,7,7,7,7,7,2,10,3,3,3,3,3,3,3,12,3,3,3,3,9,6,7,7,7,7,7,7,1,3,3,12,3,3,3,9,4,6,7,7,7,7,2,10,3,3,3,3,3,3,5,7,7,7,7,7,7,7,7,7,7,7,1,3,3,5],
    [2,4,4,4,4,4,6,8,8,8,8,8,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,8,8,8,8,8,8,2,4,4,4,4,4,4,4,4,6,8,8,8,8,2,4,4,4,4,4,4,4,6,8,8,8,8,8,8,8,8,8,8,8,2,4,4,6]
];

	var idInt2 =setInterval(update2, 350);

function generateMap()
{
    //Generating MAP.
    for (var row = 0; row < ROWS; row++)
    {
        for (var col = 0; col < COLS; col++)
        {
            var tempTile = {};
            tempTile.x=col*SIZE;
            tempTile.y=(5+row)*SIZE;
            tempTile.aRock=false;
            tempTile.empty=false;
            tempTile.lava=false;
            switch(map[row][col])
            {
                case 0:
                    tempTile.img=black;
                    tempTile.empty=true;
                    break;
                case 1:
                    tempTile.img=topLeft;
                    tempTile.aRock=true;
                    break;
                case 2:
                    tempTile.img=botLeft;
                    tempTile.aRock=true;
                    break;
                case 3:
                    tempTile.img=topMid;
                    tempTile.aRock=true;
                    break;
                case 4:
                    tempTile.img=center;
                    tempTile.aRock=true;
                    break;
                case 5:
                    tempTile.img=topRight;
                    tempTile.aRock=true;
                    break;
                case 6:
                    tempTile.img=botRight;
                    tempTile.aRock=true;
                    break;
                case 7:
                    tempTile.img=lavaTop;
                    tempTile.lava=true;
                    break;
                case 8:
                    tempTile.img=lavaBot;
                    tempTile.lava=true;
                    break;
                case 9:
                    tempTile.img=leftCorner;
                    tempTile.aRock=true;
                    break;
                case 10:
                    tempTile.img=rightCorner;
                    tempTile.aRock=true;
                    break;
                case 11:
                    tempTile.img=middle;
                    tempTile.aRock=true;
                    break;
                case 12:
                    tempTile.img=centerCorners;
                    tempTile.aRock=true;
                    break;
                case 13:
                    tempTile.img=rightPlatform;
                    tempTile.aRock=true;
                    break;
                case 14:
                    tempTile.img=leftPlatform;
                    tempTile.aRock=true;
                    break;
                case 15:
                    tempTile.img=rightSideWithCorner;
                    tempTile.aRock=true;
                    break;
                case 16:
                    tempTile.img=singlePlatform;
                    tempTile.aRock=true;
                    break;
            }
            map[row][col] = tempTile;
        }
    }
}

	function update2() {
		animateLava();
        animateBackground();
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

	function animateBackground()
	{
		currentBackgroundFrame++;
		if (currentBackgroundFrame == maxBackgroundFrames)
		{
			frameBackgroundIndex++;
			currentBackgroundFrame = 0;
			if (frameBackgroundIndex == 6)
				frameBackgroundIndex = 0;
		}
	}