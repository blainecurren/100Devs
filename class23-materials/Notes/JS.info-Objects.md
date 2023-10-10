## JS.Info

## Objects

- There are 8 data types in JS. 7 of them are called "primitive", because their values contain only a single thing.

- An object can be created with figure brackets {} with an optional list of properties.

  - A property is a "key: value" pair, where key is a string (also called a "property name"), and value can be anything.

- An empty object can be created using 1 of 2 syntaxes:
  1. let user = new Object(); // "object constructor" syntax
  2. let user = {}; // "object literal" syntax

### Literals and Properties

- You can immediately put some properties into {...} as "key: value" pairs:

  let user = {
  name: "John",
  age: 30
  };

- In the user object, there are two properties:

  1. The first property has the name "name" and the value "John".
  2. The second has the name "age" and the value 30.

- Property values are accessible using the dot notation:
  alert(user.name); // John
  alert(user.age); // 30

- To remove a property, you can use the delete operator:
  delete user.age;

- You can also use multi word property names, but they must be quoted:
  let user = {
  name = "John",
  age: 30,
  "likes birds": true
  };

- The last property in the list may end with a comma:
  let user = {
  name: "John",
  age: 30,
  }

  - That is called a trailing or hanging comma. Makes it easier to add / remove / move around properties, because all lines become alike.

## Square Brackets

- For multi-word properties, the dot access doesn't work:
  user.likes birds = true

- There's an alternative "square bracket notation" that works with any string:
  let user = {};

  // set
  user["likes birds"] = true

  // get
  alert(user["likes birds"]);

  // delete
  delete user["likes birds"];

- Square brackets also provide a way to obtain the property name as the result of any expression - as opposed to a literal string:
  let key = "likes birds";

  // same as user["likes birds"] = true;
  user[key] = true;

### Computed Properties

- You can use square brackets in an object literal, when creating an object. Called computed properties:
  let fruit = prompt("Which fruit to buy?", "apple");

  let bag = {
  [fruit]: 5, // the name of the property is taken from the var fruit
  };

  alert(bag.apple); // 5 if fruit="apple"

- The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

  - So if "apple" is entered, bag will become {apple: 5}
  - Essentially the same as:

  let fruit = prompt("Which fruit to buy?", "apple");
  let bag = {};

  // take property name from the fruit var
  bag[fruit] = 5;

- More complex expression inside square brackets:

  let fruit = 'apple';
  let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
  };

- Square brackets are much more powerful than dot notation. They allow any property names and variables.

## Property Value Shorthand

- Existing variables are often used as values for property names:

  function makeUser(name, age) {
  return {
  name: name,
  age: age,
  };
  }

  let user = makeUser("John", 30);
  alert(user.name); // John

- In the example above, properties have the same name as variables, there's a special property value shorthand:

  - Instead of name:name you can write name:

  function makeUser(name, age) {
  return {
  name,
  age,
  }
  }

- You can use both normal properties and shorthands in the same object:

  let user = {
  name,
  age: 30
  };

## Property name limitations

- A variable name cannot have a name equal to one of the language-reserved words like "for", "let", "return", etc., but for an object property, there is no restriction.

  let obj = {
  for: 1,
  let: 2,
  return: 3,
  };

  alert(obj.for + obj.let + obj.return); // 6

- There are no limitations on property names, they can be strings or symbols, other types are automatically converted to strings: For instance, a number 0 becomes string "0" when used as a property key.

## Property existence test, "in" operator

- A notable feature of objects in JavaScript, compared to many other languages, is that it's possible to access any property.

- Reading a non existing property just returns undefined.

- There's a special operator "in":

  - syntax is: "key" in object

  let user = { name: "John", age: 30};

  alert("age" in user); // true, user.age exists
  alert("blabla" in user); // false, user.blabla doesn't exist

  - On the left side of "in" there must be a property name, that's usually a quoted string.

- If you omit the quotes, that means a variable should contain the actual name to be tested:
  let user = { age: 30 };

  let key = "age";
  alert(key in user); // true, property "age" exists.

## The "for...in" loop

- To walk over all keys of an object:
  let user = {
  name: "John",
  age: 30,
  isAdmin: true
  };

  for (key in uses) {
  // keys
  alert(key); name, age, isAdmin
  // values for the keys
  alert(user[key]); // John, 30, true
  }

- All 'for' constructs allow you to declare the looping variable inside the loop.

### Ordered like an object

- Objects are ordered in a special fashion when being looped over: integer properties are sorted, others appear in creation order.

## Tasks

### Hello, object

- Write the code, one line for each action:
  1. Create an empty object user.
  2. Add the property name with the value John.
  3. Add the property surname with the value Smith.
  4. Change the value of the name to Pete.
  5. Remove the property name from the object.

#### Solution:

    let user = {}
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;

### Sum object properties

- We have an object storing salaries of our team:

let salaries = {
John: 100,
Ann: 160,
Pete: 130
}

- Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
- If salaries is empty, then the result must be 0.

#### Solution

let salaries = {
John: 100,
Ann: 160,
Pete: 130
}

let sum = 0;
for (let key in salaries) {
sum += salaries[key];
}

alert(sum);

### Multiply numeric property values by 2

- Create a function multiplyNumeric(obj) that multiples all numeric property values of obj by 2.
- For instance: 

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeOf obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

- multiplyNumeric does not have to return anything, it should modify the object in place.
- use typeOf to check for a number here