/* Challenge 8: Check if Any Two Numbers Add Up to k
Problem Statement:

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

Example:

const arr = [10, 15, 3, 7];
const k = 17;

console.log(result);
Sample Output:

true; */
const arr = [10, 15, 3, 7];
const k = 17;

function addup(arr, k) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === k) return true;
      }
    }
    return false;
  }
  console.log(addup(arr, k));
  
  //
function findaddup(arr, k) {
    const seen = [];
    for (let i = 0; i < arr.length; i++) {
      if (seen.includes(k - arr[i])) {
        return true;
      }
      seen.push(arr[i]);// [] we push all the number wich not than we check if 17-10=7 ,10 exist inside seem 
    }
    return false;
  }
  console.log(findaddup(arr, k));
  const ar = [10, 15, 3, 10];
const k1 = 20;
  console.log(findaddup(ar, k1));
  // arr=[3,1,4,6]
// k=7
// seen=[]
// first iteration is 1=0
// arr[0]=3
// 7-3 =4
// seen =[3]
// seen =[3,1]
// arr[2]=4
// 7-4=3
// because 3 exits inside seen
// so it returns true


/* 
  for (let i of arr) {
    if (
      arr.includes(num - i) &&        
      (num - i !== i || arr.indexOf(i) !== arr.lastIndexOf(i))//(if k=20  , 20-10=10  itself)not the same || ther is another one (another 10 )[10,15,4,10]
    )//this if to check if there is more than 10 in the array ,same meaning (num - i !== i) there is more than 10 in this arr
      return true;
  }

   return false;
 };

console.log(checkSum(array, k)); */


