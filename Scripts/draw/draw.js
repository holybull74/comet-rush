//Drawing every game object on canvas

function render()
{	
	if(!inTransition)
	{		
		surface.clearRect(0, 0, canvas.width, canvas.height);
		//Drawing Background...
		surface.drawImage(background, frameBackgroundIndex*1400, 0, 1400, 900, 0, 0, 1400, 900);

		//Drawing Map
		for (var row = 0; row < map.length; row++)
		{
			for (var col = 0; col < map[0].length; col++)
			{
				if(map[row][col].aRock===true || map[row][col].empty == true)
				{		
					surface.drawImage(map[row][col].img,
					map[row][col].x,
					map[row][col].y);
				}
				

				if(!transitionToIceLevel && !transitionToFinalStage)
				{
					if(map[row][col].lava===true)
					{
						surface.drawImage(map[row][col].img,
							frameLavaIndex*100, 0, 100, 100,
							map[row][col].x, map[row][col].y, 100, 100);
					}
				}
				if(transitionToIceLevel && !transitionToFinalStage)
				{
					if(map[row][col].lava===true)
					{
						surface.drawImage(map[row][col].img,
							frameLavaIndex*100, 0, 100, 100,
							map[row][col].x, map[row][col].y, 100, 100);
					}

				}     	
			}
		}
		//Drawing Player
		if(stageArrivalDrawPermit)
		{
			surface.drawImage(player.img,
			frameIndex * 100, 0, 100, 100,		// Source rectangle.
			player.x, player.y, 100, 100);	// Dest rectangle.

				if(fireBoss.x <= 8700 &&  fireBoss.x >= 8400)
			{
				surface.font = "25px Arial";
				surface.fillStyle = "White";
				surface.fillText("Ok, remeber you move by pressing" , 200 , 450);
				surface.fillText("Left: A or left arrow" , 200 , 475);
				surface.fillText("Right: D or right arrow" , 200 , 500);
			}  	

		}
		if(maxKenHealth)
			{
				surface.drawImage(playerHealthFrame, 0,0);
				
			}				
		//Drawing FireBoss
		if(!transitionToIceLevel && !transitionToFinalStage)
			{
				//Drawing FireWalker
			//console.log("FireWalker Image: " + fireWalker.img);
				for (var i = 0; i < fireWalker.length; i++) {
					surface.drawImage(fireWalker[i].img,
						fireWalker[i].sourceX, fireWalker[i].sourceY, fireWalker[i].size, fireWalker[i].size,
						fireWalker[i].x, fireWalker[i].y, fireWalker[i].size, fireWalker[i].size);
				}

				//Drawing FireWolf
			//console.log("FireWolf Image: " + fireWolf.img);
				for (var i = 0; i < fireWolf.length; i++)
					surface.drawImage(fireWolf[i].img,
						fireWolf[i].sourceX, fireWolf[i].sourceY, fireWolf[i].size, fireWolf[i].size,
						fireWolf[i].x, fireWolf[i].y, fireWolf[i].size, fireWolf[i].size);

				surface.drawImage(fireBoss.img,
				fireBossFrameIndex * 100, 0, 100, 250,		// Source rectangle.
				fireBoss.x, fireBoss.y, 100, 250);
				//Drawing Fire Boss Arm
				for (i = 0; i < fireBossArm.length; i++)
				{
					surface.drawImage(fireBossArm[i].img,
                    fireBossArm[i].x, fireBossArm[i].y, 100, 100);
				}
			}
		if(transitionToIceLevel && !transitionToFinalStage)
			{
				//Drawing IceWalker
			//console.log("IceWalker Image: " + iceWalker.img);
				for (var i = 0; i < iceWalker.length; i++) {
					surface.drawImage(iceWalker[i].img,
						iceWalker[i].sourceX, iceWalker[i].sourceY, iceWalker[i].size, iceWalker[i].size,
						iceWalker[i].x, iceWalker[i].y, iceWalker[i].size, iceWalker[i].size);
				}

				//Drawing IceBear
			//console.log("IceBear Image: " + iceBear.img);
				for (var i = 0; i < iceBear.length; i++)
					surface.drawImage(iceBear[i].img,
						iceBear[i].sourceX, iceBear[i].sourceY, iceBear[i].size, iceBear[i].size,
						iceBear[i].x, iceBear[i].y, iceBear[i].size, iceBear[i].size);


				//Drawing IceBoss
				surface.drawImage(iceBoss.img,
				iceBossFrameIndex * 200, 0, 200, 150,		// Source rectangle.
				iceBoss.x, iceBoss.y, 200, 150);
				
				//Drawing Ice Boss shell
				for (i = 0; i < iceBossATK.length; i++)
				{
					surface.drawImage(iceBossATK[i].img,
					iceBossFrameIndex * 200, 0, 200, 150,
                    iceBossATK[i].x, iceBossATK[i].y, 200, 150);
				}

			}  
			
			
			for (i = 0; i < bulletArray.length; i++)
				{
					surface.drawImage(bulletArray[i].img, frameIndex*64, 0, 65 , 30 , bulletArray[i].x, bulletArray[i].y, 65, 30);
				}
			if(textDraw==true)
			{
				if(!transitionToIceLevel && !transitionToFinalStage)
			{
				surface.drawImage(fireBossWarning, frameIndex * 800, 0, 800, 400, 0, 0, 800, 400);
			}
			if(transitionToIceLevel && !transitionToFinalStage)
			{
				surface.drawImage(iceBossWarning, frameIndex * 800, 0, 800, 400, 0, 0, 800, 400);
			}

			}
			//Score
			surface.font = "25px Arial";
			surface.fillStyle = "White";
			surface.fillText("Score: " + score , 1200 , 25 );

			//timer
			surface.font = "25px Arial";
			surface.fillStyle = "White";
			surface.fillText("Timer: " + gameTimer , 700 , 25 );

			// Tutorial texts
			if(fireBoss.x <= 8300 &&  fireBoss.x >= 7600)
			{
				surface.font = "25px Arial";
				surface.fillStyle = "White";
				surface.fillText("Max if you forgot how to jump" , 400 , 450);
				surface.fillText("Press Space" , 400 , 475);
			}  	
			
			if(fireBoss.x <= 7500 &&  fireBoss.x >= 7300)
			{
				surface.font = "25px Arial";
				surface.fillStyle = "White";
				surface.fillText("Some sort of elemental Xenoform" , 400 , 450);
				surface.fillText("just shoot it with X or K" , 400 , 475);
			}  	

			if(fireBoss.x <= 7200 &&  fireBoss.x >= 6800)
			{
				surface.font = "25px Arial";
				surface.fillStyle = "White";
				surface.fillText("Killing a Xenoform will give you some points" , 400 , 450);
				surface.fillText("...for some reason...." , 400 , 475);
			}  	

			if(fireBoss.x <= 6700 &&  fireBoss.x >= 6500)
			{
				surface.font = "25px Arial";
				surface.fillStyle = "White";
				surface.fillText("Uhh look another one." , 400 , 450);
				surface.fillText("Go get them points." , 400 , 475);
			}  
			
			if(bossHealthBarDraw === true )
			{
				surface.drawImage(healthBarFrameImg, 500, 800, healthBarFrameImg.width, healthBarFrameImg.height)
				surface.drawImage(healthBarImage, 500, 800, healthBarImage.width, healthBarImage.height);
			}
	}
}


function renderGameOver()
{
	divHealthBar.style.visibility = "hidden";
   	divHealthP.style.visibility = "hidden";
    surface.drawImage(gameOverbg,0,0, 1400, 900);
}