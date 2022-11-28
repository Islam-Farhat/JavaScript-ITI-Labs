var currrentimage=1;
function Slider()
{ 
    if(currrentimage==3)
    {
        currrentimage=0
    }
    var image=document.getElementById("imgnow")
    image.setAttribute("style", 'background-image: url("../imgs/banner'+(++currrentimage)+'.jpg")')
    
} 

setInterval(Slider,3000)

function Clothes()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="block"
    bags.style.display="none"
    phones.style.display="none"
    footwear.style.display="none"
    
}
function Bags()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="none"
    bags.style.display="block"
    phones.style.display="none"
    footwear.style.display="none"
}
function Phones()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="none"
    bags.style.display="none"
    phones.style.display="block"
    footwear.style.display="none"
}
function Footwear()
{
    var clothes=document.querySelector('.product .all-clothes')
    var bags=document.querySelector('.product .all-bags')
    var phones=document.querySelector('.product .all-phones')
    var footwear=document.querySelector('.product .all-footwear')
    clothes.style.display="none"
    bags.style.display="none"
    phones.style.display="none"
    footwear.style.display="block"
}


function Login()
{
    //Validation Name
   var validName=document.getElementById("name")
   var regName = /^[a-zA-Z ]{2,30}$/; 
   if(!String(validName.value).match(regName))
    {
        var name=document.getElementById("validname")
        name.style.display="block"
    }
    else
    {
        var name=document.getElementById("validname")
        name.style.display="none"
    }

    //Validation Email
    var validEmail=document.getElementById("email")
    var emailPattern=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!String(validEmail.value).match(emailPattern))
    {
        var email=document.getElementById("validemail")
        email.style.display="block"
    }
    else
    {
        var email=document.getElementById("validemail")
        email.style.display="none"
    }

    //Validation Password
    var validPassword=document.getElementById("password")

    if(validPassword.value==''||validPassword.value.replace(/^\s+|\s+$/gm,'')==''||validPassword.value.length<8)
    {
        var password=document.getElementById("validpassword")
        password.style.display="block"
    }
    else
    {
        var password=document.getElementById("validpassword")
        password.style.display="none"
    }

    //Validation Confirm Password
    var validConfirmPassword=document.getElementById("confirm")

    if(validConfirmPassword.value==''||validConfirmPassword.value.replace(/^\s+|\s+$/gm,'')==''||validConfirmPassword.value.length<8||validConfirmPassword.value!=validPassword.value)
    {
        var password=document.getElementById("validconfirmpassword")
        password.style.display="block"
    }
    else
    {
        var password=document.getElementById("validconfirmpassword")
        password.style.display="none"
    }  
}
var counter = 0;
function addToCart(e)
{
    e.preventDefault();
    //console.log(counter)
    var cartNum=document.getElementById("idnum")
    cartNum.innerHTML=counter++;
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}