'use strict';

//Promise is a JavaScript object for asynchronous operation.
// 비동기적 콜백함수대신 쓸 수 있는
//State: 오퍼레이트 수행중 pending -> fulfilled 오퍼레이트 끝냈을 때 or rejected
//Producer vs Consumer

//1. Producer 
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject)=>{
    
}) //promise 클래스 이기 때문에 new생성가능