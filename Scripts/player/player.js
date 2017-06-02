//Player
var leftPressed = false;
var rightPressed = false;
var jumpPressed = false;
var onGround = true;
var jumpVal = 0;
var jumpPeak = false;
    
var isPressed=false;
var end=false;
	
var images = [new Image(), new Image(), new Image(), new Image(), new Image()];
images[0].src = "./Assets/MainCharacterIdle.png";
images[1].src = "./Assets/run-l.png";
images[2].src = "./Assets/run-r.png";
images[3].src = "./Assets/mainCharacterJump.png";
images[4].src = "./Assets/mainCharacterJumpLeft.png";

var player = {img:null, x:300, y:600, dir:1, idle:true, width:100, height:100};
	
var frameIndex = 0; 	// Index of the sprite to display via drawImage.
var currentFrame = 0; 	// Counter for the frames.
var maxFrames = 3; 		// The number of frames a single sprite is drawn.

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

var idInt3 = setInterval(update3, 70);

var n=0;

function update3()
{
	if(onGround && !jumpPressed)
	{
		animate();
	}
}

function scrollMap()
{
	if (isPressed && player.x >= 300)
	{
		for (var row = 0; row < map.length; row++)
		{
			for (var col = 0; col < map[0].length; col++)
			{
				map[row][col].x -= 8;
				//console.log ("map x " + map[1][5].x);
				if (map[map.length - 1][map[0].length - 1].x == 1300)
				{
					end = true;
					break;
				}
			}
		}
	}
}

function onKeyDown(event)
{
	switch (event.keyCode)
	{
		case 65: // A
		case 37: //LEFT
			if (leftPressed == false)
			{
				leftPressed = true;
			}
			break;
		case 68: // D
		case 39: //RIGHT
			// isPressed = true;
			if (rightPressed == false)
			{
				rightPressed = true;
				isPressed = true;
			}
			break;
		case 32:
			if (jumpPressed == false && onGround)                      
			{
				player.idle = false;

				if(player.dir === 1)
				{
					player.img = images[4];
				}
				else if(player.dir === -1)
				{
					player.img = images[3];
				}
				
				onGround = false;
				jumpPressed = true;
				jump();
			}
			break;
		}
	}

function jump()
{
	if(jumpVal === 200)
		{	

			jumpPeak = true;		
			return;
		}
	    animate();
		player.y -= 12;
		jumpVal += 10;
		
		setTimeout(jump, 15);
}

function collision()
{
	for (var r =0; r < map.length ; r++)
	{
		for (var c =0 ; c < map[0].length ; c ++)
		{
			if (map[r][c].aRock === true && (player.y + SIZE > map[r][c].y))
			{
				if ((player.x + SIZE - 20) >= (map[r][c].x) && ((player.x + SIZE - 20) <= map[r][c].x + SIZE))
					{// Check if we are within Y's range top and bottom
						if (player.y + SIZE > map[r][c].y && (player.y + 20 <= map[r][c].y + SIZE - 20)  )
						{
							isPressed = false;
							rightPressed = false;
						}
					}

				if ((player.x + 10 >= (map[r][c].x)) && (player.x + 10 <= (map[r][c].x + SIZE)))
				{
					if (player.y + SIZE > map[r][c].y &&  (player.y + 20 <= map[r][c].y + SIZE - 20) )
					{
						leftPressed = false;
					}
				}
			}

			if (map[r][c].aRock === true)
			{
				if (((player.x + SIZE - 20) >= (map[r][c].x ) || ((player.x + 10) >= (map[r][c].x ) && (player.x + 10) <= (map[r][c].x + SIZE))))
				{// Check if we are within Y's range top and bottom
					if (player.y + SIZE >= map[r][c].y && player.y + SIZE <= map[r][c].y)
					{
						console.log("on ground true");
						jumpPeak = false;				
						onGround = true;
						jumpVal = 0;
					}
				}
			}
			//Check for empty space
			if (map[r][c].empty === true)
			{
				if (((player.x + SIZE - 20) >= (map[r][c].x + SIZE/2 )))
				{// Check if we are within Y's range top and bottom
					if (player.y + SIZE >= map[r][c].y)
					{
						console.log("on ground false");
						jumpPeak = true;
						onGround = false;
					}
				}
			}
		}
	}
}

function back()
{
	if (!onGround && jumpPeak )
	{
		frameIndex = 2;
		player.y += 10;
	}
}

function onKeyUp(event)
{
	isPressed = false;
	switch (event.keyCode)
	{
		case 65: // A
		case 37: //LEFT
			leftPressed = false; break;
		case 68: // D
		case 39: //RIGHT
			rightPressed = false; break;
		case 32:
			jumpPressed = false;
			break;
	}
}

function handleInput()
{
	if (leftPressed == true && onGround && !rightPressed)
	{
			player.idle = false;
			player.img = images[1];
			player.dir = 1;		
			if (player.x > 0)
			{
				player.x -= 8;
			}
	}
   if (rightPressed == true && onGround && !leftPressed)
	{
			player.idle = false;
			player.img = images[2];
			player.dir = -1;
			
		   	if (player.x < 300 || (end == true && player.x < 1300))
				{ player.x += 8; }
	}
  if (onGround && !rightPressed && !leftPressed || rightPressed && leftPressed && onGround )
		{
			player.idle = true;
			player.img = images[0];
		}

 if(rightPressed && !onGround)
 {
	if (player.x < 300 || (end == true && player.x < 1300))
	{ player.x += 8; }
	 
 }

 if(leftPressed && !onGround)
 {
	 if (player.x > 0)
	 {
		player.x -= 8;
	 }
	 
 }

}

function animate()
{
	if (currentFrame === maxFrames)
	{
		frameIndex++;
		currentFrame = 0;
		if (frameIndex == 4)
			frameIndex = 0;
	}
	currentFrame++;
}