//Draw

	function render()
	{

		surface.clearRect(0, 0, canvas.width, canvas.height);
		surface.drawImage(background,
			frameBackgroundIndex*1400, 0, 1400, 900,
			0, 0, 1400, 900);
		for (var row = 0; row < map.length; row++)
		{
			for (var col = 0; col < map[0].length; col++)
			{


				surface.drawImage(map[row][col].img,
					map[row][col].x,
					map[row][col].y);
				if(map[2][col].lava===true)
				{
					surface.drawImage(map[2][col].img,
						frameLavaIndex*100, 0, 100, 100,
						map[2][col].x, map[2][col].y, 100, 100);
				}
				if(map[3][col].lava===true)
				{
					surface.drawImage(map[3][col].img,
						frameLavaIndex*100, 0, 100, 100,
						map[3][col].x, map[3][col].y, 100, 100);
				}
			}
		}

		if (player.idle == true)
			surface.drawImage(player.img, player.x, player.y);
		else
			surface.drawImage(player.img,
				frameIndex*100, 0, 100, 100,		// Source rectangle.
				player.x, player.y, 100, 100);	// Dest rectangle.
		console.log("FireWalker Image: " + fireWalker.img);
		surface.drawImage(	fireWalker.img,
							fireWalker.sourceX, fireWalker.sourceY, fireWalker.size, fireWalker.size,
							fireWalker.x, fireWalker.y, fireWalker.size, fireWalker.size);
	}