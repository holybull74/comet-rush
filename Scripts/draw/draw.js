//Drawing every game object on canvas

function render()
{
	surface.clearRect(0, 0, canvas.width, canvas.height);
	//Drawing Fire Background...
	//surface.drawImage(background, frameBackgroundIndex*1400, 0, 1400, 900, 0, 0, 1400, 900);
	
	//Drawing Ice Background...
	surface.drawImage(background, frameIceBackgroundIndex*1400, 0, 1400, 900, 0, 0, 1400, 900);
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
			//Drawing Ice Lava...
			if(map[row][col].lava===true)
			{
				surface.drawImage(map[row][col].img,
					frameIceLavaIndex*100, 0, 100, 100,
					map[row][col].x, map[row][col].y, 100, 100);
			}
			//Drawing Fire Lava...
			/*if(map[row][col].lava===true)
			{
				surface.drawImage(map[row][col].img,
					frameLavaIndex*100, 0, 100, 100,
					map[row][col].x, map[row][col].y, 100, 100);
			}*/

			/*if (map[row][col].aRock === true)
			{
				surface.beginPath();
				surface.lineWidth = "3";
				surface.strokeStyle = "blue";
				surface.rect( map[row][col].x, map[row][col].y , SIZE , SIZE/2);
				surface.stroke();

			}
							if (map[row][col].aRock === true)
							{
							surface.beginPath();
							surface.moveTo(player.x + SIZE - 60, player.y + 25 + 25);
							surface.lineTo(map[row][col].x + SIZE/2,map[row][col].y + SIZE/2);
							surface.lineWidth = 2;
               				surface.strokeStyle = "red";
							surface.stroke();
							} */

		}
	}
	//Drawing Player
	if(stageArrivalDrawPermit)
	{
		surface.drawImage(player.img,
        frameIndex * 100, 0, 100, 100,		// Source rectangle.
         player.x, player.y, 100, 100);	// Dest rectangle.

	}
			/*	surface.beginPath();
				surface.lineWidth = "3";
				surface.strokeStyle = "green";
				surface.rect(player.x + 30 , player.y + 25 , SIZE - 60 , SIZE - 25);
				surface.stroke();*/
							
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
	//	surface.drawImage(fireBoss.img,
      //      fireBossFrameIndex * 100, 0, 100, 250,		// Source rectangle.
        //    fireBoss.x, fireBoss.y, 100, 250);

			//Drawing IceBoss
		surface.drawImage(iceBoss.img,
            iceBossFrameIndex * 200, 0, 200, 150,		// Source rectangle.
            iceBoss.x, iceBoss.y, 200, 150);
		
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
			surface.font="60px Arial";
			surface.fillStyle="Red";
			surface.fillText("Be carefull!!!",100,300);	
			surface.fillText("The Fire Boss is coming...",0,370);
			
		}
		if(bossHealthBarDraw==true )
		{
			surface.drawImage(healthBarFrameImg, 500, 800, healthBarFrameImg.width, healthBarFrameImg.height)
			surface.drawImage(healthBarImage,0, 0, healthBarImage.width, healthBarImage.height, 500, 800, healthBarImage.width, healthBarImage.height);
		}

}

function renderGameOver()
{
	divHealthBar.style.visibility = "hidden";
   	divHealthP.style.visibility = "hidden";
    surface.drawImage(gameOverbg,0,0, 1400, 900);
}