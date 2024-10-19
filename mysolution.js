/* Challenge 1: Count Vowels and Consonants
Problem Statement
Write a JavaScript code that counts how many vowels and consonants a string entered by the user has.

Example:

Input: "Today is Saturday"

Output: "Your text has 6 vowels and 9 consonants" */
 const str = "Today is Saturday" ;

  const Countvowels =function  (str) {
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    // Loop through each character in the string
   for(let item of str){
    if(vowels.includes(item))
   }


}

// Prompt the user to enter a string
//const userInput = prompt('Enter a string: ');

// Get the counts
const counts = Countvowels(str);

// Display the results
//console.log(`Vowels: ${counts.vowels}, Consonants: ${counts.consonants}`);

/* -------------------------------------------------------- */

/* Challenge 2: Copy Dictionary Values with Doubling
Problem Statement
Write JavaScript code to copy all the contents of dict1 to dict2 by doubling the values.

Sample Data:

const dict1 = { Apple: 15, Orange: 35, Melon: 20, Banana: 50, Pear: 40 };
Expected Output:

dict2 = { Apple: 30, Orange: 70, Melon: 40, Banana: 100, Pear: 80 }; */
const dict1 = { Apple: 15, Orange: 35, Melon: 20, Banana: 50, Pear: 40 };
const dict2 = {};

// Loop through each key-value pair in dict1
for (let key in dict1) {
    if (dict1.hasOwnProperty(key)) {//check just the proberties inside dir1
        // Double the value and assign it to dict2
        dict2[key] = dict1[key] * 2; //give dir2 the same key with double value
    }
}

// Display the results
console.log(dict2);
/* This code iterates over each key-value pair in dict1, doubles the value, and assigns it to the corresponding key in dict2. The hasOwnProperty method ensures that only the properties directly belonging to dict1 are processed. */
/* -------------------------------------------- */


/* Challenge 3: Repeat and Separate
Problem Statement:

Ask the user to enter a word, a separator, and the number of repetitions. Write JavaScript code to display the word with repetitions, each word separated by the separator character.

Example:

Input:

Word: "Tina"
Separator: "!"
Repetitions: 3
Output: "Tina!Tina!Tina"

 */
// Prompt the user to enter a word, a separator, and the number of repetitions
//const word = prompt('Enter a word:');
//const separator = prompt('Enter a separator:');
//const repetitions = parseInt(prompt('Enter the number of repetitions:'), 10);

// Create the repeated word string
let result = '';
for (let i = 0; i < repetitions; i++) {
   /*  result += word;
    if (i < repetitions - 1) {
        result += separator;
    } */
    //another way :
    result += word + separator;  //important to add this + befor = to collect new value with the old one
}
 const finalresult = result.slice(-1);

// Display the result
//console.log(result);

/* ----------------------------------------- */
/* Challenge 4: Sort Cars by Year
Problem Statement:

Write JavaScript code to sort a list of used car dictionaries by year in descending order using a arrow function.
*/


const cars = [
  { make: "Ford", model: "F150 XLT", year: 2018, color: "Gray" },
  { make: "Porsche", model: "Cayman GT4", year: 2016, color: "Gold" },
  { make: "Audi", model: "S7 Prestige", year: 2017, color: "Blue" },
  { make: "Mercedes", model: "S550", year: 2019, color: "Black" },
]; 
// Sort the cars by year in descending order
cars.sort((a, b) => b.year - a.year);

// Display the sorted array
console.log(cars);
/* This code uses the sort method with an arrow function to compare the year properties of the car objects. The comparison function b.year - a.year ensures that the cars are sorted in descending order by year. */
/* ---------------------------- */



/* Challenge 5: Autocomplete System
Problem Statement:

Implement an autocomplete system in JavaScript. Given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

Example:

Input:

Query: 'de'
Set of Strings: ['dog', 'deer', 'deal']
Output: ['deer', 'deal'] */



function autocomplete(query, strings) {
    return strings.filter(str => str.startsWith(query));
}

// Sample data
const query = 'de';
const strings = ['dog', 'deer', 'deal'];

// Get the autocomplete results
const results = autocomplete(query, strings);

// Display the results
console.log(results); // Output: ['deer', 'deal']
/* ----------------------- */
/* Challenge 6: Remove the First Occurrence of a Given Search String
Problem Statement:

Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
function removeFirstOccurrence(inputString, searchString) {
  // Your code here
}

const inputString =
  "Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.";
const searchString = "the";
const result = removeFirstOccurrence(inputString, searchString);
console.log(result); 
"Full stack developers handle both frontend and backend of an app or a website. It even needs to have knowledge about the database.";*/


/*Challenge 7: Find the Most Frequent Item in an Array
Problem Statement:

Write a program to find the most frequent item of an array.

Example:

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// Your code here
console.log(result);
Sample Output:

"a ( 5 times )"; */

/*  Challenge 8: Check if Any Two Numbers Add Up to k
Problem Statement:

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

Example:

const arr = [10, 15, 3, 7];
const k = 17;
// Your code here
console.log(result);
Sample Output:

true;*/
const arr = [10, 14, 3, 7];
const k = 17;




/* -------------------------------------- */
/* Challenge 9: Filter Strings with More Than 5 Characters
Problem Statement:

Write a code to filter strings that have more than 5 characters in the list below.

Example:

const words = ["car", "elephant", "desert", "pumpkin", "eat", "fish", "dish"];
// Your code here
console.log(result);
Sample Output:

cssCopy code
["elephant", "pumpkin"] */
/* ----------------------------------------------------------------- */
/* Challenge 10: Display Repetition Number of Each Character in a String
Problem Statement:

Write a code to display the repetition number of each character in a string.

Example:
const inputString = "www.clarusway.com";
// Your code here
console.log(result);
{'w': 4, '.': 2, 'c': 2, 'l': 1, 'a': 2, 'r': 1, 'u': 1, 's': 1, 'y': 1, 'o': 1, 'm': 1}*/
/* --------------------------------------------------------------------- */
/* Challenge 11: Find Product of All Elements Except the One at Index i
Problem Statement:

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

Example:
const inputArray = [1, 2, 3, 4, 5];
// Your code here
console.log(result); 
Sample Output:
[120, 60, 40, 30, 24];*/

/* ---------------------------------------------- */

/* Challenge 12: Find the First Missing Positive Integer
Problem Statement:

Given an array of integers, find the first missing positive integer in linear time and constant space. Find the lowest positive integer that does not exist in the array.

Example:

const inputArray = [3, 4, -1, 1];
// Your code here
console.log(result);
Sample Output:

2; */
