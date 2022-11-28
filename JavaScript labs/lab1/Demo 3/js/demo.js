var yourString = prompt("Enter your string")
var length=yourString.length;
var counter=0;
for(var i=0; i<length; i++)
{
    if(yourString[i]=='e')
    {
        counter++;
    }
}
document.write("<h1>Number of character 'e' in your string is: "+counter+"</h1>")