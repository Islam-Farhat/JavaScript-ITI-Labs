
function getAllCookies() {
  return document.cookie;
}

var expireDate = new Date();

expireDate.setDate(expireDate.getDate() + 3);

var btn = document.getElementById("btnLogin");
var nameValue = document.getElementsByName("name")[0]; 
var passwordValue = document.getElementsByName("password")[0];

btn.addEventListener("click", function () {
  setCookie("name", nameValue.value);
  setCookie("password", passwordValue.value);
});

function setCookie(key, value) {
  document.cookie = key + "=" + value + ";expires=" + expireDate;
}

//Get All Cookies
var btnGetAll = document.getElementById("btn2");
var result = document.getElementById("result");
btnGetAll.addEventListener("click", function () {
  var allCookies = getAllCookies();
  result.innerHTML = allCookies;
});

//Get Cookie
var btnGetCookie = document.getElementById("btn3");
btnGetCookie.addEventListener("click", function () {
      var keyValue = document.getElementsByName("key")[0];
      getCookie(keyValue.value);
});
function getCookie(key){
      var allCookies = getAllCookies();   
      var arrCookies = allCookies .split('; ');
      var arrkeys=[];
      for(var i=0;i<arrCookies.length;i++)
      {
            var arr= arrCookies[i].split('=')
            arrkeys.push(arr[0]);
      }
      for(var i=0;i<arrkeys.length;i++)
      {
            if(arrkeys[i]==key)
              result.innerHTML = arrCookies[i];
      }
}


//Delete Cookies
var btnDelete=document.getElementById("btn4")
btnDelete.addEventListener("click", function () {
      var keyValue = document.getElementsByName("key")[0];
      deleteCookie(keyValue.value);
    });
 function deleteCookie(key) {
      expireDate.setDate(expireDate.getDate() - 10);
      document.cookie = key + "=" + "ssl" + ";expires=" + expireDate;
 }