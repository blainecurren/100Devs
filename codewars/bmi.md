## Description 8 kyu

- Write function bmi that calculates body mass index (bmi = weight / height2).

- if bmi <= 18.5 return "Underweight"

- if bmi <= 25.0 return "Normal"

- if bmi <= 30.0 return "Overweight"

- if bmi > 30 return "Obese"

## Solution

function bmi(weight, height) {
var result = weight/Math.pow(height,2)

if (result <= 18.5) {
  return "Underweight";
  } else if (result <= 25) {
  return "Normal";
  } else if (result <= 30) {
  return "Overweight";
  } else {
  return "Obese";
  }

}

## Description 7 kyu

- You have to define a function to calculate the division of two factorial numbers. This can be useful for large numbers.

- In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 5 _ 4 _ 3 _ 2 _ 1 = 120.

- Some hints: We can see that (n + 1)! = (n + 1) \* n!. So (n + 1)! / n! = (n + 1)

- We know that 0! = 1 (because n! = (n + 1)! / (n + 1) therefore 0! = 1! / 1 = 1)

- And your solution should be able to calculate n! / d!.

## Solution

function factorialDivision(n,d) {
  let result = 1n;
  for (let i = d + 1n; i <= n; i++) {
    result \*= i;
  }
  return result
}
