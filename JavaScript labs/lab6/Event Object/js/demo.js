 function ASCIIKey(eventObject)
 {
    alert("Your key: "+eventObject.key+" , ASCII: "+eventObject.keyCode)
    eventObject.preventDefault();
}


//Prevent menu from display
document.oncontextmenu = function(e){
    var evt = new Object({keyCode:93});
    stopEvent(e);
    keyboardUp(evt);
   }
   function stopEvent(event){
    if(event.preventDefault != undefined)
     event.preventDefault();
    if(event.stopPropagation != undefined)
     event.stopPropagation();
   }