const ROWS = 5;
const COLS = 14;

function generateFinalMap()
{
    topLeft.src = "./Assets/LevelTiles/FinalLevel/TopLeft.png";
	
    botLeft.src = "./Assets/LevelTiles/FinalLevel/BottLeft.png";
	
    topMid.src = "./Assets/LevelTiles/FinalLevel/TopMid.png";
	
    center.src = "./Assets/LevelTiles/FinalLevel/Center.png";
	
    topRight.src = "./Assets/LevelTiles/FinalLevel/TopRight.png";
	
    botRight.src = "./Assets/LevelTiles/FinalLevel/BottRight.png";
	
    rightPlatform.src = "./Assets/LevelTiles/IceLevel/rightPlatform.png";
	
    leftPlatform.src = "./Assets/LevelTiles/IceLevel/leftPlatform.png";
	
    background.src = "./Assets/LevelTiles/IceLevel/backgroundSprite.png";
	
    healthBarImage.src="./Assets/UI/HealthFire.png";
	
    healthBarImage.width=500;
	
    healthBarImage.height=40;
       
    //Generating MAP.
      map = [
		[0,14,13,0,0,0,0,0,0,0,0,14,13,0]
		[0, 0, 0,0,0,0,0,0,0,0,0, 0, 0,0],
		[1, 3, 3,5,0,0,1,5,0,0,1, 3, 3,5],
		[2, 4, 4,4,3,3,4,4,3,3,4, 4, 4,6],
		[2, 4, 4,4,4,4,4,4,4,4,4, 4, 4,6]
	];

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
                case 11:
                    tempTile.img=middle;
                    tempTile.aRock=true;
                    break;
                case 13:
                    tempTile.img=rightPlatform;
                    tempTile.aRock=true;
                    break;
                case 14:
                    tempTile.img=leftPlatform;
                    tempTile.aRock=true;
					tempTile.smallPlatform = true;
                    break;
            }
            map[row][col] = tempTile;
        }
    }
}