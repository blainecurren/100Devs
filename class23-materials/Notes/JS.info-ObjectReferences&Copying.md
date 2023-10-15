# Object References and Copying

- One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

- A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

- When an object variable is copied, the reference is copied, but the object itself is not duplicated.
    - For instance:
        let user = { name: "John" };

        let admin = user; // copy the reference
    
    - Now we have two variables, each storing a reference to the same object.
    - can use either variable to access the object and modify its contents:

        let user = { name: 'John' };

        let admin = user;

        admin.name = 'Pete'; // changed by the "admin" reference

        alert(user.name); // 'Pete', changes are seen from the "user" reference

## Comparison by reference

- Two objects are equal only if they are the same object.
    let a = {};
    let b = a; // copy the reference

    alert( a == b ); // true, both variables reference the same object
    alert( a === b ); // true

    let a = {};
    let b = {}; // two independent objects

    alert( a == b ); // false

- For comparisons like obj1 > obj2 or for a comparison against a primitive, objects are converted to primitives.

- Const objects can be modified

const user = {
    name: "John"
};

user.name = "Pete";

alert(user.name); // Pete

- The value of user is constant, it must always reference the same object, but properties of that object are free to change. 

## Cloning and merging, Object.assign

- Copying an object variable creates one more reference to the same object.

- To duplicate an object, create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on a primitive level.

    let user = {
     name: "John",
     age: 30
    };

    let clone = {}; // new empty object

    for (let key in user) {
     clone[key] = user[key];
    }

    // now clone is a fully independent object with the same content
    clone.name = "Pete"; // CHanged the data in it

    alert(user.name); // still john in the original object

- Can also use the method Object.assign.

    Object.assign(dest, ...sources)

    - The first argument dest is the target object.
    - Further arguments is a list of source objects.
    - It copies the properties of all source objects into the target dest, and then returns it as the result.

    let user = {name: "John"};

    let permissions1 = {canView: true};
    let permissions2 = {canEdit: true};

    // copies all properties from permissions1 and permissions2 into user
    Object.assign(user, permissions1, permissions2);

    // now user = {name: "John", canView: true, canEdit: true}
    alert(user.name) // John
    alert(user.canView) // true
    alert(user.canEdit) // true

- If the copied property name already exists, it gets overwritten:

    let user = {name: "John"};

    Object.assign(user, {name: "Pete"});

    alert(user.name); // now user = {name: "Pete"}

- Can also use the Object.assign to perform a simple object cloning: 

    let user = {
        name: "John",
        age: 30,
    };

    let clone = Object.assign({}, user)

    alert(clone.name); // John
    alert(clone.age); // 30

    - Copied all properties of user into the empty object and returns it.
    
## Nested Cloning

- Objects can have properties that are references to other objects, in this case, cloning the object isn't enough. 
    - The referenced object will be cloned by reference so the original object and the clone will share the same values.

- To fix that make your original object and the clone truly separate objects. 
- Use a cloning loop that examines each value of object[key] and, if it's an object, then replicate its structure as well. 
    - This is called "deep cloning" or "structured cloning".

### structuredClone

- The structuredClone(object) clones the object with all nested properties

  let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
    }
  };

  let clone = structuredClone(user);

  alert( user.sizes === clone.sizes ); // false, different objects

  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related

- The structuredClone method can clone most data types, such as objects, arrays, primitive values.
- It also supports circular references, when an object property references the object itself.
    let user = {};
    // let's create a circular reference:
    // user.me references the user itself
    user.me = user;

    let clone = structuredClone(user);
    alert(clone.me === clone) // true