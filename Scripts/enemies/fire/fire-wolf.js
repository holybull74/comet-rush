console.log("Executing FireWolf script...");
var fireWolf = {
    img: null,
    size: 100,
    dir: 0, //pointing left
    maxFrames: 3,
    currentFrame: 0,
    frameIndex: 0,
    scrollCount: 0,
    sourceX: 0,
    sourceY: 0,
    spawnPoint: 1900,
    x: 1900,
    y: 600,
    updateWolfAnimation: function() {
       // console.log("current frame: " + this.currentFrame + "frame index: " + this.frameIndex + "sourceX: " + this.sourceX);
        if (this.dir == 0){
            this.img = fireWolfImg[0];
            this.currentFrame++;
            if (this.currentFrame == this.maxFrames){
                this.frameIndex++;
                this.currentFrame = 0;
                if (this.frameIndex == 4)
                    this.frameIndex = 0;
                this.sourceX = this.frameIndex * this.size;
            }
        }
        else {
            this.img = fireWolfImg[1];
            this.currentFrame++;
            if (this.currentFrame == this.maxFrames)
            {
                this.frameIndex++;
                this.currentFrame = 0;
                if (this.frameIndex == 4)
                    this.frameIndex = 0;
                this.sourceX = this.frameIndex * this.size;
            }
        }
    },
    move: function () {
        console.log("Player x: " + player.x + " fireWolf x: " + this.x + " Total Scroll: " + this.scrollCount + " Direction: " + this.dir);
        if (rightPressed == true) {
            if (player.x >= 300 || (end == true && player.x > 1300)) {
                this.scrollCount += 8;
                if (this.dir == 0) {
                    this.x += 0;
                    //this.spawnPoint -= 8;
                    for (var r =0; r < map.length ; r++) {
		                for (var c =0 ; c < map[0].length ; c ++) {
			                if (map[r][c].aRock === true && ((this.x + this.size > map[r][c].x) && (this.x + this.size <= map[r][c].x + 20))) {
                                if ((this.y + this.size > map[r][c].y) && (this.y < map[r][c].y + SIZE)){
                                    //console.log("fireWolf hit right wall");
                                    //if (this.x >= this.spawnPoint + 300)
                                    this.dir = 1;
                                }        
                            }
                        }
                    }
                }
                else {
                    this.x -= 16;
                    //this.spawnPoint -= 8;
                    for (var r =0; r < map.length ; r++) {
		                for (var c =0 ; c < map[0].length ; c ++) {
			                if (map[r][c].aRock === true && ((this.x < map[r][c].x + SIZE) && (this.x >= map[r][c].x + SIZE - 20))) {
                                if ((this.y + this.size > map[r][c].y) && (this.y < map[r][c].y + SIZE)){
                                    //console.log("fireWolf hit left wall");
                                    //if (this.x >= this.spawnPoint + 300)
                                    this.dir = 0;
                                }     
                            }
                        }
                    }
                }
            }
            else {
                if (this.dir == 0) {
                    this.x += 8;
                    //if (this.x >= this.spawnPoint + 295)
                    for (var r =0; r < map.length ; r++) {
		                for (var c =0 ; c < map[0].length ; c ++) {
			                if (map[r][c].aRock === true && ((this.x + this.size > map[r][c].x) && (this.x + this.size <= map[r][c].x + 20))) {
                                if ((this.y + this.size > map[r][c].y) && (this.y < map[r][c].y + SIZE)){
                                    //console.log("fireWolf hit right wall");
                                    //if (this.x >= this.spawnPoint + 300)
                                    this.dir = 1;
                                }                      
                            }
                        }
                    }
                }
                else {
                    this.x -= 8;
                    //if (this.x < this.spawnPoint)
                    for (var r =0; r < map.length ; r++) {
		                for (var c =0 ; c < map[0].length ; c ++) {
			                if (map[r][c].aRock === true && ((this.x < map[r][c].x + SIZE) && (this.x >= map[r][c].x + SIZE - 20))) {
                                if ((this.y + this.size > map[r][c].y) && (this.y < map[r][c].y + SIZE)){
                                   // console.log("fireWolf hit left wall");
                                    //if (this.x >= this.spawnPoint + 300)
                                    this.dir = 0;
                                }           
                            }
                        }
                    }
                }
            }        
        }
        else if (rightPressed == false){
            if (this.dir == 0) {
                this.x += 8;
                //if (this.x >= this.spawnPoint + 300)
                for (var r = 0; r < map.length; r++) {
                    for (var c = 0; c < map[0].length; c++) {
                        if (map[r][c].aRock === true && ((this.x + this.size > map[r][c].x) && (this.x + this.size <= map[r][c].x + 20))) {
                            if ((this.y + this.size > map[r][c].y) && (this.y < map[r][c].y + SIZE)){
                               // console.log("fireWolf hit right wall");
                                //if (this.x >= this.spawnPoint + 300)
                                this.dir = 1;
                            }              
                        }
                    }
                }
            }
            else {
                this.x -= 8;
                //if (this.x < this.spawnPoint)
                for (var r = 0; r < map.length; r++) {
                    for (var c = 0; c < map[0].length; c++) {
                        if (map[r][c].aRock === true && ((this.x < map[r][c].x + SIZE) && (this.x >= map[r][c].x + SIZE - 20))) {
                            if ((this.y + this.size > map[r][c].y) && (this.y < map[r][c].y + SIZE)){
                               // console.log("fireWolf hit left wall");
                                //if (this.x >= this.spawnPoint + 300)
                                this.dir = 0;
                            }
                        }
                    }
                }
            }
        }
    }
};

var fireWolfImg = [new Image, new Image];
//fireWolfImg.addEventListener("load", loadHandler, false);
fireWolfImg[0].src = "./Assets/Enemy/FirePlanet/FireWolfSpriteR.png";
fireWolfImg[1].src = "./Assets/Enemy/FirePlanet/FireWolfSpriteL.png";
//fireWolf.img = fireWolfImg;

//function loadHandler() {
    updateWolfAnimation();
//}

function updateWolfAnimation()
{
    setTimeout(updateWolfAnimation, 100);
    fireWolf.updateWolfAnimation();
}

function fireWolfCollision() {
    if ((player.x > fireWolf.x - SIZE) && (player.x < fireWolf.x + fireWolf.size)) {
        //It's within x-range, check y-range
        //console.log("player/fireWolf in x-range..");
        if ((player.y > fireWolf.y - fireWolf.size) && (player.y < fireWolf.y + fireWolf.size)) {
            //It's in both ranges so fireWolf and player have collided
            //console.log("player/fireWolf in y-range..");
            endGame();
        }
    }
}

function endGame()
    {
       // clearInterval(idInt);
       // clearInterval(idInt2);
       // clearInterval(idInt3);
        window.alert("Game over!")
    }