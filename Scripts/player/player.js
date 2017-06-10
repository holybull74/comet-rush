//Player
var leftPressed = false;
var rightPressed = false;
var jumpPressed = false;
var bulletPressed=false;
var onGround = true;
var jumpVal = 0;
var jumpPeak = false;
    
var isPressed=false; // any key is Pressed
var end=false; 
	
//Array for all player images.....
var images = [new Image(), new Image(), new Image(), new Image(), new Image()];
images[0].src = "./Assets/MainCharacterIdle.png";
images[1].src = "./Assets/run-l.png";
images[2].src = "./Assets/run-r.png";
images[3].src = "./Assets/mainCharacterJump.png";
images[4].src = "./Assets/mainCharacterJumpLeft.png";

var bulletArray = []; // For keeping track of player bullets

//creating Player object.....
var player = {img:null, x:300, y:600, dir:1, idle:true, width:100, height:100};
	
var frameIndex = 0; 	// Index of the player sprite to display via drawImage.
var currentFrame = 0; 	// Counter for the player frames.
var maxFrames = 3; 		// The number of frames in a single player sprite is drawn.

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

//A set interval to animate the player images....
var idInt3 = setInterval(update3, 70);

var n=0;

function update3()
{
	if(onGround && !jumpPressed)//if the player on the ground & he is not jumping....
	{
		animate();
	}
	moveBullets();
}

function scrollMap()
{
	//Scroll the map if player.x>= 300 & isPressed == True
	if (isPressed && player.x >= 300)
	{
		for (var row = 0; row < map.length; row++)
		{
			for (var col = 0; col < map[0].length; col++)
			{
				map[row][col].x -= 8;
				//console.log ("map x " + map[1][5].x);
				//if the end of the map reaches on the screen change the end varialbe to true and stop scrolling.....
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
				r=false;
			}
			break;
		case 68: // D
		case 39: //RIGHT
			// isPressed = true;
			if (rightPressed == false)
			{
				rightPressed = true;
				isPressed = true;
				r=true;
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
		case 87:
		case 38:
			if(bulletPressed == false)
			{
				bulletPressed=true;
				createBullet();
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
	    animate();//animation for jump 
		player.y -= 12;
		jumpVal += 10;
		
		setTimeout(jump, 15);
}

//Collision between map element & player
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
						//console.log("on ground true");
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
						//console.log("on ground false");
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
	if (!onGround && jumpPeak )//if the palyer is in the air bring him down
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
		case 87:
		case 38:
			bulletPressed=false;
			break;
	}
}

var r=true;

 function createBullet(){
            var tempBullet = {x: (player.x + 50), y:player.y + 50};   
			bulletArray.push(tempBullet);
			}
function moveBullets(){
	var i = 0; 
	while(bulletArray[i] != undefined)
	{if (bulletArray[i].x > player.x+700 || bulletArray[i].x < 0 )bulletArray.splice(i,1);
	if((r==true )||(bulletArray[i].x>=player.x+60))	
	{
		bulletArray[i].x += 10;
		if((player.x+40>=bulletArray[i].x))
			{ bulletArray[i].x -= 10;}	
	}
	if ((r==false) ||  (player.x+40>=bulletArray[i].x) )
	{		
		bulletArray[i].x -= 10;
		if(bulletArray[i].x>=player.x+60)
			bulletArray[i].x += 10;
	}
	i++;
	}  
}
//To set the right image from Array images for the player with the right key
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

//Animating the player images....
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