/**
 * Created by andre on 7/10/2017.
 */
var elem = document.getElementById("healthPercentage");
var width = 100;

function drain()
    {
        if(width>20)
        {
            width-=20;
            elem.style.width = (width * 5) + 'px';
            elem.innerHTML = width * 1 + '%';
        }
        else {
            width -= 20;
            elem.style.width = (width * 5) + 'px';
            elem.innerHTML = width * 1 + '%';
            gameoverPic = true;
        }
    }


