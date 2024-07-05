// find the maximum no. in the array
// calculate the sum of all elements in the array
// count the number of odd numbers in the array
// use a dummy array for testing purposes
// display the results of each operation to user on console.log

// Example - [4,8,2,11,6,7,10]
// Max no. - 11
// Summ of all elements - 48
// Count of odd no.s - 2

// Maximum number
let arr=[4,8,2,11,6,7,10];
let max=arr[0];
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        max=arr[i];
    }
}
console.log("Maximum number is",max);

// Sum of all elements
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log("Sum of all elements",sum);

// count of odd no.s
let odd=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        odd++;
    }
}
console.log("Count of odd numbers",odd);