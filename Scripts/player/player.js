//Player
var leftPressed = false;
var rightPressed = false;
var bulletPressed=false;

// World variables
var WORLDSPEED = 8;
var gravity =  1.7;
var impulse = 2.8;
var collisionDirection = " ";

//Getting the user input in an array for multiple input.
inputArray = [];

var isPressed=false; // any key is Pressed
var end=false; 
	
//Array for all player images.....
var images = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
images[0].src = "./Assets/MainCharacter/MainCharacterIdleR.png";
images[1].src = "./Assets/MainCharacter/MainCharacterIdleL.png";
images[2].src = "./Assets/MainCharacter/MainCharacterRunL.png";
images[3].src = "./Assets/MainCharacter/MainCharacterRunR.png";
images[4].src = "./Assets/MainCharacter/mainCharacterJumpRight.png";
images[5].src = "./Assets/MainCharacter/mainCharacterJumpLeft.png";
images[6].src = "./Assets/MainCharacter/MainCharacterShootingL.png";
images[7].src = "./Assets/MainCharacter/MainCharacterShootingR.png";
images[8].src = "./Assets/MainCharacter/NoMoveShootingL.png";
images[9].src = "./Assets/MainCharacter/NoMoveShootingR.png";
images[10].src = "./Assets/MainCharacter/MainCharacterDamageR.png";
images[11].src = "./Assets/MainCharacter/MainCharacterDamageL.png";

var bulletArray = []; // For keeping track of player bullets

//creating Player object.....
var player = {img: images[0], x:300, y:600, dir:1, idle:true, width:100, height:100 , speed: WORLDSPEED, sX :0, sY:0 , isJumping: false, onGround: false,damage:0,health:5};
	
var frameIndex = 0; 	// Index of the player sprite to display via drawImage.
var currentFrame = 0; 	// Counter for the player frames.
var maxFrames = 3; 		// The number of frames in a single player sprite is drawn.

window.addEventListener("keydown", function(e)
{
	inputArray[e.keyCode] = true;  
});
window.addEventListener("keyup", function(e)
{
	isPressed = false;
	inputArray[e.keyCode] = false;
	
});

//A set interval to animate the player images....
var idInt3 = setInterval(playerAnimationUpdate, 70);

var n=0;

function playerAnimationUpdate()
{	
	animate();

	moveBullets();
}

//Map scroll function, moves every tile when the player has reached the desired range
function scrollMap()
{
	//Scroll the map if player.x>= 300 & isPressed == True
	if (isPressed && player.x >= 300)
	{
		for (var row = 0; row < map.length; row++)
		{
			for (var col = 0; col < map[0].length; col++)
			{
				map[row][col].x -= WORLDSPEED;
				//if the end of the map reaches on the screen change the end varialbe to true and stop scrolling.....
				if (map[map.length - 1][map[0].length - 1].x == 1304)
				{
					end = true;
					break;
				}
			}
		}
	}
}


//Collision between map element & player
function collision()
{
	for (var r =0; r < map.length ; r++)
	{
		for (var c =0 ; c < map[0].length ; c ++)
		{
			if(map[r][c].aRock)
			{
				var vectorX = (player.x + (player.width/2) - 10) - (map[r][c].x + (SIZE/2));
				var vectorY = (player.y + (player.height/2)) - (map[r][c].y + (SIZE/2));
				
				var boxWidth = ((player.width/2) - 10) + SIZE/2;


				if(Math.abs(vectorX) < boxWidth && Math.abs(vectorY) < SIZE)
				{
					var cX = boxWidth - Math.abs(vectorX);
					var cY = SIZE- Math.abs(vectorY);

					if( cX >= cY)
					{
						if (vectorY > 0)
						{
							collisionDirection = "top"
							
						}else if ( vectorY <= 0 && ((((player.x + SIZE - 30) >= (map[r][c].x )) || ( (player.x + 30) >= (map[r][c].x ) )) && ((player.x + 30) <= (map[r][c].x + SIZE))))
						{
							collisionDirection = "bot";
							player.onGround = true;
							player.sY = 0;
							player.isJumping = false;
						    player.y = map[r][c].y - player.height;

						}

					}else
					{
						if(vectorX >= 0  && vectorX <= 70 )
						{
							collisionDirection = "left";
							player.img = images[1];
							player.x = map[r][c].x + SIZE - 20;
							
						}else if(((player.x + SIZE - 20) >= map[r][c].x) && (player.x + SIZE - 20) <= (map[r][c].x + SIZE/2))
						{
							collisionDirection = "right";
							player.img = images[0];
							player.x = map[r][c].x - (player.width - 20);
							
						}
					}	
				}
			}
			if(map[r][c].lava)
			{
				var vectorX = (player.x + (player.width/2) - 10) - (map[r][c].x + (SIZE/2));
				var vectorY = (player.y + (player.height/2)) - (map[r][c].y + (SIZE));
				
				var boxWidth = ((player.width/2) - 10) + SIZE/2;


				if(Math.abs(vectorX) < boxWidth && Math.abs(vectorY) < SIZE)
				{
					var cX = boxWidth - Math.abs(vectorX);
					var cY = SIZE- Math.abs(vectorY);

					if( cX >= cY)
					{
						if (vectorY < 0)
						{
							clearInterval(mainUpdateInterval);
							alert("You died");
						}
					}					
				}
			}
		}
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
	//There is no input, then idle
	if(!(inputArray[65] && inputArray[37] && inputArray[68] && inputArray[39]) && player.onGround)
	{
			if(player.dir === 1)
		{
			player.img = images[0];

		}else
		{
			player.img = images[1];
		}

	}
		// Space, is the player jumping?
	if(inputArray[32])
	{
		if(!player.isJumping && player.onGround)
		{
			frameIndex = 0; 	
			currentFrame = 0;
			player.isJumping = true;
			player.onGround = false;
			player.sY = -player.speed * impulse;

			if(player.dir === 1)
			{
				player.img = images[4];

			}else
			{
				player.img = images[5];
			}
		   
		}
	}

	// Left Arrow or key A
	if(inputArray[65] || inputArray[37])
	{
		r=false;
		if(player.isJumping)
		{
			player.img = images[5];

		}else
		{
			player.img = images[2];
		}
		
		player.dir = -1;
		player.x -= player.speed;
	}

	//Right Arrow or key D
	if(inputArray[68] || inputArray[39])
	{
		r=true;
		if(player.isJumping)
		{
			player.img = images[4];
			
		}else
		{
			player.img = images[3];
		}		
		player.dir = 1;
		isPressed = true;
		if (player.x <= 300 || (end == true && player.x < 1300))
		{ 
			player.x += player.speed; 
		}
	}

	if(inputArray[88] || inputArray[75])
	{
		
			bulletPressed=true;
			createBullet();
		
	}
	player.sY += gravity;
	player.y += player.sY;
	player.onGround = false;

	if(player.x >= canvas.width - player.width)
	{
		player.x = canvas.width - player.width;
	}
	else if ( player.x <= 0)
	{
		player.x = 0;
	}
	if(player.damage!=0)
	{
		if (player.dir == 1)
			player.img = images[10];
		else
			player.img = images[11];
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