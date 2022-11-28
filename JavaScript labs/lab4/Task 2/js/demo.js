function Calc()
{
    var inputs=document.getElementsByTagName("input")
    const tag = document.querySelectorAll(inputs[0].value).length;
    const classname = document.getElementsByClassName(inputs[1].value).length;
    const id = document.getElementById(inputs[2].value);var flag=false;
    if(id != null){flag=true;}
    const name = document.querySelectorAll(inputs[3].value).length;

    var output=document.getElementById('1')
    output.setAttribute('value','all '+tag+',class '+classname+',id '+flag+' name '+name)

}