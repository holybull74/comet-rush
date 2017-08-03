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

		}

		if(maxKenHealth)
			{
				surface.drawImage(playerHealthFrame, 0, 0, 500, 40);
			}
											
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
				
		//Drawing FireBoss
		if(!transitionToIceLevel && !transitionToFinalStage)
			{
				surface.drawImage(fireBoss.img,
				fireBossFrameIndex * 100, 0, 100, 250,		// Source rectangle.
				fireBoss.x, fireBoss.y, 100, 250);
			}
			for (i = 0; i < fireBossArm.length; i++)
			{
			surface.drawImage(fireBossArm[i].img,
                     fireBossArm[i].x, fireBossArm[i].y, 100, 100);
			}
		if(transitionToIceLevel && !transitionToFinalStage)
			{
				//Drawing IceBoss
				surface.drawImage(iceBoss.img,
				iceBossFrameIndex * 200, 0, 200, 150,		// Source rectangle.
				iceBoss.x, iceBoss.y, 200, 150);

			}     	

				
			
			for (i = 0; i < bulletArray.length; i++)
				{
					surface.beginPath();
					surface.arc(bulletArray[i].x, bulletArray[i].y,	4, 0, 2*Math.PI);
					surface.fillStyle = "white";
					surface.fill();
					surface.lineWidth = 2;
					surface.strokeStyle = "red";
					surface.stroke();
					surface.closePath();
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