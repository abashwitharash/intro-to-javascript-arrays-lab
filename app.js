/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

//const foods = [];  

//console.log('Exercise 1 result:', foods);

// Exercise 2 add strings to array 

const foods = ["pizza", "cheeseburger"];  

console.log('Exercise 1 result:', foods);

// Exercise 3 insert at the beginning 

foods.unshift("taco");

console.log('Exercise 3 result:', foods);

// Exercise 4 access an array element 

const favFood = foods[1];

console.log('Exercise 4 result:', favFood);

// Exercise 5 Splice

foods.splice(2, 0, "tofu")

console.log('Exercise 5 result:', foods);

