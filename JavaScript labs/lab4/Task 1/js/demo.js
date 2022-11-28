function changeHtml()
{
    var element=document.querySelector(".span")
    element.innerHTML='<h2 id="texthead">Hello Html</h2>'
}

function changeText()
{
    // var element0=document.querySelector(".span")
    // element0.innerHTML='<p id="texthead"></p>'
    var element=document.getElementById("texthead")
    element.innerText="Hello Text"
}

function changeContent()
{
    // var element0=document.querySelector(".span")
    // element0.innerHTML='<p id="texthead"></p>'
    var element=document.getElementById("texthead")
    element.textContent="Hello Content"
}
function Multiply()
{
    var inputs=document.getElementsByTagName("input")
    var result=document.getElementById("result")
    result.innerText="Result: "+inputs[0].value*inputs[1].value
}
function changeStyle()
{
    var div = document.querySelector(".header");
    div.classList.toggle("jsstyle");
}
function Test(){
    var googlelink=document.links
    console.log(googlelink[0])
    googlelink[0].setAttribute("href","https://www.linkedin.com/");
    googlelink[1].setAttribute("href","https://www.google.com/");
}