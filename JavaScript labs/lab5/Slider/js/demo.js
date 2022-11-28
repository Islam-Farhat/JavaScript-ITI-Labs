var currrentimage=1;var myInterval;
function Previous()
{
    if(currrentimage==1)
    {
        currrentimage=4
    }
    var image=document.getElementById("imgnow")
    image.setAttribute("src",'../imgs/'+(--currrentimage)+'.jpg')
} 

function Next()
{
    if(currrentimage==3)
    {
        currrentimage=0
    }
    var image=document.getElementById("imgnow")
    image.setAttribute("src",'../imgs/'+(++currrentimage)+'.jpg')
    
} 

function Play()
{
    myInterval= setInterval(Next,1000)
}
function Stop()
{
    clearInterval(myInterval)
}