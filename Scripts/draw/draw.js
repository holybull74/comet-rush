//Drawing every game object on canvas

function render()
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

			/*if (map[row][col].aRock === true)
			{
				surface.beginPath();
				surface.lineWidth = "3";
				surface.strokeStyle = "red";
				surface.rect( map[row][col].x, map[row][col].y , SIZE , SIZE);
				surface.stroke();

			}*/

		}
	}
	//Drawing Player
	surface.drawImage(player.img,
            frameIndex * 100, 0, 100, 100,		// Source rectangle.
            player.x, player.y, 100, 100);	// Dest rectangle.
			
	//Drawing FireWalker
        //console.log("FireWalker Image: " + fireWalker.img);
        surface.drawImage(fireWalker.img,
            fireWalker.sourceX, fireWalker.sourceY, fireWalker.size, fireWalker.size,
            fireWalker.x, fireWalker.y, fireWalker.size, fireWalker.size);

	//Drawing FireWolf
		//console.log("FireWolf Image: " + fireWolf.img);
		surface.drawImage(fireWolf.img,
			fireWolf.sourceX, fireWolf.sourceY, fireWolf.size, fireWolf.size,
			fireWolf.x, fireWolf.y, fireWolf.size, fireWolf.size);

		
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


}