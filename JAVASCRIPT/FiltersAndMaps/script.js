let students=[
    {id:"001",name:"a",sports:"Cricket"},
    {id:"002",name:"b",sports:"Basketball"},
    {id:"003",name:"c",sports:"Hockey"},
    {id:"004",name:"d",sports:"Badminton"},
    {id:"005",name:"e",sports:"Golf"},
    {id:"006",name:"f",sports:"Football"},
];

const names=students
.filter((currValue)=>currValue.sports==="Cricket")
.map((currValue,index,array)=>{
    return `<li>${currValue.name}</li>`;
});

console.log(names);

const div=document.getElementById('container');
div.innerHTML=`<ul>${names.join('')}</ul>`;

// const newArray=students.filter((currValue)=>{
//     if(currValue.id%2===0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(newArray);

