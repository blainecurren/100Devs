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