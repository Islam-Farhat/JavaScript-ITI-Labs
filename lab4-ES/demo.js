let number1=123;
let number2=456;
[number1,number2]=[number2,number1]
console.log(number1) 

////////////////////////////////////////
let arr=[1,2,3,5,6,7,8]
function Calc(arrParam)
{
     return[ Math.max(...arrParam),Math.min(...arrParam)]
}
 var result=Calc(arr);
 [max,min]=result;
 console.log(`Max: ${max}, Min: ${min}`)

 ////////////////////////////////////////

 var fruits=["apple","strawberry","banana","orange","mango"]
 //a
 let every = fruits.every((item) => typeof(item) == 'string');
 console.log(every)
//b
 let some = fruits.some((item) => item.startsWith("a"));
 console.log(some)
 //c
 let filter = fruits.filter((item) => (item.startsWith("b")||item.startsWith("s")));
 console.log(filter);
//d
let map = fruits.map((item) => `I like ${item}`);
console.log(map);
//e
fruits.forEach((item, index) => {
  console.log(`item : ${item} , index : ${index}`);
});