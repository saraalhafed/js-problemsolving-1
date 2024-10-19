const dict1 = { Apple: 15, Orange: 35, Melon: 20, Banana: 50, Pear: 40 };
// output
//dict2 = { Apple: 30, Orange: 70, Melon: 40, Banana: 100, Pear: 80 };
//first solutin using for in loop
const dict2 = {}; //important to defind it
for (key in dict1) {//how i loop on the obj (another ways obj.keys,obj.enteries, obj.values)
  dict2[key] = dict1[key] * 2;
}
console.log(dict2);

//second one object.keyss

const keys = Object.keys(dict1);//array
console.log(keys);
 keys.forEach((item) => (dict2[item] = dict1[item] * 2));//i make double and store it in new array dic2
 console.log(dict2);

//third solution using reduce 

const dict3 = Object.keys(dict1).reduce((acc, item) => {
  acc[item] = dict1[item] * 2;//in the empty obj( acc[item] )  we store this : dict1[item] * 2
  return acc;
}, {});
console.log("this is dict3", dict3);