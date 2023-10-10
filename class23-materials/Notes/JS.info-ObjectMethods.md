# Object methods, "this"

## "this" in methods

- To access the object, a method can use this keyword.
    - The value of this is the object "before dot", the one used to call the method.

    let user = {
        name: "John",
        age: 30,

        sayHi() {
            // "this" is the current object
            alert(this.name)
        }
    }; 

    user.sayHi(); //John

## "this" is not bound

- In JS keyword this behaves unlike most other languages. It can be used in any function, even if its not a method of an object.

- The value of this is evaluated during the run-time, depending on the context.