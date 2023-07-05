let wrap = document.querySelector("#wrap");
let box = document.querySelector("article");

// wrap.addEventListener("click", () => { //mousemove/mouseout
//   box.style.backgroundColor = "blue";
// }); //이 방식은 스타일속성 직접 삽입되어 우선순위 매우 높아서 기존css파일 우선순위에 문제발생할 수 있다.

// wrap.addEventListener("click", () =>{
//     wrap.classList.add("on");
// })

// wrap.addEventListener("click", () => {
//     let isOn = wrap.classList.contains("on");
//     console.log(isOn);
//     wrap.classList.add("on");
// })

wrap.addEventListener("click", ()=>{
    wrap.classList.toggle("on");
})



/*
const btNLeft = document.querySelector(".btnLeft");
const btNRight = document.querySelector(".btnRight");
const Box = document.querySelector("#box");
const deg = 45; //회전할 각도
let num = 1;

//btnLeft 를 클릭할 때마다
btNLeft.addEventListener("click", e => {
  e.preventDefault();
  num--;
  box.style.transform = `rotate(${num * deg} deg)`;
});

btNRight.addEventListener("click", e =>{
    e.preventDefault();
    num++;
    box.style.transform = `rotate(${num * deg} deg)`;
});

/*
const box = document.querySelector("#box");


box.addEventListener("mouseenter", ()=>{
    box.style.backgroundColor="hotpink";
})

box.addEventListener("mouseleave", ()=>{
    box.style.backgroundColor="aqua";
})

/*
box.style.width = "10%";
box.style.height = "300px";
box.style.backgroundColor = "hotpink";
box.style.transform="rotate(10deg)";


const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("click했다")
})








/*
const list=document.querySelector(".list");
const items = list.children;  // parentElement / previousElementSibling /nextElementSibling

console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
*/
