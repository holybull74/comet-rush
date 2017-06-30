//Variable initialization
var stage = document.getElementById("stage");
canvas = document.getElementById("myCanvas");
canvas.width = 1400;
canvas.height = 900;
var surface = canvas.getContext("2d");

var backgroundY = 0;
var speed = 1;
var fadeOutDone = false;

//Audio
var introMusic = new Audio();
var themeSong = new Audio();

//Mouse variable initialization
var mouseX;
var mouseY;
var fadeId = 0;
var time = 0.0;

//Image objects
var bgImage = new Image();
var logoImage = new Image();
var playImage = new Image();
playImage.setAttribute("id", "play");
console.log("Img: " + playImage);
var instructImage = new Image();
var settingsImage = new Image();
var creditsImage = new Image();
var cometImage = new Image();

//Frame variables
var frames = 30;
var timerId = 0;

//Comet image variables
var cometX = [0,0];
var cometY = [0,0];
var cometWidth = 105;
var cometHeight = 120;

var cometVisible = false;
var cometSize = cometWidth;
var cometRotate = 0;

//Image source locations
bgImage.src = "./Assets/Background.png";
logoImage.src ="./Assets/CometRushLogo3.png";
playImage.src = "./Assets/play.png";
instructImage.src = "./Assets/instructions.png";
settingsImage.src = "./Assets/settings.png";
creditsImage.src = "./Assets/credits.png";
cometImage.src = "./Assets/fireball.png";

//Audio source & initialization
introMusic.src = "./Assets/Castlevania - An Empty Tome.mp3"
themeSong.src = "./Assets/Heroic Fantasy - Onslaught(fire).mp3"
introMusic.load();
introMusic.play();
introMusic.loop = true;

//Initializing button position and size in arrays
var uiButton = [];
uiButton[0] = { x:560, y:292, width:280, height:120 };
uiButton[1] = { x:321, y:413, width:758, height:120 };
uiButton[2] = { x:435, y:535, width:531, height:120 };
uiButton[3] = { x:462, y:656, width:467, height:120 };

bgImage.onload = function(){
    surface.drawImage(bgImage, 0, backgroundY);
};

logoImage.onload = function(){
    surface.drawImage(logoImage, 300, -75);
};

playImage.onload = function(){
    surface.drawImage(playImage, uiButton[0].x, uiButton[0].y);
};

instructImage.onload = function(){
    surface.drawImage(instructImage, uiButton[1].x, uiButton[1].y);
};

settingsImage.onload = function(){
    surface.drawImage(settingsImage, uiButton[2].x, uiButton[2].y);
};

creditsImage.onload = function(){
    surface.drawImage(creditsImage, uiButton[3].x, uiButton[3].y);
};

timerId = setInterval(updateUI, 1000/frames); //Frame refresh rate

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

function updateUI()
{
    clear();
    move();
    draw();
}

function clear(){
    surface.clearRect(0, 0, canvas.width, canvas.height);
}

function move()
{
    backgroundY -= speed;
    if(backgroundY == -1 * canvas.height)
    {
        backgroundY = 0;
    }
    //Code substracts value of cometSize which is used to scale img when drawing
    //Once it reaches zero, process is reversed until fully scaled
    if(cometSize == cometWidth){
        cometRotate = -1;
    }
    if(cometSize == 0){
        cometRotate = 1;
    }
    cometSize += cometRotate;
}

function draw()
{
	surface.drawImage(bgImage, 0, backgroundY);
	surface.drawImage(logoImage, 300,-75);
	surface.drawImage(playImage, uiButton[0].x, uiButton[0].y);
    surface.drawImage(instructImage, uiButton[1].x, uiButton[1].y);
	surface.drawImage(settingsImage, uiButton[2].x, uiButton[2].y);
	surface.drawImage(creditsImage, uiButton[3].x, uiButton[3].y);
    if(cometVisible === true){
        surface.drawImage(cometImage, cometX[0] - (cometSize/2), cometY[0], cometSize, cometHeight);
        surface.drawImage(cometImage, cometX[1] - (cometSize/2), cometY[1], cometSize, cometHeight);
    }
}

function checkPos(mouseEvent)
{
    if(mouseEvent.pageX || mouseEvent.pageY == 0){
        mouseX = mouseEvent.pageX - this.offsetLeft;    //Get mouse position
        mouseY = mouseEvent.pageY - this.offsetTop;
    }
    else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){ // Overcome browser methods compatibility
        mouseX = mouseEvent.offsetX;
        mouseY = mouseEvent.offsetY;
    }

    for(i = 0; i < uiButton.length; i++) //Cycle through buttons 
    {
        //Check if mouse is within horizontal bound of a button
        if((mouseX > uiButton[i].x) && (mouseX < (uiButton[i].x + uiButton[i].width)))
        {
            //If the Y statement is true then mouse must be over a button
            if((mouseY > uiButton[i].y) && (mouseY < (uiButton[i].y + uiButton[i].height))) 
            {
                cometVisible = true; //Show comet icon besides the buttons when mouse hovers
                //Setting the image position to right and left of buttons
                cometX[0] = uiButton[i].x - (cometWidth/2) - 2;
                cometY[0] = uiButton[i].y + 2;
                cometX[1] = uiButton[i].x + uiButton[i].width + (cometWidth/2);
                cometY[1] = uiButton[i].y + 2;
                break;
            }
            else{
                cometVisible = false;
            }
        }
        //console.log("Comet visible? " + cometVisible);
        //console.log("X: " + mouseX + " " + "Y: " + mouseY);
        //console.log("i: " + i);
        //console.log("UIButton " + i + "X: " + uiButton[i].x + " Y: " + uiButton[i].y);
    }
}

//Checking for mouse clicks
function checkClick(mouseEvent)
{
    for(i = 0; i < uiButton.length; i++)
    {
        //Check mouse position
        if(mouseX > uiButton[i].x && mouseX < uiButton[i].x + uiButton[i].width)
        {
            if(mouseY > uiButton[i].y && mouseY < uiButton[i].y + uiButton[i].height)
            {
                switch(i){
                    case 0:
                        fadeId = setInterval("fadeOut(i)", 1000/frames);
                        //if (fadeOutDone === true)
                            initGame();
                            //break;
                    case 1:
                    case 2:
                    case 3:
            }
                //Stop other interval and event listeners when clicking
                //fadeId = setInterval("fadeOut(i)", 1000/frames);
                clearInterval(timerId);
                canvas.removeEventListener("mousemove", checkPos);
                canvas.removeEventListener("mouseup",checkClick);
            }
        }
    }
}

function fadeOut(menuChoice) //Fades out screen on click of either options
{
    surface.fillStyle = "rgba(0,0,0, 0.2)";
    surface.fillRect(0, 0, canvas.width, canvas.height);
    time += 0.1;
    if (time >= 2) { //Gives fade out illusion
        fadeOutDone = true;
        if (menuChoice === 0) {
            /*canvas.removeEventListener("mousemove", checkPos);
            canvas.removeEventListener("mouseup", checkClick);
            clearInterval(fadeId);
            clearInterval(timerId);
            clearInterval(updateUI);*/
            introMusic.pause();
            clearInterval(fadeId);
            time = 0;
            return fadeOutDone;
        }
        //timerId = setInterval("updateUI()", 1000 / frames);
        //canvas.addEventListener("mousemove", checkPos);
        //canvas.addEventListener("mouseup", checkClick);
        
    }
}





