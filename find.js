//find index position in array 

let arr = [{name: "abc1" , age : "22" },{name: "abc2" , age : "23" },{name: "abc3" , age : "24" },{name: "abc4" , age : "25" }];

console.log(arr)

console.log("----------------------------------")

let index = arr.findIndex((each)=>{
return (each.name === "abc3")
 
})

console.log(index);

console.log("----------------------------------")

let index1 = arr.findIndex((each )=>{
return (each.age === "26")
})

if ( index1 == -1){
console.log("this object is not available in this array please try a diffrent value " + index1)}
else{
console.log("the index position of the array element is " + index1)}

console.log("----------------------------------")

let index2 = arr.findIndex((each)=>{
return (each.name  === "abc4")
})

if ( index2 == -1){
console.log("this object is not available in this array please try a diffrent value " + index2)}
else{
console.log("the index position of the array element is " + index2)}




