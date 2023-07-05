let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj){
   let {name,address:{city}} = obj
    return name=="noona store" && city=="Seoul"
}

console.log(findStore({name,fruits,address}))