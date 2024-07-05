// arrow functions

const square=(num)=>{
    return num*num;
}
console.log(square(4));

// callback function

const calculate=(a,b,operation)=>{
    return operation(a,b);
}

// method 1
const addition=calculate(3,4,function(num1,num2){
    return num1+num2;
});
console.log(addition);

// method 2
const subtraction=(a,b)=> a-b;
const subResult=calculate(8,3,subtraction);
console.log(subResult);

// method 3
function multiply(a,b){
    return a*b;
}
const mulResult=calculate(3,2,multiply);
console.log(mulResult);

// Array callback functions
// .find()
// .findIndex()
// .forEach()
// .map()
// .filter()
// .every()
// .same()

const a=[4,1,6,-2,-5,3,2,-8,6,7];
// find,findIndex
const firstNeg=(num)=>{
    return num<0;
}
// const result=a.find(firstNeg);
const result=a.findIndex(firstNeg);
console.log(result);

// forEach
a.forEach((num,i)=>{
    console.log("array num", num, i);
});










