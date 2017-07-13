//Fire Boss
var textDraw=false;
var bossHealthBarDraw=false;
var audioBoss=document.createElement("audio");
audioBoss.setAttribute("src","./Assets/Sound/Fire/FireBoss.mp3");

var audioIntoBoss=document.createElement("audio");
audioIntoBoss.setAttribute("src","./Assets/Sound/BossIntro.mp3");

var audioPlayerDeath = document.createElement("audio");
audioPlayerDeath.setAttribute("src","./Assets/Sound/Effects/HeroDeath.wav");

//Fire boss array of images
var imagesB = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
imagesB[0].src = "./Assets/Enemy/FirePlanet/FireBossSpriteSheetL.png";
imagesB[1].src = "./Assets/Enemy/FirePlanet/FireBossSpriteSheetR.png";
imagesB[2].src = "./Assets/Enemy/FirePlanet/FireBossAttackSpriteL.png";
imagesB[3].src = "./Assets/Enemy/FirePlanet/FireBossAttackSpriteR.png";
imagesB[4].src = "./Assets/Enemy/FirePlanet/FireBossNoArmSpriteL.png";
imagesB[5].src = "./Assets/Enemy/FirePlanet/FireBossNoArmSpriteR.png";

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



var fireBoss={x:8400,y:450,dir:1,img: imagesB[0],width:100,height:250,onground:true,health:20};

var fireBossFrameIndex = 0; 	// Index of the Boss sprite to display via drawImage.
var fireBossCurrentFrame = 0; 	// Counter for the Boss frames.
var fireBossMaxFrames = 3; 		// The number of frames in a single boss sprite is drawn.

var idIntB = setInterval(updateB, 70);

function updateB()
{	
	animateFireBoss();
}

function moveBoss()
{
	if(isPressed && player.x >= 300&&end==false)
	{	
		if(fireBoss.dir === 1)
		{
			fireBoss.x-=8;
		  
			if(fireBoss.x<100)
			{
				fireBoss.dir = -1;
			}
		}
		if(fireBoss.dir === -1)
		{
			fireBoss.x+=8;

			if(fireBoss.x>1300)
			{
				fireBoss.dir = 1;
			}
		}
		if(fireBoss.x==1904)
		{
			themeSong.pause();
			audioIntoBoss.play();
			textDraw=true;
		}
		if(fireBoss.x==1576)
		{
			audioIntoBoss.pause();
			audioBoss.play();
			textDraw=false;		
		}
	}	
	if((isPressed==false&&end==true)||(isPressed==true&&end==true))
	{
		//Distance from the center of the player to the center of the boss on X
		var vectorX =  (player.X + SIZE/2) - (fireBoss.x + fireBoss.width/2);

		if(vectorX < 0)
		{
			console.log("VectorX : "+ vectorX);
			if(vectorX > -120 && vectorX < 0 )
				{		

					fireBoss.img=imagesB[2];
				}

		}else
		{

		}
		bossHealthBarDraw=true;
		if(fireBoss.dir==1)
		{
			fireBoss.img=imagesB[0];
			fireBoss.x-=8;
		//console.log(fireBoss.x);
			if(fireBoss.x<100)
			{
				fireBoss.dir=-1;
			}
		}
		if(fireBoss.dir==-1)
		{
			fireBoss.img=imagesB[1];
			fireBoss.x+=8;
			if(fireBoss.x>1300)
			{
				fireBoss.dir=1;
			}
		}
	}
}


var countP=0; //Counts how many time collision happens between player and Fire Boss
var countB=0; //Counts how many time collision happens between bullet and Fire Boss
var countR=0;

function fireBossCollision()
{
	if ((player.x + player.width > fireBoss.x ) && (player.x < fireBoss.x + fireBoss.width+10))
	{
        if ((player.y + player.height > fireBoss.y ) && (player.y < fireBoss.y + fireBoss.height))
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
	if(fireBoss.health<=0)
	{
		audioBoss.pause();
        bossVictory.play();
        setTimeout(bossDeath, 1000);
	}
	if(player.health<=0)
	{
		//alert("GameOver");
	}
	for (i = 0; i < bulletArray.length; i++)
	{
	if ((bulletArray[i].x + 10 > fireBoss.x ) && (bulletArray[i].x < fireBoss.x + fireBoss.width+10)) {
       
        if ((bulletArray[i].y + 10 > fireBoss.y ) && (bulletArray[i].y < fireBoss.y + fireBoss.height)) {
			bulletArray.splice(i,1);
			enemyIsDamaged.play();
			countB++;
			if(countB==1){fireBoss.health--; healthBarImage.width-=25;}
        }
    }else{
		countB=0;
	}
	}

}


function animateFireBoss()
{
	if (fireBossCurrentFrame === fireBossMaxFrames)
	{
		fireBossFrameIndex++;
		fireBossCurrentFrame = 0;
		if (fireBossFrameIndex == 4)
			fireBossFrameIndex = 0;
	}
	fireBossCurrentFrame++;
}

