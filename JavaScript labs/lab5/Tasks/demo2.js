/* createElement
 * append,appendChild
 * createDocumentFragment
 * before
 * after
 * insertAdjacentHTML
 * replaceChild -- search
 * removeChild
 * remove
 */

// var list = document.getElementById("list");

// var temp = document.createDocumentFragment(); // advanced

// for (var i = 0; i < 1000; i++) {
//   var li = document.createElement("li");
//   li.innerHTML = "Html " + (i + 1);

//   temp.appendChild(li);
// }

// list.appendChild(temp);
// var h1 = document.createElement("h1");

// h1.innerHTML = "web Technologies";
// list.after(h1);

// console.log(list.attributes);

// list.insertAdjacentElement("beforeend", h1);
// var targetELement = list.firstElementChild;

// list.remove();
// li.innerHTML = "CSS";
// list.removeChild(list.lastElementChild);

/**
 *
 * <div id="div" class="bg-light">Hello PD Track</div>
 */

// var output = document.getElementById("output");

// var div = document.createElement("div");
// var span = document.createElement("span");

// div.classList.add("bg-light");
// div.className = "bg-light";
// div.setAttribute("class", "bg-light");
// // div.id = "div1";
// // div.setAttribute("id", "div1");

// console.log(div);
// var myComment = document.createComment("This is a comment");
// div.innerHTML = "Hello PD Track";
// span.innerHTML = "Hello span";

// var test = document.body.appendChild(div);

// console.log(test);

// var myWin;
// function openNewWindow() {
//   myWin = open("about.html", "", "width=100,height=100");
//   myWin.focus();
// }
// function closeWindow() {
//   myWin.close();
// }
// function moveToWindow() {
//   myWin.moveTo(300, 300);
// }
// function moveByWindow() {
//   myWin.moveBy(50, 50);
// }
// function resizeToWindow() {
//   myWin.resizeTo(300, 300);
//   myWin.focus();
// }
// function resizeByWindow() {
//   myWin.resizeBy(100, 100);
// }

/**  */

// setTimeout(function () {
//   window.open("about.html");
// }, 2000);

// var i = 0;
// var myIterval = setInterval(function () {
//   console.log(i++);
// }, 1000);

// setTimeout(function () {
//   clearInterval(myIterval);
// }, 5000);

// var myInterval;
// var i = 0;
// function startCounter() {
//   var element = document.getElementById("count");
//   myInterval = setInterval(function () {
//     element.innerHTML = i++;
//   }, 1000);
// }

// function stopCounter() {
//   clearInterval(myInterval);
// }

// function downloadText() {
//   var link = document.getElementById("downLink");
//   var showMsg = document.getElementById("showMsg");
//   showMsg.append("link 3 secons from appendChild");
//   setTimeout(function () {
//     showMsg.innerHTML = "";
//     link.style.display = "block";
//   }, 3000);
// }

/**
 * BOM
 *  -- window
 *  -- location
 *  -- navigator -- self study
 *  -- history
 * -- screen -- self study
 */

// Get
// location.href = "https://www.google.com.eg/";
// console.log(location.assign(""));

function test() {
  //   location.assign("https://www.google.com.eg/");
  //location.replace("https://www.google.com.eg/");
  //location.reload();
}

navigator.geolocation.getCurrentPosition(fun1, fun2);

function fun1(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longtitude);
}
function fun2() {
  console.log("User refused to access your location");
}
