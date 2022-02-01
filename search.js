//search in javascript 
let arr = [{name: "abc1" , age : "22" },{name: "abc2" , age : "23" },{name: "abc3" , age : "24" },{name: "abc4" , age : "25" }];


let object = arr.find((each)=>{
if(each.name == "abc3"){
return each;}
});

console.log(object);

console.log("--------------------------------");

let object1 = arr.find((each)=>{
if(each.age == 25 ){
return each; }
})


console.log(object1);

console.log("--------------------------------");


let object2 = arr.find((each)=>{
if(each.age == "24"){
return each;}
});
console.log(object2)

console.log("--------------------------------");

let = object3 = arr.find((each)=>{
 if (each.name == "abc2"){
return each;
}
});

console.log(object3)