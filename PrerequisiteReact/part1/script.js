// Export for normal and arrow function

export default function DoSomething(){

}

export const DoSomething=()=>{

}

// Components

const MyComponent=()=>{
    return <div></div>
}

// button

<button 
    onClick={()=>{
        console.log("hello world");
    }}
></button>

// ternery operator

let age1=10;
let name1=age1>10 && "Pedro";
name1=age1>10 ? "Pedro" : "Jack";

const Component=()=>{
    return age1>10 ? <div>Pedro</div> : <div>Jack</div>;
};


// Objects

const person1={
    name:"Pedro",
    age:20,
    isMarried:false,
};

// variables

const name2=person1.name;
const age2=person1.age;
const isMarried2=person1.isMarried;

// Destructuring - alternative to variable declaration

const {name3,age3,isMarried3}=person1;

// shorthand for using predefined values in the object

const name4 = "Pedro";
const age4 = 20;

const person2={
    name4,
    age4,
    isMarried4:false,
}

// Spread operator for cloning object and modifying

const person3={
    name5:"Pedro",
    age5:20,
    isMarried5:false,
}

const person4={...person3,name:"Jack"}

// Spread operator for cloning array and adding something in it

const names1=["Pedro","Jack","Jessica"];
const names2=[...names1,"Joe"];


// Map
let names=["Pedro","Jessica","Carol","Pedro","Pedro"];

names.map((name)=>{
    // console.log(name);
    // return "Joe";
    // return name+"1";
    return <h1>{name}</h1>;
});


// Filter
names.filter((name)=>{
    return name!="Pedro";
});

// Async + Await + Fetch;

