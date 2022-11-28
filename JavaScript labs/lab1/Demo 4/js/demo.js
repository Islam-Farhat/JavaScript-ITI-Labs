var sensitive = confirm("Do you want your plaindorme sensitive or not");

switch(sensitive)
{
    case true:
        var plaindorme = prompt("Your plaindorma:");
        var length=plaindorme.length;
        var j=length-1;
        for(var i=0;i<length;i++,j--)
        {

            if(plaindorme[i]!=plaindorme[j])
            {
                document.write("<h2>No Plaindorme</h2>");j=-2;
                break;
            }
        }
        if(j != -2)
        {
            document.write("<h2>Plaindorme</h2>");
        }
        break;

     case false:
        var plaindorme = prompt("Your plaindorma:");
        plaindorme=plaindorme.toLowerCase();
        var plaindormainlower =plaindorme.toLowerCase();
        var length=plaindormainlower.length;
        var j=length-1;
        for(var i=0;i<length;i++,j--)
        {

            if(plaindorme[i]!=plaindormainlower[j])
            {
                document.write("<h2>No Plaindorme</h2>");j=-2;
                break;
            }
        }
        if(j != -2)
        {
            document.write("<h2>Plaindorme</h2>");
        }
        break;
}