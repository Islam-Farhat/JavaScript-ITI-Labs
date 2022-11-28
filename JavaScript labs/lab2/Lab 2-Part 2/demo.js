//Array
//3.1

// var arrNumbers=[]
// do{
// arrNumbers[0]=parseInt(prompt("Enter your First Number: "))
// }while(isNaN(arrNumbers[0]));

// do{
// arrNumbers[1]=parseInt(prompt("Enter your Second Number: "))
// }while(isNaN(arrNumbers[1]));
// do{
// arrNumbers[2]=parseInt(prompt("Enter your Third Number: "))
// }while(isNaN(arrNumbers[2]));

// document.writeln('<h1 style="color:red;">Sum of 3 values'+ arrNumbers[0]+'+'+arrNumbers[1]+'+'+arrNumbers[2]+' <span style="color:black;"> :'+(arrNumbers[0]+arrNumbers[1]+arrNumbers[2])+'</span></h1>')
// document.writeln('<h1 style="color:red;">Multiplication of 3 values'+ arrNumbers[0]+'*'+arrNumbers[1]+'*'+arrNumbers[2]+' <span style="color:black;"> :'+(arrNumbers[0]*arrNumbers[1]*arrNumbers[2])+'</span></h1>')
// document.writeln('<h1 style="color:red;">Division of 3 values'+ arrNumbers[0]+'/'+arrNumbers[1]+'/'+arrNumbers[2]+' <span style="color:black;"> :'+(arrNumbers[0]/arrNumbers[1]/arrNumbers[2])+'</span></h1>')

//----------------------------------------------------------
//3.2

// var arrBeforeSort=[]
// for(var i=0;i<5;i++)
// {
//     arrBeforeSort[i]=parseInt(prompt("Enter your Number ("+(i+1)+"): "))
// }
// document.writeln('<h1 style="color:red;">Your array before Sorted: <span style="color:black;">'+arrBeforeSort+'</span></h1>')
// document.writeln('<h1 style="color:red;">Array after Sorted by ascending: <span style="color:black;">'+arrBeforeSort.sort().reverse()+'</span></h1>')
// document.writeln('<h1 style="color:red;">Array after Sorted by ascending: <span style="color:black;">'+arrBeforeSort.sort()+'</span></h1>')

//-----------------------------------------------------------

//Math Object

var radius;
do{
    radius=parseInt(prompt("Enter your Radius: "))
}while(isNaN(radius));
alert("Circle area:"+ Math.PI*radius*radius)

//-----------------------------------------

var valueSquare;
do{
    valueSquare=parseInt(prompt("Enter your value you want squre root it: "))
}while(isNaN(valueSquare));
alert("Square root of "+valueSquare+" is "+Math.sqrt(valueSquare))

//-----------------------------------------

var angle;
do{
    angle=parseInt(prompt("Enter your angel you want to calculate its Cos value: "))
}while(isNaN(angle));
document.writeln('<h2>Cos '+angle+' is '+Math.cos(angle*Math.PI/180)+'</h2>')