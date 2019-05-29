
'use strict';


const two = () => 2;

const plus = (secondParam) => {
  const plusFunc = (firstParam) =>  firstParam + secondParam;
  return plusFunc;
} 
const one = (func) => func(1);
console.log(one(plus(two())));




