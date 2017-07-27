//Fire Boss
var textDraw=false;
var bossHealthBarDraw=false;
var bossArmAttackAnimation = false;
var audioBoss=document.createElement("audio");
audioBoss.setAttribute("src","./Assets/Sound/Fire/FireBoss.mp3");

var audioIntoBoss=document.createElement("audio");
audioIntoBoss.setAttribute("src","./Assets/Sound/BossIntro.mp3");

var audioPlayerDeath = document.createElement("audio");
audioPlayerDeath.setAttribute("src","./Assets/Sound/Effects/HeroDeath.wav");

//Fire boss array of images
var imagesB = [new Image(), new Image()]//, new Image(), new Image(), new Image(), new Image()];
imagesB[0].src = "./Assets/Enemy/IcePlanet/IceBossSpriteL.png";
imagesB[1].src = "./Assets/Enemy/IcePlanet/IceBossSpriteR.png";
//imagesB[2].src = "./Assets/Enemy/FirePlanet/FireBossAttackSpriteL.png";
//imagesB[3].src = "./Assets/Enemy/FirePlanet/FireBossAttackSpriteR.png";
//imagesB[4].src = "./Assets/Enemy/FirePlanet/FireBossNoArmSpriteL.png";
//imagesB[5].src = "./Assets/Enemy/FirePlanet/FireBossNoArmSpriteR.png";

var bossArmImgL = new Image();
bossArmImgL.src = "./Assets/Enemy/FirePlanet/FireBossArmL.png";
var bossArmImgR = new Image();
bossArmImgR.src = "./Assets/Enemy/FirePlanet/FireBossArmR.png";



var healthBarImage=new Image();
var healthBarFrameImg = new Image();
healthBarImage.src="./Assets/UI/HealthFire.png";
healthBarFrameImg.src = "./Assets/UI/HealthFrame.png";
healthBarImage.width=500;
healthBarImage.height=40;
healthBarFrameImg.width = 500;
healthBarFrameImg.height = 40;



var iceBoss={x:28900,y:450,dir:1,img: imagesB[0],width:200,height:150,onground:true,health:20};

var iceBossFrameIndex = 0; 	// Index of the Boss sprite to display via drawImage.
var iceBossCurrentFrame = 0; 	// Counter for the Boss frames.
var iceBossMaxFrames = 3; 		// The number of frames in a single boss sprite is drawn.

var idInticeB = setInterval(updateiceB, 70);

function updateiceB()
{	
	animateiceBoss();
}

function moveiceBoss()
{
	if(isPressed && player.x >= 300&&end==false)
	{	
		if(iceBoss.dir === 1)
		{
			iceBoss.x-=8;
			
			if(iceBoss.x<0)
			{
				iceBoss.dir = -1;
			}
		}
		if(iceBoss.dir === -1)
		{
			iceBoss.x+=8;

			if(iceBoss.x>1300)
			{
				iceBoss.dir = 1;
			}
		}
		if(iceBoss.x==1820)
		{
			themeSong.pause();
			if(playSounds)
			{
				audioIntoBoss.play();
			}
			
			textDraw=true;
		}
		if(iceBoss.x==1580)
		{
			if(playSounds)
			{
				audioIntoBoss.pause();
				audioBoss.play();
				audioBoss.loop = true;
			}
			textDraw=false;		
		}
	}	
	if((isPressed==false&&end==true)||(isPressed==true&&end==true))
	{
		//Distance from the center of the player to the center of the boss on X
		var vectorX =  (player.x + SIZE/2) - (iceBoss.x + iceBoss.width/2);
		
		if(vectorX < 0)
		{
			
			if(vectorX > -144 && vectorX < 0 )
				{						
					bossArmAttackAnimation = true;	
					//iceBoss.img=imagesB[2];
				}
			else if(vectorX < -144)
				{
					bossArmAttackAnimation = false;
				}

		}
		else if( vectorX > 0)
		{
			if(vectorX <144 && vectorX > 0 )
				{	
					
					bossArmAttackAnimation = true;	
					//iceBoss.img=imagesB[3];
				}
			else if(vectorX > 144)
				{
					bossArmAttackAnimation = false;
				}
		}
			
		bossHealthBarDraw=true;
		if(iceBoss.dir==1)
		{
			if(!bossArmAttackAnimation)
			{
			  	iceBoss.img=imagesB[0];
			}

			iceBoss.x-=8;

			if(iceBoss.x<0)
			{
				iceBoss.dir=-1;
			}
		}
		if(iceBoss.dir==-1)
		{
			if(!bossArmAttackAnimation)
			{
				iceBoss.img=imagesB[1];
			}

			iceBoss.x+=8;
				console.log(iceBoss.x);
			if(iceBoss.x>1292)
			{
				iceBoss.dir=1;
			}
		}
	}
}


var countP=0; //Counts how many time collision happens between player and Fire Boss
var countB=0; //Counts how many time collision happens between bullet and Fire Boss
var countR=0;

function iceBossCollision()
{
	if ((player.x + player.width > iceBoss.x ) && (player.x < iceBoss.x + iceBoss.width+10))
	{
        if ((player.y + player.height > iceBoss.y ) && (player.y < iceBoss.y + iceBoss.height))
		{

			countP++;
			if(countP==1){ player.damage++;player.health--;drain();}
			//console.log("Count"+count);
        }
    }else
	{
		countP=0;
		player.damage=0;
	}
	if(iceBoss.health<=0)
	{
		audioBoss.pause();
        bossVictory.play();
        setTimeout(toIceLevel, 1000);
	}
	for (i = 0; i < bulletArray.length; i++)
	{
	if ((bulletArray[i].x + 10 > iceBoss.x ) && (bulletArray[i].x < iceBoss.x + iceBoss.width+10)) {
       
        if ((bulletArray[i].y + 10 > iceBoss.y ) && (bulletArray[i].y < iceBoss.y + iceBoss.height)) {
			bulletArray.splice(i,1);
			enemyIsDamaged.play();
			countB++;
			if(countB==1){iceBoss.health--; healthBarImage.width-=25;}
        }
    }else{
		countB=0;
	}
	}
	for (var r =0; r < map.length ; r++)
	{
		for (var c =0 ; c < map[0].length ; c ++)
		{
			if(map[r][c].aRock&&end==true)
			{
				var mapMid=(map[r][c].x + (SIZE/2));
				var bossMid=(iceBoss.x + (iceBoss.width/2));
				var distance=Math.abs(bossMid-mapMid);
											
				if((iceBoss.x<=map[r][c].x+SIZE)&&(iceBoss.x+iceBoss.width>=map[r][c].x)&&(distance>=0 && distance<=100))
					
				{
								
					//if(r==2){fireBoss.y=450;}
					//if(r==1){fireBoss.y=350;}
					//if(r==0){fireBoss.y=250;}
							
				}
				
			}
		}
	}
}


function animateiceBoss()
{
	if (iceBossCurrentFrame === iceBossMaxFrames)
	{
		iceBossFrameIndex++;
		iceBossCurrentFrame = 0;
		if (iceBossFrameIndex == 4)
			iceBossFrameIndex = 0;
	}
	iceBossCurrentFrame++;
}

