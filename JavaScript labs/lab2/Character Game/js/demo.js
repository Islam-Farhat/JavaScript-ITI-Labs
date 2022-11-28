function countChar(string ,letter)
{
    var arr=[];
    for(var i=0; i<String(string).length; i++)
    {
        if(string[i]==letter)
        {
            arr.push(i);
        }
    }
    return arr
}
var yourString=prompt("Enter your string")
var character=prompt("Enter your character")
var indexletter=countChar(yourString,character);
document.writeln("<h2>Output: "+indexletter+"</h2>")
