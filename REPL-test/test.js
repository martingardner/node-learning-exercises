const arr = require('./array'); //return all module exports from array.js
const {arr1, arr2, arr3} = require('./array'); // can destructure require as well
const dynamicTemplate = require('./dynamic-template');

const myTemplate = dynamicTemplate("Square Title");

console.log('arr', arr);
console.log('arr1', arr1);
console.log('myTemplate', myTemplate);
console.log('global', global); //Node equivalent to Window object in a browser, differing prototypes but overall same concept

//console.log('hi');
//console.log(arguments);