const nav=document.getElementById('nameDisplay');

// const container=document.getElementById('container');

const red=document.getElementById('red');
const blue=document.getElementById('blue');
const green=document.getElementById('green');
const yellow=document.getElementById('yellow');

const btn=document.getElementsByTagName('button');

red.addEventListener("click",()=>{
    red.style.backgroundColor='red';
    red.style.color='white';
    red.style.borderColor='red';
});

blue.addEventListener("click",()=>{
    blue.style.backgroundColor='blue';
    blue.style.color='white';
    blue.style.borderColor='blue';
});

green.addEventListener("click",()=>{
    green.style.backgroundColor='green';
    green.style.color='white';
    green.style.borderColor='green';
});

yellow.addEventListener("click",()=>{
    yellow.style.backgroundColor='yellow';
    yellow.style.borderColor='yellow';
});



const displayName=()=>{
    let Name=document.getElementById('nameInput').value; //input value
    nav.textContent='Hello, '+ Name ;
    nav.style.fontSize='20px';
}
