"use strict";

//JavaScript is synchronous. 동기적이다
//Execute the code block in order after hoisting. 순차적 실행
//호이스팅 hoisting : var, 함수선언이 젤 위로 올라감

console.log("1");
// setTimeout(function(){
//     console.log('2'); //브라우저에(요청)서 1초 있다가 실행 / 비동기적 실행방법
// }, 1000)

setTimeout(() => console.log("2"), 1000);
console.log("3");

//Synchronous callback 즉각적 동기적
function printImmediately(print) {
  //함수선언 이 부분을 호이스팅
  print(); //콜백실행
}
printImmediately(() => console.log("hello"));

//Asynchronous callback 나중에 언제 실행될지 모르는
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(()=>{
        if(user === 'ellie'){
            onSuccess({name: 'ellie', role:'admin'});
        }else{
            onError(new Error('no access'));
        }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
        user,
        userWithRole => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
        error => {
            console.log(error);
        }    
        );
        },
        error => {
            console.log(error);
        }
);