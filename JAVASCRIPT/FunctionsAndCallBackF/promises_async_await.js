// Promises

// ex-1 : flight ticket booking

const ticket=new Promise(function(resolve,reject){
    const isBoarded=false;
    if(isBoarded){
        resolve("You are in the flight");
    }
    else{
        reject("Your flight has been cancelled");
    }
});

// then,catch,finally

ticket
.then((data)=>{
    console.log("wohoo", data);
})
.catch((data)=>{
    console.log("oh no", data);
})
.finally(()=>{
    console.log("I will always be executed");
});

// ex-2 : PromisePizza

// Promises

function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="🧀";
            // console.log("here is the cheese",cheese);
            // resolve(cheese);
            reject("bad cheese");
        },2000);
    });
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=cheese+"🍩";
            // console.log("here is the dough",dough);
            resolve(dough);
        },2000);
    });
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza=dough+"🍕";
            // console.log("here is the pizza",pizza);
            resolve(pizza);
        },2000);
    });
}

// then,catch,finally

// getCheese()
// .then((cheese)=>{
//     console.log("here is the cheese",cheese);
//     return makeDough(cheese);
// })
// .then((dough)=>{
//     console.log("here is the dough",dough);
//     return bakePizza(dough);
// })
// .then((pizza)=>{
//     console.log("here is the pizza",pizza);
// })
// .catch((data)=>{
//     console.log("error occured!");
// })
// .finally(()=>{
//     console.log("Process ended");
// })

// async,await with try,catch

async function orderPizza(){
   try{
    const cheese=await getCheese();
    console.log("here is the cheese",cheese);

    const dough=await makeDough(cheese);
    console.log("here is the dough",dough);
    
    const pizza=await bakePizza(dough);
    console.log("here is the pizza",pizza);
   }
   catch(err){
    console.log("error occurred",err);
   }
}

orderPizza();



// Promises with then,catch,finally
// Promises with async,await and try,catch