/* Challenge 12: Find the First Missing Positive Integer
Problem Statement:

Given an array of integers, find the first missing positive integer in linear time and constant space. Find the lowest positive integer that does not exist in the array.

Example:

const inputArray = [3, 4, -1, 1];

console.log(result); 
Sample Output:

2; */

const input = [1, -1, 3, 4];
//           i  1   2  3  4
const input2 = [1, 2, 3, 4];
length: 4;
function positive(arr) {
  for (let i = 1; i < arr.length; i++) {//we start always from 1 because 0 not positive iterger num
    if (!arr.includes(i)) { //i will be 1 2 3 4.... we compare the  interger positiv number one by one with the  items of input array
      return i;
    }
  }
  return arr.length + 1;//maybe we have input2 = [1, 2, 3, 4];than we return
}
const input3 = [0, 2, 3, 4]
console.log(positive(input));//2
console.log(positive(input2));//5
console.log(positive(input3))//1