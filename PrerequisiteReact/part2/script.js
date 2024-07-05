// DOM



// Import / Export Notation

// in node js

const axios=require('axios'); //import

module.exports={anObject}; //export

// in react

import axios from "axios"; //import

export {anObject}; //export

// conditional statement / ternary operator

let color1="green";
let isCorrect1=false;
color1===isCorrect1?"green":"red";

let color2="red";
let isCorrect2=false;
color2===isCorrect2&&"green";


// Optional Chaining - ?  , Template literals - ` ${}`
const fetchData=async(animalName)=>{
    const data=await fetch(`imaginaryapi.com/searchTerm=${animalName}`);
    const name=data.person?.name;
}
fetchData();





































































