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

foods.splice(2, 0, "tofu");

console.log('Exercise 5 result:', foods);

//Exercise 6 Replace Elements 

foods.splice(1,1, "sushi", "cupcake")

console.log('Exercise 6 result:', foods);

//Exercise 7 Slice Method 

const yummy = (foods.slice(1, 3));

console.log('Exercise 7 result:', yummy);

// Exercise 8 Finding an index

const soyIdx = (foods.indexOf("tofu"))

console.log('Exercise 8 result:', soyIdx);

// Exercise 9 

const allFoods = foods.join('->');

console.log('Exercise 9 result:', allFoods);

