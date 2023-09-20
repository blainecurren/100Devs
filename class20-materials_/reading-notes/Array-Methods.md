# javascript.info - Array Methods

https://javascript.info/array-methods#splice

## Add / Remove Items

- arr.push(...items) - adds items to the end of an array
- arr.pop() - removes items from the end of an array
- arr.shift() - extracts an item from the beginning of an array
- arr.unshift(...items) - adds item to the beginning of an array

### splice

- splice can remove, insert, and replace elements in an array

#### syntax

arr.splice(start[, deleteCount, elem1, ..., elemN]) || arr.splice(1, 1) <- starts at the first element, and removes 1 element

### slice

- copies items from an array
- can also be called without arguments to create a copy of an array, often used to transform an array without affecting the original

#### syntax

let arr = ['t', 'e', 's', 't'];

alert( arr.slice(1, 3)); <- copies from 1 to 3

alert( arr.slice(-2)) <- copies from -2 till the end

### concat

- creates a new array that includes values from other arrays and additional items

#### syntax

arr.concat(arg1, arg2...) <- accepts any # of arguments, either arrays of values. The result is a new array containing items from arr, then arg1, arg2, etc.

## Iterate: forEach

- the arr.forEach method allows you to run a function for every element of the array

#### syntax

arr.forEach(function(item, index, array) {
// ... do something with item
});

## Searching in an array

### indexOf / lastIndexOf and includes

- arr.indexOf(item, from) - looks for item starting from index from, and returns the index where it was found, otherwise -1
- arr.includes(item, from) - looks for item starting index from, returns true if found
- arr.lastIndexOf works exactly like arr.indexOf but looks from right to left

### find and findIndex / findLastIndex

- finds an object with a specific condition
- arr.findIndex has the same syntax, but returns the index where the element was found instead of the element itself, the value -1 is returned if nothing is found
- arr.findLastIndex method is like findIndex but searches from right to left

#### syntax

let result = arr.find(function(item, index, array) { // <- item is the element, index is its index, array is the array itself
// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
});

### filter

- similar to find but filter returns an array of all matching elements

#### syntax

let results = arr.filter(function(item, index, array) {
// if true item is pushed to results and the iteration continues
// returns empty array if nothing is found
})

Example:

let users = [
{id: 1, name: "John"},
{id: 2, name: "Pete"},
{id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length) // 2

## Transform an array

### map

- arr.map method calls the function for each element of the array and returns the array of results

#### syntax

let result = arr.map(function(item, index, array) {
// returns the new values instead of item
});

### sort(fn)

- arr.sort() sorts the array in place, changing its element order.
- returns the sorted array, but the returned value is usually ignored, as arr itself is modified

#### syntax

let arr = [1, 2, 15];

// the method reorders the content of arr
arr.sort();

alert( arr ); // 1, 15, 2

- by default the items are sorted as strings
- to use your own sorting order, supply a function as the argument of arr.sort()
- the function should compare two arbitrary values and return:

function compareNumeric(a, b) {
if (a > b) return 1;
if (a == b) return 0;
if (a < b) return -1
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

alert(arr); // 1, 2, 15

### reverse

- The method arr.reverse reverses the order of elements in arr

#### syntax

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert(arr); // 5, 4, 3, 2, 1

### split and join

- split example:

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
alert( `A message to ${name}.`); // A message to Bilbo
}

- split method has an optional second numeric argument-a limit on the array length. If it is provided, then the extra elements are ignored.

- join example:

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul

### reduce / reduceRight

- Used to calculate a single value based on the array.

#### syntax

let value = arr.reduce(function(accumulator, item, index, array) {
// ...
}, [initial]);

- Arguments:
  - accumulator - is the result of the previous function call, equals initial the first time (if initial is provided).
  - item – is the current array item.
  - index – is its position.
  - array – is the array.

## Array.isArray

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

## Most methods support "thisArg"

- Almost all array methods that call functions-like find, filter, map, with a notable exception of sort, accept an additional parameter thisArg.
  Example:

let army = {
minAge: 18,
maxAge: 27,
canJoin(user) {
return user.age >= this.minAge && user.age < this.maxAge;
}
};

let users = [
{age: 16},
{age: 20},
{age: 23},
{age: 30}

];

//find users, for who army.canJoin returns true
let soliders = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

# Tasks

## Translate border-left-width to borderLeftWidth

- Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
- That is: removes all dashes, each word after dash becomes uppercased.

### Solution

function camelize(str) {
return str
.split('-')
.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
}

describe("camelize", function() {

it("leaves an empty line as is", function() {
assert.equal(camelize(""), "");
});

it("turns background-color into backgroundColor", function() {
assert.equal(camelize("background-color"), "backgroundColor");
});

it("turns list-style-image into listStyleImage", function() {
assert.equal(camelize("list-style-image"), "listStyleImage");
});

it("turns -webkit-transition into WebkitTransition", function() {
assert.equal(camelize("-webkit-transition"), "WebkitTransition");
});

});

## Filter range "in place"

- Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
- The function should only modify the array. It should not return anything.

### Solution

function filterRangeInPlace(arr, a, b) {
for (let i = 0; i < arr.length; i++) {
let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--
    }

}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1]

describe("filterRangeInPlace", function() {

it("returns the filtered values", function() {

    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 2, 5);

    assert.deepEqual(arr, [5, 3]);

});

it("doesn't return anything", function() {
assert.isUndefined(filterRangeInPlace([1,2,3], 1, 4));
});

});

## Sort in descending order

### Solution

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b -a);

alert(arr);

## Copy and sort array

- We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
- Create a function copySorted(arr) that returns such a copy.

### Solution

function copySorted(arr) {
return arr.slice().sort();
}

let arr = ["HTML", "Javascript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

## Create an extendable calculator

- Create a constructor function Calculator that creates “extendable” calculator objects.
- The task consists of two parts.
- First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

- Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

- For instance, let’s add the multiplication \*, division / and power \*\*:

let powerCalc = new Calculator;
powerCalc.addMethod("_", (a, b) => a _ b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 \*\* 3");
alert( result ); // 8

- No parentheses or complex expressions in this task.
- The numbers and the operator are delimited with exactly one space.
- There may be error handling if you’d like to add it.

## Solution

function Calculator() {
this.methods = {
"-": (a, b) => a - b,

    "+": (a, b) => a + b,

};

this.calculate = function(str) {
let split = str.split(' '),
a = +split[0],
op = split[1],
b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a,b);

};

this.addMethod = function(name, func) {
this.methods[name] = func;
}
}

## Map to names

- You have an array of user objects, each one has a user.name. Write the code that converts it into an array of names.

- For instance:

### Solution

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [ john, pete, mary];

let names = users.map(item => item.name);

alert(names); // John, Pete, Mary

## Map to objects

### Solution

let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", asurname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [ john, pete, mary];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName) // John Smith

- Please note that in the arrow functions we need to use additional brackets.
- We can't write it like this: 

let usersMapped = users.map(user => {
  fullName: `${user.name} ${user.surname}`,
  id: user.id
});

- There are two arrow functions: without body value => expr and with body value => {...}
- Here JS would treat {} as the start of function body, not the start of the object.
- The workaround is to wrap them in the "normal" brackets:

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

## Sort users by age

- Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

- For instance: 

### Solution

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

## Shuffle an array

- Write the function shuffle(array) that shuffles (randomly renders) elements of the array.
- Multiple runs of shuffle may lead to different orders of elements. 

### Solution

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);

shuffle(arr);

shuffle(arr);

- Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.
- There are other good ways to do the task. There's a algorithm called Fisher-Yates shuffle. The idea is to walk the array in revers order and swap each element with a random one before it: 

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}
  

## Get average age
 
- Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
- The formula for the average is (age1 + age2 + ... + ageN) / N.

### Solution

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // 28

## Filter unique array members

- Let arr be an array.
- Create a function unique(arr) that should return an array with unique items of arr.

### Solution

- Lets walk the array items: 
  - For each item we'll check if the resulting array already has that item.
  - If it so, then ignore, otherwise add to results.

  function unique(arr) {
    let result = [];
    
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

- The code works, but there's a potential performance problem in it.
- The method result.includes(str) internally walks the array result and compares each element against str to find the match.
- So if there are 100 elements in result and no one matches str, then it will walk the whole result and do exactly 100 comparisons. And if result is large, like 10000, then there would be 10000 comparisons.

## Create a keyed object from array

- Let's say we received an array of users in the from {id: ..., name: ..., age: ...}.
- Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

### Solution

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}