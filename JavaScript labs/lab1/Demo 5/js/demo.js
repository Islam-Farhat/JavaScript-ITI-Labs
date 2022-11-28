var name;
var phoneNumber;
var moblieNumber;
var email
const date = new Date();
do
{
    name=prompt("Enter your name");
}while(isNaN(name) != true)

do
{ 
    phoneNumber=prompt("Enter your Phone Number");
}while( isNaN(phoneNumber) == true || phoneNumber.length != 8)

do
{
    moblieNumber = prompt("Enter your mobile Number");
}while(isNaN(moblieNumber) == true || moblieNumber.length != 11||(!String(moblieNumber).match(/\b012/)&&!String(moblieNumber).match(/\b011/)&&!String(moblieNumber).match(/\b010/)) )

//regularemail=/\w+@\w+.\w+/;
do { 
    email = prompt("Enter your email");
} while (!String(email).match(/^[A-Za-z]{3}@[A-Za-z0-9]{3}.com/));

var color;
do{
    color=prompt("Enter color (red, green, blue)")
}while(color!="red" && color!="green" && color!="blue")

document.writeln('<h1 style="'+"color:"+color+';">Your name: <span style="color:black;">'+name+'</span></h1>')
document.writeln('<h1 style="'+"color:"+color+';">Your phone: <span style="color:black;">'+phoneNumber+'</span></h1>')
document.writeln('<h1 style="'+"color:"+color+';">Your mobile: <span style="color:black;">'+moblieNumber+'</span></h1>')
document.writeln('<h1 style="'+"color:"+color+';">Your email: <span style="color:black;">'+email+'</span></h1>')
document.writeln('<br><br><br><h1 style="'+"color:"+color+';">Date today: <span style="color:black;">'+date+'</span></h1>')




