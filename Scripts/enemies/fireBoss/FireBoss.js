//Fire Boss
var textDraw=false;
var healthBarDraw=false;
var audioBoss=document.createElement("audio");
audioBoss.setAttribute("src","./Assets/Sound/FireBoss.mp3");

var audioIntoBoss=document.createElement("audio");
audioIntoBoss.setAttribute("src","./Assets/Sound/Boss Intro.mp3");

var imagesB = [new Image(), new Image()];
imagesB[0].src = "./Assets/Enemy/FirePlanet/FireBossSpriteSheetL.png";
imagesB[1].src = "./Assets/Enemy/FirePlanet/FireBossSpriteSheetR.png";

var healthBarImage=new Image();
healthBarImage.src="./Assets/UI/HealthFire.png";
healthBarImage.width=500;
healthBarImage.height=40;


var fireBoss={x:8400,y:450,dir:1,img:null,width:100,height:250,onground:true,health:10};

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
	
		if(fireBoss.dir==1)
		{
			fireBoss.x-=8;
			//console.log(fireBoss.x);
			if(fireBoss.x<100)
			{
				fireBoss.dir=-1;
			}
		}
		if(fireBoss.dir==-1)
		{
			fireBoss.x+=8;
			if(fireBoss.x>1300)
			{
				fireBoss.dir=1;
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
		healthBarDraw=true;
		if(fireBoss.dir==1)
		{
			fireBoss.x-=8;
		//console.log(fireBoss.x);
			if(fireBoss.x<100)
			{
				fireBoss.dir=-1;
			}
		}
		if(fireBoss.dir==-1)
		{
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
		alert("GameOver");
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
			countB++;
			if(countB==1){fireBoss.health--;healthBarImage.width-=50;}
			//console.log(fireBoss.health);
			//console.log("Count"+countB);
        }
    }else{
		countB=0;
	}
	}

}
			



function handleInputFireBoss()
{
	if(fireBoss.dir==1)
	{
		fireBoss.img=imagesB[0];}
	if(fireBoss.dir==-1)
	{
		fireBoss.img=imagesB[1];
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

