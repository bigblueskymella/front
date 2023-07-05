let now = new Date();

function inntext(){
    document.getElementById("current").innerText = now;
}
function innhtml(){
    document.getElementById("current").innerHTML = "<em>" + now + "</em>";
}

//이미지 속성 가져오기
 function displaySrc(){
    let cup = document.querySelector("#cup");
    //let cup = document.getElementById("cup"); //위와 같다.
    alert("이미지 소스: " + cup.getAttribute("src"));
 }
 //작은 이미지 클릭->큰 이미지 자리에 표시
 let cup = document.querySelector("#cup");
 let smallPics = document.querySelectorAll(".small");
   
//  for(let i = 0; i < smallPics.length; i++) {
//    smallPics[i].addEventListener("click", changePic);
//  }

 function changePic(){
    let newPic = this.src;
    cup.setAttribute("src", newPic)
 }

