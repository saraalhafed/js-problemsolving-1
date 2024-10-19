/* Challenge 7: Find the Most Frequent Item in an Array
Problem Statement:

Write a program to find the most frequent item of an array.

Example:

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// Your code here
console.log(result);
Sample Output:

"a ( 5 times )"; */
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function maxCount(arr) {
  let maxCount = 0;
  let maxItem = arr1[0];//we need {a:2,d:4}
  const obj = {};
  for (item of arr) {
    //if the item already inside obj , increase the count of its value
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
    if (obj[item] > maxCount) {
      maxCount = obj[item]; //5
      maxItem = item; //a
    }
  }
  //   console.log(maxItem, maxCount);
  //  return `${maxItem}:${maxCount}`;
  return { maxItem, maxCount };

}
// {3:4,a:5,2:2,4:1,9:1}
console.log(maxCount(arr1));


/* another solutioon with reduce */
//reduce using for everything
//way1 big reduce
const findMostFrequentItem = (arr) => {
    const result = arr.reduce((acc, item) => {
      // Count occurrences
      acc.count[item] = (acc.count[item] || 0) + 1;
      
      // Update most frequent if necessary
      if (acc.count[item] > acc.maxCount) {
        acc.maxCount = acc.count[item];
        acc.mostFrequent = item;
      }
      
      return acc;
    }, { count: {}, maxCount: 0, mostFrequent: null });
  
    return `${result.mostFrequent} ( ${result.maxCount} times )`;
  };
  
  // Test the function
  const arr11 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  console.log(findMostFrequentItem(arr11));


  //way2  2 small reduce
  const findMostFrequentItem1 = (arr) => {
    // Use reduce to count occurrences of each item
    const countMap = arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  
    // Use reduce to find the item with the highest count
    const [mostFrequentItem, count] = Object.entries(countMap).reduce(
      ([maxItem, maxCount], [item, count]) => {
        return count > maxCount ? [item, count] : [maxItem, maxCount];
      },
      [null, 0]
    );
  
    return `${mostFrequentItem} ( ${count} times )`;
  };
  
  // Test the function
  const arr111 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  const result = findMostFrequentItem1(arr111);
  console.log(result);
/* --------------------------------------------------------------- */
// ! 3. Write a JavaScript program to find the most frequent item of an array.

// ? Example: input = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] => output = "a is repeated most"

// const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 9, 9, 9, 9, 9];

// const checkMostFrequent = arr => {
//   let mostFrequent;
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) counter++;
//     }
//     if (counter > highest) {
//       highest = counter;
//       mostFrequent = arr[i];
//     }
//   }
//   return `Most frequents element in our array is "${mostFrequent}" with ${highest} times`;
// };

// console.log(checkMostFrequent(array));