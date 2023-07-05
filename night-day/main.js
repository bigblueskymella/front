//html태그 안에서 온클릭을 아래와 같이 js파일로 분리?
// <!--<input type="button" value="night" onclick="
// document.querySelector('body').style.backgroundColor = 'black';
// document.querySelector('body').style.color = 'white';
// ">
// <input type="button" value="day" onclick="
// document.querySelector('body').style.backgroundColor = 'white';
// document.querySelector('body').style.color = 'black';
// ">-->

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    self.value = "day";

    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = "powde rblue";
      i = i + 1;
    }
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    self.value = "night";

    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      console.log(alist[i]);
      alist[i].style.color = "blue";
      i = i + 1;
    }
  }
}
