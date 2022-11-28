var height=100;
var down,up;
var newWindow = open("","",'width=200px,height='+height+'px')
height=2*height+10
setTimeout(downScreen(),1000)
function downScreen(){
 down=setInterval(function(){
    newWindow.moveBy(10,10)
    height+=10;
    console.log(height)
    if(height>=screen.height)
    {
        clearInterval(down);
        upScreen();
    }
},100)}

function upScreen()
{
    up=setInterval(function(){
        newWindow.moveBy(-10,-10)
        height-=10;
        console.log(height)
        if(height<=210)
        {
            clearInterval(up);
            height=210;
            downScreen();
        }
    },100)
}

function Stop()
{
    clearInterval(up)
    clearInterval(down)
    newWindow.focus();
}

