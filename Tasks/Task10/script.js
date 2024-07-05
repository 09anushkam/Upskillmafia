var P = 40000; 
var r = 0.08;
var n = 1; 
var t = 3;

var A = P * Math.pow(1 + (r / n), n * t);

console.log("The compound interest after " + t + " years is: " + A.toFixed(2));
