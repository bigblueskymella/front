// let name = "rupy"
// let age = 19

// let person = {name, age} //예전방식 name:name, age:age
// console.log(person)



let bts = {
  name: "방탄",
  num: 7,
};

// let name = bts.name;
// let num = bts.num; //객체에서 꺼내서 변수 만드는 법

let { name, num } = bts; // 위2줄의 모던방식
console.log(name, num);
console.log(`내 이름은 ${name}이고 ${num}명 있다`);

// function calculate(obj) {
//   // 함수 안을 바꾸시오
//   return a + b + c;
// }

// calculate({ a: 1, b: 2, c: 3 });

let array = [1, 2, 3];

// let a = array[0];
// let b = array[1];
// let c = array[2];
let [a,...aa] = array;
// console.log(a, b, c);
console.log(aa);

let person = {
    nm:"dog",
    age:3,
    cute:true
}
let {nm, ...addRest} = person;
console.log(nm, addRest); //nm은 변수로써 빠져나왔다.

let d = [1,2]
let b = [3,4]
let c = [5,6]

// let result = d.concat(b,c) //배열 잇기.
let result = [...d,...b,...c];
console.log(result);

function foo(){ //기존의 함수 선언방식!
  console.log("hello");
}
foo();

let foo2 = () => { //화살표 함수
  console.log("hello");
}
foo2();

function foo3(){
  return "hoho";
}
console.log(foo3);

let foo4 = () => "hoho" //문장이 여러개이면{}들어가고 한개이면 이렇게 축약가능.
console.log(foo4);


///////////////////////////전역변수
let number = 17;
let personn = {
  name:"rupy",
  number:20,
  getInfo:function(){
    console.log(this.number) //this없으면 전역변수가 아래 출력됨. 화살표함수엔 this못씀.
  }                           //함수의 this는 나 자신을 불러준 객체? //lexical scope
}
personn.getInfo(); // 이 함수를 부르는 person객체를 this라고함.