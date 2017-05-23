// IIFE - Immediately Invoked Function Expression

(function () {
     console.log("Executing script");

    var stage = document.getElementById("stage");
    var canvas = document.querySelector("canvas");
    var surface = canvas.getContext("2d");


    canvas.width = 1400;
    canvas.height = 900;

    var topLeft = new Image();
    topLeft.src = "C:\Users\Ken\George Brown\game1014\Comet-Rush\Assets\TopLeft.png";

    var botLeft = new Image();
    botLeft.src = "BottLeft.png";

    var topMid = new Image();
    topMid.src = "TopMid.png";

    var center = new Image();
    center.src = "Center.png";

    var topRight = new Image();
    topRight.src = "TopRigth.png";

    var botRight = new Image();
    botRight.src = "BottRight.png";

    var lavaTop = new Image();
    lavaTop.src = "lavaTop.png";

    var lavaBot = new Image();
    lavaBot.src = "lavaBot.png";
	
	var mainChar = new Image();
    mainChar.src = "MainCharacter.png";
	
	

    var offsetX = 0;
    var offsetY = 0;



    var map =
        [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,9,0,0,0,0,0,2,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,3,3,3,5,7,7,1,3,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5],
        [2,4,4,4,6,8,8,2,4,4,4,4,4,4,3,3,3,4,4,4,4,4,4,4,4,3,5],
        [2,4,4,4,6,8,8,2,4,4,4,4,4,4,3,3,3,4,4,4,4,4,4,4,4,3,5]
        ];


    generateMap();

    function generateMap()
    {
        for (var row = 0; row < map.length; row++)
        {
            for(var col = 0; col < map[0].length; col++)
            {

                console.log(map[row][col]);

                if(map[row][col] === 1 )
                {
                    surface.drawImage(topLeft, col * 100, row * 100);
                }
                if(map[row][col] === 2 )
                {
                    surface.drawImage(botLeft, col * 100, row * 100);
                }
                if(map[row][col] === 3 )
                {
                    surface.drawImage(topMid, col * 100, row * 100);
                }
                if(map[row][col] === 4 )
                {
                    surface.drawImage(center, col * 100, row * 100);
                }
                if(map[row][col] === 5 )
                {
                    surface.drawImage(topRight, col * 100, row * 100);
                }
                if(map[row][col] === 6 )
                {
                    surface.drawImage(botRight, col * 100, row * 100);
                }
                if(map[row][col] === 7 )
                {
                    surface.drawImage(lavaTop, col * 100, row * 100);
                }
                if(map[row][col] === 8)
                {
                    surface.drawImage(lavaBot, col * 100, row * 100);
                }
				if(map[row][col] === 9)
                {
                    surface.drawImage(mainChar, col * 100, row * 100);
                }

            }
        }
    }

    function draw()
    {
        surface.save();
        surface.translate(offsetX,offsetY);
        surface.clearRect(-offsetX, -offsetY, offsetX + 100,900);

        surface.restore();

    }

   window.addEventListener('keydown', function(e) {
        if (e.keyCode === 37) { // left
            offsetX--;
            console.log(offsetX);
        } else if (e.keyCode === 39) { // right
            offsetX++;
            console.log(offsetX);
        }
        draw();
    }, false);

  //  draw();
})();

