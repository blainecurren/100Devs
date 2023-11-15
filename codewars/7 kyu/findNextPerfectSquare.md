## Description 

- You might know some pretty large perfect squares. But what about the NEXT one?

- Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

- If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

## Solution 

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

## Explanation 

- This JavaScript function, `findNextSquare`, takes an argument `sq`, which is expected to be a positive integer representing the area of a square. The function calculates and returns the area of the next perfect square.

- Let's break down the code:


function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}


1. `Math.sqrt(sq)`: This part calculates the square root of the input `sq`.

2. `Math.sqrt(sq) % 1`: The `%` operator computes the remainder of the division. In this case, it checks if the square root has a fractional part. If the result is not exactly an integer (i.e., the square root has a decimal part), `Math.sqrt(sq) % 1` will be non-zero, and the ternary operator `? :` will return `-1`.

3. If the square root has no fractional part (i.e., it's a perfect square), the ternary operator will evaluate the expression after the colon `:`. In this case, it calculates the next integer (square root + 1) and raises it to the power of 2 using `Math.pow()`.

- So, in summary:
    - If `sq` is not a perfect square, the function returns `-1`.
    - If `sq` is a perfect square, it returns the area of the next square.
