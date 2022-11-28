function CheckType()
{
    var flag=true;
    for(var i=0; i<arguments.length;i++)
    {
        if(typeof(arguments[i])!= "number")
        {
            flag=false;
            document.writeln("<h2>All parameter must be number</h2>")
        }        
    }
    if(flag)
    {
        document.writeln("<h2>Done</h2>")
    }
}
CheckType(1,2," ",4)

////////////////////////////////////////////
function CountParamter()
{
    if(arguments.length==2)
    {
        document.writeln("<h2>Sucess</h2>")
    }
    else{
        document.writeln("<h2>Must be two parameter</h2>")
    }
}
CountParamter(1,3)
/////////////////////////////////////////
function Print()
{
    for(var i=0; i<3; i++)
    {
            (function()
            {
            console.log(i)
            })();
    }
}
Print();

