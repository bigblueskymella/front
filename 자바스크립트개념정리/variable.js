//1. Use strict
//added in ES5
//use this for Vanilla Javascript.

"use strict";

// 2. Variable
// let (added in ES6)

//boolean
//true : any other value
//false : 0, null, undefined, NaN, ''

//5. Local scope

let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    //자식
    console.log(message);
    let childMessage = "hello";
    console.log(childMessage);
  }
}
printMessage();
//console.log(message); //에러 scope
//밖에서는 안을 볼 수 없고 안에서는 밖을 볼 수 있다.

const simplePrint = function () {
  console.log("simplePrint");
};

const simplePrint = () => console.log("simplePrint");
