function FizzBuzz(number)
{
    if(number % 3==0 && number % 5!=0)
    {
        document.writeln("<h2>Fizz</h2>")
    }
    else if(number % 3!=0 && number % 5==0)
    {
        document.writeln("<h2>Buzz</h2>")
    }
    else if(number % 3==0 && number % 5==0)
    {
        document.writeln("<h2>Fizz Buzz</h2>")
    }
    else if(number % 3!=0 && number % 5!=0)
    {
        document.writeln("<h2>None</h2>")
    }
}

do{
    var yournumber = prompt("Enter Your Number")
}while(isNaN(yournumber)==true)

FizzBuzz(yournumber)
