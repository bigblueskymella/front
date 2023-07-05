let itemList = [];

let addBtn = document.querySelector("#add"); //#add요소 가져와 addBtn저장
addBtn.addEventListener("click", addList); //addBtn클릭하면 addList함수 실행
//addEventListener()함수 대신 addBtn.on-click = addList;로 사용해도 됨.


// function getItems() { //이 부분
//     var storedData = localStorage.getItem("storageList");
//     if(storedData != null) itemList = JSON.parse(storedData);
//         showList();
// }
// getItems();

//🟡리스트에 추가하기 //itemList콘솔창에서 확인!
function addList(){
    let item = document.querySelector("#item").value; //텍스트필드값(내용)가져옴
    if (item != null){
        itemList.push(item); //item변숫값 추가
        document.querySelector("#item").value = ""; //텍스트필드 자동지움
        document.querySelector("#item").focus();
    }
    //이 부분 //로컬스토리지를 리무스펑션안쪽으로 옮김
    showList();
}


//🟡리스트에 보여주기
function showList(){ //목록을 표시하는 showList()함수
    let list = "<ul>"; //목록을 시작하는 <ul>태그
     //저장
    for (let i=0; i<itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id=" + i +">X</span></li>"; //각 요소를 li~li로 묶음
    }
    list += "</ul>"; //목록을 끝내는 </ul>태그 저장

    document.querySelector("#itemList").innerHTML = list; //list변숫값 표시

    let remove = document.querySelectorAll(".close"); //삭제버튼을 변수로 저장. 배열형태가 됨
    for (let i=0; i<remove.length; i++){
        remove[i].addEventListener("click", removeList);
    }
}


//🟡리스트에 삭제하기
function removeList(){
    // console.log(this); //this 값을 콘솔 창에 표시
    let id = this.getAttribute("id"); //this누른값id가져와 id변수에 저장
    itemList.splice(id, 1); //itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
    //localStorage.setItem("storageList", JSON.stringify(itemList));
    showList();
}

