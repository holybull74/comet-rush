/**
 * Created by andre on 7/10/2017.
 */

var width = 100;

function drain()
    {
        if(width>20)
        {
            width-=20;
            if(width > 60)
                {
                    divHealthP.style.backgroundColor = "green";
                }
            else if(width >= 40 && width <= 60)
                {
                    divHealthP.style.backgroundColor = "orange";
                }
          else if(width < 40)
                {
                    divHealthP.style.backgroundColor = "red";
                }
            playerDamagedSound.play();
            divHealthP.style.width = (width * 3) + 'px';
            divHealthP.innerHTML = width * 1 + '%';
        }
        else
        {
            width -= 20;
            divHealthP.style.width = (width * 3) + 'px';
            divHealthP.innerHTML = width * 1 + '%';
            player.img = images[12];
			playerAlive = false;
			player.speed = 0;
			player.sY = 0;
            gravity = 0;
            deathSound.play();
            setTimeout(gameEnd, 1000);
        }
    }


