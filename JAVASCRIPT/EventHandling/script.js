// Event Handlers
// .onclick
// .onload
// .onmouseover
// .onmouseout
// .onkeypress
// .onkeydown
// .onkeyup

// function myFunction(){
//     console.log("I was Clicked!");
// }

// function mouseOver(){
//     console.log("mouse over");
// }

// function keyPressEvent(){
//     console.log("key was pressed");
// }

// function keyUpEvent(){
//     console.log("key up was pressed");
// }

// function keyDownEvent(){
//     console.log("key down was pressed");
// }

// Event Listeners
// something - 16:14

const box1=document.getElementById('box-1');
box1.addEventListener('mousemove',(e)=>{
    console.log("event object",e.clientX,e.clientY);
});

box1.addEventListener('click',()=>{
    console.log("click by event 2");
});

const nameInput=document.getElementById("nameInput");
nameInput.addEventListener('keydown',(e)=>{
    console.log('key',e.key);
});

nameInput.addEventListener('focus',(e)=>{
    console.log('key',e);
});


// Event Bubbling (sequencial events of nested elements)
// From inner to outer element

// Event Capturing (sequencial events of nested elements)
// From Outer to inner element

// const box1=document.getElementById('box-1');
// box1.addEventListener('click',()=>{
//     console.log("clicked on box");
// });
// const container=document.getElementById('container');
// container.addEventListener('click',()=>{
//     console.log('clicked on container');
// },true); 

// event capture has 3 parameters
// false-bubbling (by default)
// true-capturing event










