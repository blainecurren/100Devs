//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["fight", 'win', 'worldwide']

for (let i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText = movies[i]
}
//Create an array of numbers. Loop through the array add three to each number and replace the old number.
let nums = [10, 20, 30]

nums[0] = nums[0] + 3; // updates and reassigns  index 0 with 13

//Find the average of all the numbers from question three
