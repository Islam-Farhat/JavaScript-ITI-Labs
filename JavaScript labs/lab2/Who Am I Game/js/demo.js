var result= confirm("Do you fly?")
console.log(result)
if(result)
{
    var wild= confirm("Are you Wild")
    if(wild)
    {
        document.writeln('<img src="../imgs/1.jpg" style="width:300px;height: 300px;">')
    }
    else
    {
        document.writeln('<img src="../imgs/2.jpg" style="width:300px;height: 300px;">')
    }
}
else
{
    var undersea =confirm("Do you live under Sea")
    if(undersea)
    {
        var wild= confirm("Are you Wild")
    if(wild)
    {
        document.writeln('<img src="../imgs/3.jpg" style="width:300px;height: 300px;">')
    }
    else
    {
        document.writeln('<img src="../imgs/4.jpg" style="width:300px;height: 300px;">')
    }
    }
    else
    {
        var wild= confirm("Are you Wild")
        if(wild)
        {
            document.writeln('<img src="../imgs/5.jpg" style="width:300px;height: 300px;">')
        }
        else
        {
            document.writeln('<img src="../imgs/6.jpg" style="width:300px;height: 300px;">')
        }

    }

}