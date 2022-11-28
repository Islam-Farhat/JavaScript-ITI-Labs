
var textWillShow = "Hello my name is islam, I am 22 years old, I graduated from Faculty of Science.                 "
textWillShow = textWillShow.split('')
var paragraph = document.getElementById('mypragraph')

var j = 0;
var interval = setInterval(function () {
  paragraph.innerHTML += textWillShow[j++];
  if (j == textWillShow.length) {
    clearInterval(interval)
    window.close()
  }
}, 100)

