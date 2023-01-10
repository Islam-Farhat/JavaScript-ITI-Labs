function twoParameters(a, b) {

      try {
            if (arguments.length != 2) {
                  throw "Number of parameters must be 2"
            }
      } catch (error) {
            console.log(error)
      }
}
twoParameters(1, 2, 3);

//////////////////////////////////////////

function NumberParameters() {

      try {
            if (arguments.length == 0) {
                  throw "Parameters must be at least one"
            }
            var sum=0;
            for(var i=0;i<arguments.length;i++)
            {
                  if(typeof (arguments[i])!='number')
                  {
                        throw "Parameters must be Numbers"
                  }
                     sum+=arguments[i];
            }
            document.writeln(sum);
            console.log(sum);
      } catch (error) {
            console.log(error)
      }
}
NumberParameters(12,3)

/////////////////////////////////////////////////////////

function reverseParameters1()
{ 
      for(var i=arguments.length-1;i>=0;i--)
      {
            document.write(arguments[i]+" ");
      }
}
function reverseParameters2()
{ 
      var arr =[];
      for(var i=0;i<arguments.length;i++)
      {
            arr[i]=arguments[i];
      }
      arr=arr.reverse();
      for(var i=0;i<arr.length;i++)
      {
            document.write(arr[i]+" ");
      }
}
reverseParameters2(10,3,2,4,1,5)