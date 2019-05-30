
'use strict';


// const two = () => 2;

// const plus = (secondParam) => {
//   const plusFunc = (firstParam) =>  firstParam + secondParam;
//   return plusFunc;
// } 
// const one = (func) => func(1);
// console.log(one(plus(two())));

const number = param => func => func? func(param): param;
const one = number(1)
const two = number(2)
const plus = val => func => val+func;

console.log(one(plus(two())));


// one(plus(two()))





