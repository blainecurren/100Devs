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

- If obj.f() is called, then this is obj during the call of f. 

### Calling without an object: this == undefined

- In non-strict mode the value of this will be a global object. 
    - If there's this inside a function, it expects to be called in an object context.

## Arrow functions have no "this"

- Arrow functions don't have their own "this". 
    - If you reference "this" from such a function, its taken from the outer 'normal' function.

- Here the arrow() uses this from the outer user.sayHi() method

    let user = {
      firstName: "Ilya",
      sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
      }
    };
    
    user.sayHi(); // Ilya

   