// use for loop - when no. of iterations are known
// use while loop / do while - when no. of iterations are unknown

// for(let i=0;i<45;i++){
//     console.log("Anushka",i);
// }

// let step=0;
// while(step<5){
//     console.log('step',step);
//     step++;
// }

// let step=0;
// do{
//     console.log("step",step);
//     step++;
// }while(step<5);

// break

// let step=0;
// while(step<5){
//     console.log('step',step);
//     step++;
//     if(step===2){
//         break;
//     }
// }

// continue - skip

// let step=0;
// while(step<5){
//     console.log('step',step);
//     step++;
//     if(step===2){
//         continue;
//     }
// }

// Arrays
const words=["Apple","Banana","Cherry"];
console.log(words);
console.log(words[2]);

const xyz=["Apple","Banana","Cherry",12,true,{
    name:'Anushka'
},function hello(){
    console.log("Hello world");
}];

// console.log(xyz[6]);
// console.log(xyz.length);

const newWord=xyz;
newWord[2]="Engineer";
console.log(xyz);
console.log(newWord);

// Array Methods : 
// .indexOf()
// .includes()
// .push() - adds element at the end
// .unshift() - adds element at the start
// .pop() - removes element from the end
// .shift() - removes element from the start
// .sort()
// .slice(start_index,end_index) - returns subarray








