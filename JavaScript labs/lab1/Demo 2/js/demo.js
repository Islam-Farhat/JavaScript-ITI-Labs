


//------------------------------------------------
var value;
var sum=0;
do{
    value=parseInt(prompt("Enter your value"))
    sum =sum+value;
}while( sum<100 && value != 0 )
document.writeln("<h1>Sum: "+sum+"</h1>")
//------------------------------------------------