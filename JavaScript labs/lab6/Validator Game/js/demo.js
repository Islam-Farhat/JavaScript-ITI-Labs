function Submit()
{
    //Validation Name
   var validName=document.querySelector('tbody tr:nth-child(1) input')
   var regName = /^[a-zA-Z]/; 
   if(!String(validName.value).match(regName)/*validName.value==''||validName.value.replace(/^\s+|\s+$/gm,'')==''||isNaN(validName.value)==false*/)
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
    var validEmail=document.querySelector('tbody tr:nth-child(2) input')
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
    var validPassword=document.querySelector('tbody tr:nth-child(3) input')

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

    //Validation Gender
    var validGender=document.getElementsByName('gender')
    if(!(validGender[0].checked)&&!(validGender[1].checked))
    {
        var gender=document.getElementById("validgender")
        gender.style.display="block"
    }
    else
    {
        var gender=document.getElementById("validgender")
        gender.style.display="none"
    }
    //Validation Sports
    var validSports=document.querySelectorAll('tbody tr:nth-child(5) input')
    var countCheckedSports=0;
    for(var i=0;i<validSports.length;i++)
    {
        if(validSports[i].checked)
        {
            countCheckedSports++;
        }
    }
    if(countCheckedSports<2)
    {
        var sport=document.getElementById("validsport")
        sport.style.display="block"
    }
    else
    {
        var sport=document.getElementById("validsport")
        sport.style.display="none"
    }

    //Validation Country
    var validCountry=document.querySelectorAll('option')
    if(validCountry[0].selected)
    {
        var country=document.getElementById("validcountry")
        country.style.display="block"
    }
    else
    {
        var country=document.getElementById("validcountry")
        country.style.display="none"
    }
}