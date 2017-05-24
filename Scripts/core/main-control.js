// IIFE - Immediately Invoked Function Expression

(function () {
     console.log("Executing script");

    var stage = document.getElementById("stage");
    var canvas = document.getElementById("myCanvas");
	canvas.width = 1400;
    canvas.height = 900;
    var surface = canvas.getContext("2d");

	var leftPressed = false;
	var rightPressed = false;
	var jumpPressed = false;
    
	var isPressed=false;
	var end=false;
	
	var images = [new Image(), new Image(), new Image(), new Image()];
	images[0].src = "./Assets/idle-l.png";
	images[1].src = "./Assets/idle-r.png";
	images[2].src = "./Assets/run-l.png";
	images[3].src = "./Assets/run-r.png";
	var mario = {img:null, x:300, y:600, dir:1, idle:true};
	
	var frameIndex = 0; 	// Index of the sprite to display via drawImage.
	var currentFrame = 0; 	// Counter for the frames.
	var maxFrames = 3; 		// The number of frames a single sprite is drawn.

	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
    var topLeft = new Image();
    topLeft.src = "./Assets/TopLeft.png";

    var botLeft = new Image();
    botLeft.src = "./Assets/BottLeft.png";

    var topMid = new Image();
    topMid.src = "./Assets/TopMid.png";

    var center = new Image();
    center.src = "./Assets/Center.png";

    var topRight = new Image();
    topRight.src = "./Assets/TopRigth.png";

    var botRight = new Image();
    botRight.src = "./Assets/BottRight.png";

    var lavaTop = new Image();
    lavaTop.src = "./Assets/lavaTop.png";

    var lavaBot = new Image();
    lavaBot.src = "./Assets/lavaBot.png";

    var offsetX = 0;
    var offsetY = 0;



    var mapTop =[];
	var mapBot = [];
	var SIZE=100;
	initGame();
	function initGame()
	{
		generateMapTop();
		generateMapBot();
	}
    function generateMapTop()
{
	//Generating MAP.
	for (var i = 0; i < 24; i++) 
	{
		
			
			var tempTile = { };
			tempTile.x=i*SIZE;
			tempTile.y=700;
			switch(i)
			{
				case 0:
				tempTile.img=topLeft;
				break;				
				case 13:
				case 14:				
				tempTile.img=lavaTop;
				break;				
				case 23:
				tempTile.img=topRight;
				
				break;
				default:
				tempTile.img=topMid;
				break;
			}
			mapTop[i] = tempTile;			
		
	}
}
	function generateMapBot()
{
	//Generating MAP.
	for (var i = 0; i < 24; i++) 
	{
		
			
			var tempTile = { };
			tempTile.x=i*SIZE;
			tempTile.y=800;
			switch(i)
			{
				case 0:
				tempTile.img=botLeft;
				break;
				case 13:
				case 14:				
				tempTile.img=lavaBot;
				break;				
				case 23:
				tempTile.img=botRight;
				break;
				default:
				tempTile.img=center;
				break;
				
			}
			mapBot[i] = tempTile;			
		
	}
}
	var idInt =	setInterval(update, 33.34);
function update()
{	
	scrollMap();
	handleInput();
	animate();
	render();	
}
   function scrollMap()
{
	if(isPressed && mario.x>=300)
	{
		for(var i = 0; i < 24; i++)
		{ 
			mapTop[i].x -= 3;	
			mapBot[i].x -= 3;
				if(mapTop[23].x==1298)
				{	
					end=true;
					break;
				}
				
		}
	}
}
function onKeyDown(event)
{
	
	switch(event.keyCode)
	{
		case 65: // A
		case 37: //LEFT
			if (leftPressed == false)
				leftPressed = true;
			break;
		case 68: // D
		case 39: //RIGHT
			isPressed=true;
			if (rightPressed == false)
				rightPressed = true;
			break;
		case 32:
		if (jumpPressed == false)
				jumpPressed = true;
			jump();
			break;
	}
}
var n=0;
function jump()
{
	
	mario.y-=30;
	
	n++;
	
}
function onKeyUp(event)
{
	isPressed=false;
	switch(event.keyCode)
	{
		case 65: // A
		case 37: //LEFT
			leftPressed = false; break;
		case 68: // D
		case 39: //RIGHT
			rightPressed = false; break;
		case 32:
		jumpPressed=false;
		back();
		break;
		
	}
}
function back()
{
	mario.y+=n*30;
	
	n=0;
	
}
function handleInput()
{
	if (leftPressed == true)
	{
		mario.img = images[2];
		mario.dir = 1;
		mario.idle = false;
		if(mario.x>0)
		{mario.x += -5;}
	}
	else if (rightPressed == true)
	{
		mario.img = images[3];
		mario.dir = -1;
		mario.idle = false;
		if(mario.x<300 || (end==true && mario.x<1300))
		{mario.x += +5;}
			}
	else
	{
		mario.idle = true;
		if (mario.dir == 1)
			mario.img = images[0];
		else
			mario.img = images[1];
	}
}

function animate()
{
	currentFrame++;
	if (currentFrame == maxFrames)
	{
		frameIndex++;
		currentFrame = 0;
		if (frameIndex == 4)
			frameIndex = 0;
	}
}

	function render()
{
	
	surface.clearRect(0, 0, canvas.width, canvas.height); 
		for (var col = 0; col < 24; col++)
		{
			
			
				surface.drawImage(mapBot[col].img,
								  mapBot[col].x,
								  mapBot[col].y);				
		}
		for (var col = 0; col < 24; col++)
		{
			
			
				surface.drawImage(mapTop[col].img,
								  mapTop[col].x,
								  mapTop[col].y);				
		}
		
		if (mario.idle == true)
		surface.drawImage(mario.img, mario.x, mario.y);
	else
		surface.drawImage(mario.img,
						  frameIndex*100, 0, 100, 100,		// Source rectangle.
						  mario.x, mario.y, 100, 100);	// Dest rectangle.
}

})();

