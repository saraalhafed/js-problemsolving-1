/* Challenge 11: Find Product of All Elements Except the One at Index i
Problem Statement:

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

Example:

const inputArray = [1, 2, 3, 4, 5];
// Your code here
console.log(result);
Sample Output:

[120, 60, 40, 30, 24]; */

const input = [1, 2, 3, 4, 5];
function findproduct(arr) {
  let product = 1;
  for (let item of arr) {
    product *= item; //120
  }//here we multiply allof them to git product :400,finish each product for each item than we push the m tzo array after divided
  //than 120/1 than 120/2
  const output = arr.map((item) => product / item);// [120/1,120/2,120/3]==>[120,60,40] we need this devide to excpt this item itself  /* for 1:(1*2*3*4*5/1)=2*3*4*5 =120,  we muliplay all of them excpt 1 (120)..except 2..(60) for 2:(1*2*3*4*5/2)=1*3*4*5=60/
  return output;                                                                                     
}
console.log(findproduct(input));
/* 1-multiplay allof the item in the arrya than
2- divide each item  on the product excpt 1 
120=2 x3 x4x5  except 1 
 60= 1 x 3 x 4 x5  except 2   */

 function findprod(arr) {
    const output = [];
  
    for (let i = 0; i < arr.length; i++) {
      let product = 1;
      for (let j = 0; j < arr.length; j++) {
        j = 1;
        if (i !== j) {//lik the question( Except the One at Index i) i dont need it  (i=0 just multiplay the 12345 without 0)
                                                                   /*  */
          product *= arr[j];//2*1 than 3*1  than 4*1 than 5*1,for the first item wich 1 is (2*3*4*5) here we dont need divied by the item itself we excpt the item with if 
        }
      }
      output.push(product);//for each item i push own product
    }
    return output;
  }
  console.log(findprod(input));
  

/* product for item is multiplay allthe other items excpt it :for 1:(1*2*3*4*5/1)=2*3*4*5
                                                                   for 2:(1*2*3*4*5/2)=1*3*4*5*/








/* --------------------------------------------------------- */
  const inputArray = [1, 2, 3, 4, 5]; // 120

let output = [120, 60, 40, 30, 24];

//step-1
let productofthem = inputArray.reduce((acc, item) => (acc *= item), 1); //120
console.log(productofthem);
let resultofproduct = inputArray.map((item) => productofthem / item); //120/1  120/2 120/3
console.log(resultofproduct);

//0r
const resultpro = inputArray.map((item, index) => { //give me an array []
  const left = inputArray.slice(0, index);
  let leftproduct = 1;
  for (let item of left) {
    leftproduct *= item;
  }
  const right = inputArray.slice(index + 1);
  let rightProduct = 1;
  for (let item of right) {
    rightProduct *= item;
  }
  return leftproduct * rightProduct;
});
console.log(resultpro);