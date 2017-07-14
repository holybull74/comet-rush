function loadIceLevel()
{
themeSong.pause();

themeSong.src = "./Assets/Sound/Ice/IceStage1.mp3";

themSong.load();

themeSong.play();

themeSong.loop = true;
    
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

}