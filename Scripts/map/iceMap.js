const SIZE=100;
const ROWS = 7;
const COLS = 291;

// Indexes and counters for animations
var frameIceLavaIndex = 0; 	// Index of the Lava sprite to display via drawImage.
var currentIceLavaFrame = 0; 	// Counter for the Lava frames.
var maxIceLavaFrames = 1; 		// The number of frames in a single Lava sprite is drawn.

var frameIceBackgroundIndex = 0; 	// Index of the Background sprite to display via drawImage.
var currentIceBackgroundFrame = 0; 	// Counter for the Backgroundframes.
var maxIceBackgroundFrames = 3; 		// The number of frames a single Background sprite is drawn.

//crating objects for all map tiles
var topLeft = new Image();
topLeft.src = "./Assets/LevelTiles/IceLevel/TopLeft.png";

var botLeft = new Image();
botLeft.src = "./Assets/LevelTiles/IceLevel/BottLeft.png";

var topMid = new Image();
topMid.src = "./Assets/LevelTiles/IceLevel/TopMid.png";

var center = new Image();
center.src = "./Assets/LevelTiles/IceLevel/Center.png";

var topRight = new Image();
topRight.src = "./Assets/LevelTiles/IceLevel/TopRight.png";

var botRight = new Image();
botRight.src = "./Assets/LevelTiles/IceLevel/BottRight.png";

var lavaTop = new Image();
lavaTop.src = "./Assets/LevelTiles/IceLevel/lavaTopSprite.png";

var lavaBot = new Image();
lavaBot.src = "./Assets/LevelTiles/IceLevel/lavaBotSprite.png";

var leftCorner = new Image();
leftCorner.src = "./Assets/LevelTiles/IceLevel/leftCorner.png";

var rightCorner = new Image();
rightCorner.src = "./Assets/LevelTiles/IceLevel/rightCorner.png";

var middle = new Image();
middle.src = "./Assets/LevelTiles/IceLevel/middle.png";

var rightPlatform = new Image();
rightPlatform.src = "./Assets/LevelTiles/IceLevel/rightPlatform.png";

var leftPlatform = new Image();
leftPlatform.src = "./Assets/LevelTiles/IceLevel/leftPlatform.png";

var centerCorners= new Image();
centerCorners.src = "./Assets/LevelTiles/IceLevel/centerCorners.png";

var black = new Image();
black.src = "./Assets/LevelTiles/FireLevel/black.png";

var background = new Image();
background.src = "./Assets/LevelTiles/IceLevel/backgroundSprite.png";

var gameOverbg = new Image();
gameOverbg.src = "./Assets/UI/GameOver.png";

var rightSideWithCorner = new Image();
rightSideWithCorner.src = "./Assets/LevelTiles/IceLevel/rightSideWithCorner.png";

var singlePlatform = new Image();
singlePlatform.src = "./Assets/LevelTiles/IceLevel/singlePlatform.png";


//Creating the map
var map = [
	[0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0, 0, 0, 0, 0, 0,0 ,0, 0, 0,0, 0,0,0,0, 0, 0, 0, 0, 0, 0, 0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0, 0,0, 0, 0, 0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,1,5,0,0, 0, 0,0, 0, 0,0, 0,0, 0,0, 0, 0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0, 0,0,0, 0, 0, 0,0, 0,0, 0,0,14,13, 0, 0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,3,5,0,0,14,13,0,0, 0,0,0,0,0, 0, 0, 0, 0, 0,0, 0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ,0 ,0 ,0 ,0,0 ,0,0 ,0,0 ,0 ,0,0 ,0 ,0 ],
	[0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,11,0,0,0,0,0, 0, 0, 0, 0, 0,0 ,0,11, 5,0, 0,0,0,0, 0, 0, 0,16, 0, 0, 0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,7, 7,7,3, 5,0,16, 0, 0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,12,3,3,3,3,3,9,6,0,0, 0, 0,0, 0, 0,0, 0,0, 0,0, 0, 0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0, 0,0,0, 0, 0, 0,0, 0,0,16,0, 0, 0, 0,16,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,1,9,4,6,0,0, 0, 0,0,0, 0,0,0,0,0, 0, 0, 0, 0, 0,0, 0,0,1, 5,0,0,0,0,0,0,0,0,0,0,0,0,0,1,15,0,0,1, 5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ,0 ,0 ,0 ,0,0 ,0,0 ,0,0 ,0 ,0,0 ,0 ,0 ],
	[0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,2,15,0,0,0,0,0, 0, 0, 0, 0,14,13,0, 2, 6,0, 0,0,0,0, 0, 0,16, 0,16, 0, 0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,9,4,4, 4,4,4, 6,0, 0,16, 0,0,0, 0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,9, 4,4,4,4,4,4,0,0,0,0, 0, 0,0, 0, 0,0,16,0, 0,0, 0, 0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0, 0,0,0, 0, 0, 0,0,16,0, 0,0, 0, 0, 0, 0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,11,0,0,0,0,0,1,9,4,4,6,0,0, 0, 0,0,0, 0,0,0,0,0, 0, 0, 0,14,13,0,16,0,2, 6,0,0,0,0,0,0,0,0,0,0,0,0,1,9, 6,0,0,2, 6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ,0 ,0 ,0 ,0,16,0,0 ,0,0 ,0 ,0,0 ,0 ,0 ],
	[0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,3,9, 6,0,0,0,0,0, 0,14,13, 0, 0,0 ,0, 2,10,5, 0,0,0,0, 0,16, 0, 0, 0,16, 0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,4,4,4,4, 4,4,4,10,5, 0, 0,16,0,0, 0,0,0,0,0,0,0,0,0,1,3,9,4,4,4,4, 4,4,4,4,4,0,0,0,0,0,14,13,0,14,13,0, 0,0,16,0, 0, 0,0,0,0, 0,0,0,0,0,0,0,0,0,1, 5, 0,0,0, 0,0,0, 0,14,13,0, 0,0, 0,0, 0, 0,16,11,0,0,0,0,0,11, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,1,15,0,0,0,0,1,9,4,4,4,6,0,0, 0, 0,0,0, 0,0,0,0,0, 0,14,13, 0, 0,0, 0,0,2, 6,0,0,0,0,0,0,0,0,0,0,0,1,9,4, 6,0,0,2, 6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ,0 ,0 ,16,0,0 ,0,16,0,0 ,0 ,0,0 ,0 ,0 ],
	[0,0,0,0,0,0,0,1,3, 5,0,0,1,3,9,4,4, 6,0,0,0,0,0,16, 0, 0, 0, 0,0 ,0, 2, 4,6,16,0,0,0,16, 0, 0, 0, 0, 0,16,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,4,4,4,4,4, 4,4,4, 4,6, 0, 0, 0,0,1, 5,0,0,0,0,0,1,3,3,9,4,4,4,4,4,4, 4,4,4,4,4,0,0,0,0,0, 0, 0,0, 0, 0,0, 0,0, 0,0,14,13,0,1,3, 5,0,0,0,0,0,0,0,1,9,10, 5,0,0,11,0,1, 5, 0, 0,0, 0,0, 0,0, 0, 0, 0,10,3,3,3,3,3,12, 5,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,1,15,0,0,0,0,0,1,9, 6,0,0,0,1,9,4,4,4,4,6,0,0, 0, 0,7,3, 5,0,0,0,0,16, 0, 0, 0, 0,0, 0,0,2, 6,0,0,0,0,0,0,0,0,0,0,1,9,4,4, 6,0,0,2, 6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,14,13,0 ,0 ,0,0 ,0,0 ,0,14,13,0,0 ,14,13],
	[1,3,3,3,3,3,3,9,4,10,3,3,9,4,4,4,4,10,3,3,7,3,7, 7, 7, 7, 7, 7,7 ,7, 4, 4,4, 7,7,3,3, 3, 3, 7, 7, 7, 3, 3,7, 3,3,3,3,3,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,9,4,4,4,4,4,4, 4,4,4, 4,4, 7, 3, 3,3,9,10,3,3,3,3,3,9,4,4,4,4,4,4,4,4,4, 4,4,4,4,4,7,7,7,7,7, 7, 7,7, 7, 7,7, 7,7, 7,7, 7, 7,3,4,4,10,3,3,3,3,3,3,3,9,4, 4,10,3,3, 9,7,3,10, 3, 3,3, 3,3, 3,7, 7, 7, 7, 4,4,4,4,4,4, 4,10,3,3,3,3,3,3,3,12,3,3,3,3,3,3,3,9,10,3,3,3,3,3,9,3,10,3,3,3,9,4,4,4,4,4,4,7,7, 7, 7,3,4,10,3,3,3,3, 3, 7, 7, 7, 7,7, 7,7,4,10,3,3,3,3,3,3,3,3,3,3,9,4,4,4, 4,7,7,4,10,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,4,7,7 ,7 ,7 ,7 ,7,7 ,7,7 ,7,7 ,7 ,7,7 ,7 ,7 ],
	[2,4,4,4,4,4,4,4,4, 4,4,4,4,4,4,4,4, 4,4,4,4,4,4, 4, 4, 4, 4, 4,4 ,4, 4, 4,4, 4,4,4,4, 4, 4, 4, 4, 4, 4, 4,4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4, 4,4,4, 4,4, 4, 4, 4,4,4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4, 4,4,4,4,4,4,4,4,4,4, 4, 4,4, 4, 4,4, 4,4, 4,4, 4, 4,4,4,4, 4,4,4,4,4,4,4,4,4,4, 4, 4,4,4, 4,4,4, 4, 4, 4,4, 4,4, 4,4, 4, 4, 4, 4,4,4,4,4,4, 4, 4,4,4,4,4,4,4,4, 4,4,4,4,4,4,4,4,4, 4,4,4,4,4,4,4,4, 4,4,4,4,4,4,4,4,4,4,4,4,4, 4, 4,4,4, 4,4,4,4,4, 4, 4, 4, 4, 4,4, 4,4,4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4, 4,4,4,4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4 ,4 ,4 ,4 ,4,4 ,4,4 ,4,4 ,4 ,4,4 ,4 ,4 ]
];

//A set interval to animate Lava & Background
var idIntIce2 =setInterval(updateIce2, 350);
var idIntIce4 = setInterval(backUpdateIce, 75);

function generateIceMap()
{
    //Generating MAP.
    for (var row = 0; row < ROWS; row++)
    {
        for (var col = 0; col < COLS; col++)
        {
            var tempTile = {};
            tempTile.x=col*SIZE;
            tempTile.y=(2+row)*SIZE;
            tempTile.aRock=false; //If the image is a tile
            tempTile.empty=false; //If there is an empty image
            tempTile.lava=false; // If the image is lava
            tempTile.smallPlatform = false; // If the image is a small platform
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
                    tempTile.smallPlatform = true;
                    break;
            }
            map[row][col] = tempTile;
        }
    }
}

function updateIce2()
{
    animateIceLava();
}

function backUpdateIce()
{
    animateIceBackground();
}

function animateIceLava()
{
	//To animate the Lava top & botom images     
    if (currentIceLavaFrame == maxIceLavaFrames)
    {
        frameIceLavaIndex++;
        currentIceLavaFrame = 0;
        if (frameIceLavaIndex == 2)
            frameIceLavaIndex = 0;
    }
    currentIceLavaFrame++;
}

function animateIceBackground()
{
	//To animate the Background image 
    currentIceBackgroundFrame++;
    if (currentIceBackgroundFrame == maxIceBackgroundFrames)
    {
        frameIceBackgroundIndex++;
        currentIceBackgroundFrame = 0;
        if (frameIceBackgroundIndex == 4)
            frameIceBackgroundIndex = 0;
    }
}
/*
function loadIceLevel()
{
themeSong.pause();

var iceThemeSong = new Audio();
iceThemeSong.src = "./Assets/Sound/Ice/IceStage1.mp3";
iceThemeSong.load();
iceThemeSong.play();
iceThemeSong.loop = true;

    
topLeft.src = "./Assets/LevelTiles/IceLevel/TopLeft.png";

botLeft.src = "./Assets/LevelTiles/IceLevel/BottLeft.png";

topMid.src = "./Assets/LevelTiles/IceLevel/TopMid.png";

center.src = "./Assets/LevelTiles/IceLevel/Center.png";

topRight.src = "./Assets/LevelTiles/IceLevel/TopRight.png";

botRight.src = "./Assets/LevelTiles/IceLevel/BottRight.png";

lavaTop.src = "./Assets/LevelTiles/IceLevel/lavaTopSprite.png";

lavaBot.src = "./Assets/LevelTiles/IceLevel/lavaBotSprite.png";

leftCorner.src = "./Assets/LevelTiles/IceLevel/leftCorner.png";

rightCorner.src = "./Assets/LevelTiles/IceLevel/rightCorner.png";

middle.src = "./Assets/LevelTiles/IceLevel/middle.png";

rightPlatform.src = "./Assets/LevelTiles/IceLevel/rightPlatform.png";

leftPlatform.src = "./Assets/LevelTiles/IceLevel/leftPlatform.png";

centerCorners.src = "./Assets/LevelTiles/IceLevel/centerCorners.png";

background.src = "./Assets/LevelTiles/IceLevel/backgroundSprite.png";

rightSideWithCorner.src = "./Assets/LevelTiles/IceLevel/rightSideWithCorner.png";

singlePlatform.src = "./Assets/LevelTiles/IceLevel/singlePlatform.png";

fireWalkerImg[0].src = "./Assets/Enemy/IcePlanet/IceHumanoidSpriteR.png";

fireWalkerImg[1].src = "./Assets/Enemy/IcePlanet/IceHumanoidSpriteL.png";

fireWolfImg[0].src = "./Assets/Enemy/IcePlanet/IceBearSpriteR.png";

fireWolfImg[1].src = "./Assets/Enemy/IcePlanet/IceBearSpriteL.png";

}*/



