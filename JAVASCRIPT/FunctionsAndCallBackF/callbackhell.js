// console.log("hello");

// setTimeout(function(){
//     console.log("this will execute later");
// },3000);

// console.log("world");
// console.log("three");


// getCheese
function getCheese(callback){
    setTimeout(()=>{
        const cheese="🧀";
        console.log("here is cheese",cheese);
        callback(cheese);
    },2000);
}

function makeDough(cheese,callback){
    setTimeout(()=>{
        const dough=cheese+'🍩';
        console.log("here is the dough",dough);
        callback(dough);
    },2000);
}

function bakePizza(doe,callback){
    setTimeout(()=>{
        const pizza=doe+'🍕';
        console.log("here is the pizza",pizza);
        callback(pizza);
    },2000);
}

// the arrow function that is passed is an anonymous function
getCheese((chiz)=>{
    // console.log("got the cheese",chiz);
    makeDough(chiz,(doe)=>{
        // console.log("got my dough",doe);
        bakePizza(doe,(pizza)=>{
            console.log("got my pizza",pizza);
        })
    });
});






























