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

// Exercise 9 Join

const allFoods = foods.join('->');

console.log('Exercise 9 result:', allFoods);

// Exercise 10 Check for an element 

const hasSoup = foods.includes("soup");

console.log('Exercise 10 result:', hasSoup);

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
const odds = []; {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }

    }
}

console.log('Exercise 11 result:', odds);



