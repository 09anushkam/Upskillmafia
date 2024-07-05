// sum of all digits
// check if it an armstrong no.
// check if it is an prime no.
// Print all its factors
// note - use different variables for checking all the things, 
// atleast 5 variables to check

// Example 
// No. is 153
// Sum of it's digits is 9
// Is it an armstrong no.? Yes
// Is it a prime no.? No
// Factors - 1,3,17,51,153

// Start
// Sum of all digits
let number=153;
let sum=0;
while(number>0){
    sum=sum+(number%10);
    number=Math.floor(number/10);
}
console.log("Sum of digits of given is",sum);

// Armstrong number
let digit=0;
let cubsum=0;
while(number>0){
    digit=Math.pow((number%10),3);
    cubsum=cubsum+digit;
}
if(cubsum===number){
    console.log("Yes, It is an armstrong number");
}
else{
    console.log("No, It is not an armstrong number");
}

// Prime number
number=153;
let counter=0;
for(let i=2;i<number;i++){
    if(number%i===0){
        counter++;
    }
}

if(counter===0){
    console.log("Yes, It is a prime number");
}else{
    console.log("No, It is not a prime number");
}

// Factors
let factors=[];
for(let i=1;i<=number;i++){
    if(number%i===0){
        factors.push(i);
    }
}
console.log("Factors : ",factors);


