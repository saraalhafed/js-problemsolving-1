let word = "Tina";
let Separator = "!";
let rep = 3;

let result = "";
for (let i = 1; i <= rep; i++) {
  if (i === rep) {//for last add just the word without !
    result += word;
  } else result += word + Separator;
}
console.log(result);

//2nd solution
const arr = [];
for (let i = 1; i <= rep; i++) {
  arr.push(word);//[Tina,Tina,Tina]
}

let result2 = arr.join(Separator);// convert the [] to string
console.log(result2);//Tina!Tina!Tina