// the function should perform division of the first no. by the second number
// if the second no. is zero, the function should reject the promise with an appropriate error msg
// Otherwise, the function should resolve the promise with the result of the division
// use dummy value for testing purposes
// run for atleast 5 cases
// function should be arrow function

// Example 1
// 10 / 2
// 5

// Example 2
// 10 / 0
// Error : Division by zero is not allowed

getDivision=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        const result=num1/num2;
        if(num2===0){
            reject("Division by zero is not allowed");
        }
        resolve(result);
    });
}

async function Division(){
   try{
    const exp1=await getDivision(10,2);
    console.log(exp1);

    const exp2=await getDivision(27,3);
    console.log(exp2);

    const exp3=await getDivision(42,6);
    console.log(exp3);

    const exp4=await getDivision(48,12);
    console.log(exp4);

    const exp5=await getDivision(10,0);
    console.log(exp5);
   }

   catch(err){
    console.log("Error :",err);
   }
   
}

Division();
