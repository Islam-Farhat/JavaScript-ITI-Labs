var names = ["islam","fatma","mohamed","ahmed","mahmoud","omar","fatma"]

do{
    var random = Math.floor(Math.random()*10)
    var random2 = Math.floor(Math.random()*10)

}while(random == random2||random>names.length-1||random2>names.length-1)
console.log(random)
console.log(random2)
document.writeln("<h2>Output: "+names[random]+", "+names[random2] +"</h2>")

