var i=1;
setInterval(function(){
    var image=document.getElementById('imgid')
    image.setAttribute('src','../imgs/'+(i++)+'.png')
    if(i==4)
    {
        i=1;
    }
},2000)