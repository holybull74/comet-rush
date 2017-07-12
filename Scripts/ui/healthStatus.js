/**
 * Created by andre on 7/10/2017.
 */

var width = 100;

function drain()
    {
        if(width>20)
        {
            width-=20;
            divHealthP.style.width = (width * 5) + 'px';
            divHealthP.innerHTML = width * 1 + '%';
        }
        else
        {
            width -= 20;
            divHealthP.style.width = (width * 5) + 'px';
            divHealthP.innerHTML = width * 1 + '%';
            audioPlayerDeath.play();
            gameEnd();
        }
    }


