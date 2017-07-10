//Fire-walker
//console.log("Executing Fire Walker Script");
var fireWalker = {
    img: null,
    size: 100,
    dir: 0,
    maxFrames: 3,
    currentFrame: 0,
    frameIndex: 0,
    scrollCount: 0,
    sourceX: 0,
    sourceY: 0,
    spawnPoint: 2300,
    x: 2300,
    y: 600,
    updateAnimation: function() {
       // console.log("current frame: " + this.currentFrame + "frame index: " + this.frameIndex + "sourceX: " + this.sourceX);
        if (this.dir == 0){
            this.img = fireWalkerImg[0];
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
            this.img = fireWalkerImg[1];
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
       // console.log("Player x: " + player.x + " Firewalker x: " + this.x + " Total Scroll: " + this.scrollCount + " Direction: " + this.dir);
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
                                    //console.log("Firewalker hit right wall");
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
                                    //console.log("Firewalker hit left wall");
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
                                    //console.log("Firewalker hit right wall");
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
                                   // console.log("Firewalker hit left wall");
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
                               // console.log("Firewalker hit right wall");
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
                               // console.log("Firewalker hit left wall");
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

var fireWalkerImg = [new Image, new Image];
//fireWalkerImg.addEventListener("load", loadHandler, false);
fireWalkerImg[0].src = "./Assets/Enemy/FirePlanet/fireEnemySpriteSheetR.png";
fireWalkerImg[1].src = "./Assets/Enemy/FirePlanet/fireEnemySpriteSheetL.png";
//fireWalker.img = fireWalkerImg;

//function loadHandler() {
    updateAnimation();
//}

function updateAnimation()
{
    setTimeout(updateAnimation, 100);
    fireWalker.updateAnimation();
}

function fireWalkerCollision() {
    if ((player.x > fireWalker.x - SIZE) && (player.x < fireWalker.x + fireWalker.size)) {
        //It's within x-range, check y-range
        //console.log("player/fireWalker in x-range..");
        if ((player.y > fireWalker.y - fireWalker.size) && (player.y < fireWalker.y + fireWalker.size)) {
            //It's in both ranges so fireWalker and player have collided
            //console.log("player/fireWalker in y-range..");
            endGame();
        }
    }
}

function endGame()
    {
       // clearInterval(idInt);
       // clearInterval(idInt2);
       // clearInterval(idInt3);
       // window.alert("Game over!")
    }

