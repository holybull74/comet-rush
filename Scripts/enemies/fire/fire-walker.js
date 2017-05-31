//Fire-walker
//console.log("Executing Fire Walker Script");
var fireWalker = {
    img: null,
    size: 100,
    dir: 0,
    maxFrames: 3,
    currentFrame: 0,
    frameIndex: 0,
    sourceX: 0,
    sourceY: 0,
    x: 0,
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
    move: function()
    {
      //  console.log("Firewalker x : " + this.x + "Direction: " + this.dir)
        if (this.dir == 0)
        {
            this.x += 5;
            if (this.x >= 400)
                this.dir = 1;
        }
        else {
            this.x -= 5;
            if (this.x < 0)
                this.dir = 0
        }
    }
};

var fireWalkerImg = [new Image, new Image];
//fireWalkerImg.addEventListener("load", loadHandler, false);
fireWalkerImg[0].src = "./Assets/fireEnemySpriteSheet-r.png";
fireWalkerImg[1].src = "./Assets/fireEnemySpriteSheet-l.png";
//fireWalker.img = fireWalkerImg;

//function loadHandler() {
    updateAnimation();
//}

function updateAnimation()
{
    setTimeout(updateAnimation, 100);
    fireWalker.updateAnimation();
}
