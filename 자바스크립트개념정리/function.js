function printHello(){
    console.log('Hello');
}
printHello();

function sayHello(message){
    console.log(message);
}
sayHello('goodMorning');
sayHello(5555);


//2. 파라미터 Parameters 함수function에 전달되는
// primitive parameters: passed by value 메모리에 밸류가 그대로 저장-> 밸류 전달되고
// object parameters: passed by reference 오브젝트는 레퍼런스가 전달
function changeName(obj){
    obj.name = 'apple';
}
const lemon = { name : 'lemon'};
changeName(lemon);
console.log(lemon); //변경된 오브젝트 내용확인 가능

// 3. Default parameters (added in ES6)
function showMessage(message, from = '몰라'){ //원하는디폴값정해놓으면 사용자가
    console.log(`${message} by ${from}`);     // 파라미터 값 전달하지 않을 때 대체~
}
showMessage('Hi!'); // 아래와 같이 쓰다가..

// function showMessage(message, from){
// if(from == undefined){
//     from = 'unknown';
// }
// console.log(`${message} by ${from}`);
// }
// showMessage('Hi!');


//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('apple', 'straw', 'berry');

//5. Local scope 범위
let globalMessage = 'global'; //global variable 전역변수
function printMessage(){
    let message = 'hello'; //local variable 지역변수
    console.log(message); 
    console.log(globalMessage); //안에서 밖을 볼 수 있음.
    function printAnother(){ //중첩된 함수에서 자식함수가 부모함수에 정의된 변수 접근 가능 =>클로져
        console.log(message);
        let childMessage = 'nono';
        console.log(childMessage);
    }
    printAnother();
    // console.log(childMessage);// error 밖에서는 안을 볼 수 없다!!
}
printMessage(); 
// console.log(message); // error 밖에서는 안을 볼 수 없다!!

sum (2, 3); // 호이스팅 : JS엔진이 선언된 것을 제일 위로 올려줌
//6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit //bad

//2. callback 콜백 function using function expression
function randomQuiz(answer, printYes, printNo){ //함수들2,3을 파라미터로..
    if(answer === 'apple'){
        printYes();
    }else {
        printNo();
    }
};
//anonymous function 익명함수
const printYes = function(){
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces // 디버깅할때 함수이름 나오게
//recursions
const printNo = function print(){
    console.log('no~');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('apple', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint!');


const add = (a, b) => a + b; //화살표함수버젼.
const add2 = function (a,b){
    return a + b;
};

//IIFE: Immediately Invoked Function Expression 즉시호출
(function hello() {
    console.log('IIFE');
})(); 

/////////////////////////////////quiz!
function sum(a, b){
    return a + b;
}
const rs = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);

////////////////////////////////////
function calculate (a, b){
    return a * b;
}
let command = calculate(3,4); //12
console.log(command);
//////////////////////////////////
const calculate1 = (a, b) => a * b; //화살표함수버젼.
console.log (calculate1);

const calculate2 = function (a,b){
    return a * b;
};
let command2 = calculate2(3,6); //18
console.log(command2);

//////////////////////////////////// 정답부분
function calculate(command, a, b){
    switch(command){
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        // default:
        //     throw Error('unknown command');
    }
}
console.log(calculate('multiply', 2,3));