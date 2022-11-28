function interval(){
    for(var j=0;j<5;j++)
    {
        images[j].setAttribute('src','../imgs/1.jpeg')
    }
    images[i++].setAttribute('src','../imgs/2.jpeg')
console.log(i)
if(i==5){
    i=0;
}
}
var i=0;
var images=document.querySelectorAll('img');
var myInterval= setInterval(interval,1000)
 function mouseHover()
 {
    clearInterval(myInterval)
 }
 function mouseLeave()
 {
    myInterval=setInterval(interval,1000)
 }