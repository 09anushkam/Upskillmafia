const a=12;
const b=4;
sum(a,b);

const c=2;
const d=24;
sum(c,d);

const e=5;
const f=14;
sum(e,f);

function sum(a,b){
    const sum=a+b;
    console.log("The result is",sum);
}

const square=function(num){
    return num*num;
}

console.log(square(3));

// Note - functions allows hoisting (i.e. declaring a function and calling it above or below it)
// function variable do not allow hoisting (i.e. declaring a function and calling it below the declaration)


// Nested Functions
function addSquare(a,b){
    const sa=Sq(a);
    const sb=Sq(b);
    function Sq(num){
        return num*num;
    }
    return sa+sb;
}

console.log(addSquare(3,4));




