//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍒','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
console.clear();

//3. Looping over an array
//print all fruits
//a. for
for (let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
fruits.forEach(function(fruit, index){
    console.log(fruit, index);
})

fruits.forEach((fruit) =>  console.log(fruit)); //배열 안에 들어있는 밸류들마다 내가 전달한 함수를 출력

//4. Addition, deletion, copy 
//push : add an item to the end
fruits.push('🍈','🍉');
console.log(fruits);
//pop : remove an item from the end
fruits.pop();
console.log(fruits);

//unshift : add an item to the beginning

fruits.unshift('🥝','🍇'); //앞에서 부터 들어감
console.log(fruits);

//shift : remove an item from the benigging
//fruits.shift();
console.log(fruits); //시프트 사용 느려짐. 길면 길수록

//splice : remove an item by index position
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 2, '🍑','🍏');
console.log(fruits);

//combine two arrays
const fruits2 = ['🥥','🍍','🍊'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝'));

//includes
console.log(fruits.includes('🥝'));
console.log(fruits.includes('🥥'));

//lastIndexOf
console.clear();
fruits.push('🥝');
console.log(fruits);
console.log(fruits.indexOf('🥝'));
console.log(fruits.lastIndexOf('🥝'));