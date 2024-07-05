// Element selection by Id, ClassName, TagName, querySelector, querySelectorAll

// const myBody=document.body;
// const box2=document.getElementById('box-2');
// const divs=document.getElementsByTagName('p');
// const boxes=document.getElementsByClassName('box');
// const random=document.querySelector('.container .random');
// const boxes2=document.querySelectorAll('box');

// DOM Manipulation

// const box1=document.getElementById('box-1');
// box1.innerHTML="<h1>Hello</h1> <p>Hello World</p>";
// box1.style.backgroundColor="red";
// box1.classList.add('round-border');
// box1.classList.remove('box');

// const boxes=document.getElementsByClassName('box');
// for(let i=0;i<boxes.length;i++){
//     boxes[i].classList.add('round-border');
// }

// add new element
const container=document.getElementById('container');
const newParagraph=document.createElement('p');
newParagraph.innerHTML="This is brand new";
container.appendChild(newParagraph);
newParagraph.classList.add('box');