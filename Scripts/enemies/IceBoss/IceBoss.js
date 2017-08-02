//Fire Boss
var textDraw=false;
var bossHealthBarDraw=false;
var bossArmAttackAnimation = false;
var iceBossAlive = true;
var audioBoss=document.createElement("audio");
audioBoss.setAttribute("src","./Assets/Sound/Fire/FireBoss.mp3");

var audioIntoBoss=document.createElement("audio");
audioIntoBoss.setAttribute("src","./Assets/Sound/BossIntro.mp3");

var audioPlayerDeath = document.createElement("audio");
audioPlayerDeath.setAttribute("src","./Assets/Sound/Effects/HeroDeath.wav");

//Fire boss array of images
var imagesC = [new Image(), new Image()]//, new Image(), new Image(), new Image(), new Image()];
imagesC[0].src = "./Assets/Enemy/IcePlanet/IceBossSpriteL.png";
imagesC[1].src = "./Assets/Enemy/IcePlanet/IceBossSpriteR.png";
//imagesC[2].src = "./Assets/Enemy/FirePlanet/FireBossAttackSpriteL.png";
//imagesC[3].src = "./Assets/Enemy/FirePlanet/FireBossAttackSpriteR.png";
//imagesC[4].src = "./Assets/Enemy/FirePlanet/FireBossNoArmSpriteL.png";
//imagesC[5].src = "./Assets/Enemy/FirePlanet/FireBossNoArmSpriteR.png";

var bossArmImgL = new Image();
bossArmImgL.src = "./Assets/Enemy/FirePlanet/FireBossArmL.png";
var bossArmImgR = new Image();
bossArmImgR.src = "./Assets/Enemy/FirePlanet/FireBossArmR.png";


healthBarFrameImg.src = "./Assets/UI/HealthFrame.png";
healthBarFrameImg.width = 500;
healthBarFrameImg.height = 40;



var iceBoss={x:28900,y:450,dir:1,img: imagesC[0],width:200,height:150,onground:true,health:20};

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
	if(isPressed && player.x >= 300 && end==false)
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
		if(iceBoss.x==1924)
		{
			iceThemeSong.pause();
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
					//iceBoss.img=imagesC[2];
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
					//iceBoss.img=imagesC[3];
				}
			else if(vectorX > 144)
				{
					bossArmAttackAnimation = false;
				}
		}
			if(iceBossAlive)
		{
			bossHealthBarDraw=true;
		}		
			
		
		if(iceBoss.dir==1)
		{
			if(!bossArmAttackAnimation)
			{
			  	iceBoss.img=imagesC[0];
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
				iceBoss.img=imagesC[1];
			}

			iceBoss.x+=8;
				//console.log(iceBoss.x);
			if(iceBoss.x>1204)
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
	if(iceBoss.health<=0 && iceBossAlive)
	{
		iceBossAlive = false;
		audioBoss.pause();
        bossVictory.play();
       // setTimeout(toIceLevel, 1000);
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
			if(map[r][c].smallPlatform&&end==true)
			{
				var mapMid=(map[r][c].x + (SIZE/2));
				var bossMid=(iceBoss.x + (iceBoss.width/2));
				var distance=Math.abs(bossMid-mapMid);											
				if( (distance>=0 && distance<=70)) 
				{						
					if(r==1){iceBoss.y=150;	}
					if(r==2){iceBoss.y=250;	}
					if(r==3){iceBoss.y=350;	}
					if(r==4){iceBoss.y=450;	}
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

