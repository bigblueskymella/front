//모든 article 요소를 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//article 요소의 개수만큼 반복
for(let el of items){    //현재 반복하는 article요소에 mouseenter이벤트 발생
el.addEventListener("mouseenter", e=>{    //자식요소인 video재생
    e.currentTarget.querySelector("video").play();
});
//현재 반복하는 article 요소에 mouseleave 이벤트 발생
el.addEventListener("mouseleave", e=>{    //자식 요소인 비디오 일시 정지
    e.currentTarget.querySelector("video").pause();
});
}


/////////////////////////////////////////////////////
 for(let el of items){    //현재 반복하는 article요소에 mouseenter이벤트 발생
el.addEventListener("click", e=>{    //제목과 본문의 내용, 글고 video 요소의 src값을 변수에 저장
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").innerText = tit; //aside 요소 안쪽 콘테츠에 위의 변수를 적용
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.querySelector("video").play(); //aside 요소 안쪽의 동영상을 재생하고, aside 요소에 on을 붙여 패널 활성화
    aside.classList.add("on");

    close.addEventListener("click", ()=>{ //close요소 클릭 시
        aside.classList.remove("on"); //aside 요소에 클래스 on을 제거해 비활성화하고 안쪽의 영상을 재생 정지
        aside.querySelector("video").pause();
    });
});
}