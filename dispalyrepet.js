const inputString = "www.clarusway.com";
function findrep(str) {
  const obj = {};
//we use this rtegix from :https://stackoverflow.com/questions/8359566/regex-to-match-symbols
   const reg = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/; //all the symbole
  for (let item of str) {
    if (!reg.test(item)) {// i dont need this symboles,just charchter,if the character is exsiste  increase the counter of it
      if (obj[item]) {
        obj[item] = obj[item] + 1;
      } else {
        obj[item] = 1;
      }
    }
  }
  return obj;
}
console.log(findrep(inputString));//{ w: 4, c: 2, l: 1, a: 2, r: 1, u: 1, s: 1, y: 1, o: 1, m: 1 }
