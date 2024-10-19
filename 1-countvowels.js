"strict";
/* Challenge 1: Count Vowels and Consonants
Problem Statement
Write a JavaScript code that counts how many vowels and consonants a string entered by the user has.

Example:

Input: "Today is Saturday"

Output: "Your text has 6 vowels and 9 consonants" */
// Input: "Today is Saturday"

// Output: "Your text has 6 vowels and 9 consonants"

function countvowels(str) {
  const vowels = "aeiou";
  let countvowels = 0;
  let countconsonanat = 0;

   //if there are capital letters
   str = str.toLowerCase(); //same as vowels str
   for (item of str) {   //loop over the str
     if (vowels.includes(item)) {
       countvowels++;
     } else if (item !== " ") {//it can be also symploe so second way is better
       countconsonanat++;
     }
   }
   return `your text has ${countvowels} vowels and ${countconsonanat} consonants`;
 }
 
 console.log(countvowels("toDay is Saturday"));
 //2nd solution
function count(text) {
    let vowels = 0;
    let consonants = 0;
    text = text.toLowerCase();
    for(let i =0;i<text.length;i++){
        if (/[aeiuo]/.test(text[i])) { //here we use regex to spesify  (RegExp.prototype   page min)
                                            /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test */
            vowels++;   

          } else if (/[a-z]/.test(text[i])) {
            
            consonants++;
            
          }
    }
    return `your text has ${vowels} vowels and ${consonants} consonants`;
}

console.log(count("today Is friday"));

  