//Final Boss
//var textDraw=false;
//var bossHealthBarDraw=false;
//var bossArmAttackAnimation = false;
//var fireBossAlive = true;
//var fadeTransition = 0;
//var audioBoss=document.createElement("audio");
//audioBoss.setAttribute("src","./Assets/Sound/Fire/FireBoss.mp3");

//var audio=document.createElement("audio");
//audio.setAttribute("src","./Assets/Sound/BossIntro.mp3");
//audio.Play();
//audio.Pause();
//var audioPlayerDeath = document.createElement("audio");
//audioPlayerDeath.setAttribute("src","./Assets/Sound/Effects/HeroDeath.wav");

//Fire boss array of images
var imagesF = [new Image(), new Image(), new Image()];
imagesF[0].src = "./Assets/Enemy/SentientShip/SentientShipF.png";
imagesF[1].src = "./Assets/Enemy/SentientShip/SentientShipR.png";
imagesF[2].src = "./Assets/Enemy/SentientShip/SentientShipL.png";


var healthBarImage=new Image();
var healthBarFrameImg = new Image();
healthBarImage.src="./Assets/UI/HealthFire.png";
healthBarFrameImg.src = "./Assets/UI/HealthFrame.png";
healthBarImage.width=500;
healthBarImage.height=40;
healthBarFrameImg.width = 500;
healthBarFrameImg.height = 40;



var finalBoss={x:100,y:100,dir:1,img: imagesF[0],width:200,height:140,onground:true,health:10};


var idIntF = setInterval(updateF, 70);

function updateF()
{	
	//animateFireBoss();
	//moveFireBossArm();
}

function moveFinalBoss()
{
	if((isPressed==false&&end==true)||(isPressed==true&&end==true))
	{
		//Distance from the center of the player to the center of the boss on X
		var vectorX =  (player.x + SIZE/2) - (finalBoss.x + finalBoss.width/2);
		
		if(vectorX < 0)
		{
			
			if(vectorX > -144 && vectorX < 0 )
				{						
					finalBoss.img=imagesF[0];
				}
			 if( vectorX < -444)
				{
					finalBoss.img=imagesF[2];
					
			
				}
				
		}
		else if( vectorX > 0)
		{
			if(vectorX <144 && vectorX > 0 )
				{	
					
					
					finalBoss.img=imagesF[0];
				}
			else if(vectorX > 444)
				{
					
					
					finalBoss.img=imagesF[1];
				}	
							
				
		}
					
		
		if(finalBoss.dir==1)
		{
			finalBoss.x-=8;
			
			if(finalBoss.x<0)
			{
				finalBoss.y=Math.floor(Math.random()*300+1);
				finalBoss.dir=-1;
			}
		}
		if(finalBoss.dir==-1)// && fireBossAlive)
		{
			finalBoss.x+=8;
			
			if(finalBoss.x>1200)
			{
				finalBoss.y=Math.floor(Math.random()*300+1);
				finalBoss.dir=1;
			}
		}
	}
}
/*
function createFireBossArm()
{
	
	if(fireBoss.img === imagesB[4])
	{
		var tempBullet = {x: (fireBoss.x +SIZE), y:fireBoss.y +150 ,img:armImages[0], bulletLife: 700 , speedDir: 0 , speed: 60};  
	
	}
	else if(fireBoss.img === imagesB[5])
		{
			var tempBullet = {x: (fireBoss.x +SIZE), y:fireBoss.y +150  ,img:armImages[1], bulletLife: 700 , speedDir: 0, speed: 60};  
		
		}
	 
	fireBossArm.push(tempBullet);
}

function moveFireBossArm()
{
	var i = 0; 

	while(fireBossArm[i] != undefined)
	{
		if (fireBossArm[i].bulletLife <= 0 || fireBossArm[i].x < 0 )
		{
			fireBossArm.splice(i,1);
			break;
		}

		if(fireBoss.img === imagesB[5] && fireBossArm[i].speedDir === 0)	
		{
			fireBossArm[i].speedDir = 1;
		}
		if (fireBoss.img === imagesB[4] && fireBossArm[i].speedDir === 0)
		{	
			fireBossArm[i].speedDir = -1;				
		}

		if(fireBossArm[i].speedDir === 1)	
		{
			fireBossArm[i].x +=fireBossArm[i].speed;
			fireBossArm[i].bulletLife -= fireBossArm[i].speed;
	
		}
		if (fireBossArm[i].speedDir === -1 )
		{		
			fireBossArm[i].x -= fireBossArm[i].speed;
			fireBossArm[i].bulletLife -= fireBossArm[i].speed;
			
		}

	i++;
	
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
			if(countP==1){
				player.damage++;
				player.health--;
				drain();
			    setTimeout(playerRecovered, 2000);}
	
        }
    }else
	{
		countP=0;
		player.damage=0;
	}
	if(fireBoss.health<=0 && fireBossAlive)
	{
		score += 100;
		fireBoss.img = images[12];
		stageDeparture = true;
		flashCount = 0;
		fireBossAlive = false;
		audioBoss.pause();
		bossVictory.play();
		bossHealthBarDraw = false;
		end = false;
		setTimeout(teleportOut, 5000);
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
			if(countB==1){fireBoss.health--; healthBarImage.width-=50;}
        }
    }else{
		countB=0;
	}
	}
		
	for (i = 0; i < fireBossArm.length; i++)
	{
	if ((fireBossArm[i].x + SIZE > player.x ) && (fireBossArm[i].x <  player.x +  player.width+10)) {
       
        if ((fireBossArm[i].y + SIZE >  player.y ) && (fireBossArm[i].y <  player.y +  player.height)) {
			fireBossArm.splice(i,1);
			countR++;
			if(countR==1){ player.damage++;player.health--;drain();}
        }
    }else{
		countR=0;
		player.damage=0;
	}
	}
	for (var r =0; r < map.length ; r++)
	{
		for (var c =0 ; c < map[0].length ; c ++)
		{
			if(map[r][c].aRock&&end==true)
			{
				var mapMid=(map[r][c].x + (SIZE/2));
				var bossMid=(fireBoss.x + (fireBoss.width/2));
				var distance=Math.abs(bossMid-mapMid);
											
				if((fireBoss.x<=map[r][c].x+SIZE)&&(fireBoss.x+fireBoss.width>=map[r][c].x)&&(distance>=0 && distance<=100))
					
				{
								
					if(r==2){fireBoss.y=450;}
					if(r==1){fireBoss.y=350;}
					if(r==0){fireBoss.y=250;}
							
				}
				
			}
		}
	}
}

*/



