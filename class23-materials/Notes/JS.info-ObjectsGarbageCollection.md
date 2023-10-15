# Garbage Collection

## Reachability

- The main concept of memory management in JS is reachability.

- Reachable values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

    1. There's a base set of inherently reachable values, that cannot be deleted for obvious reasons:
    - The currently executing function, its local variables and parameters.
    - Other functions on the current chain of nested calls, their local variables and parameters.
    - Global variables.

    2. Any other value is considered reachable if it's reachable from a root by a reference or by a chain of references.
    - If there's an object in a global variable, and that object has a property referencing another object, that object is considered reachable.
        - And those that it references are also reachable. 
