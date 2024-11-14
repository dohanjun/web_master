//function1.js

let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

console.log(`sumAry(numAry1)의 합계 =>${sumAry(numAry1)})`);
console.log(`sumAry(numAry2)의 합계 =>${sumAry(numAry2)})`);
console.log(sum(sumAry([10, 20, 30]), sumAry([10, 20])));
//매개값을 배열로 받아서 배열요소의 합.
function sumAry(param1) {
  let sum = 0;
  for (let i = 0; i < param1.length; i++) {
    sum += param1[i];
  }
  return sum;
}

function sum(param1, param2) {
  let result = param1 + param2;
  return result;
}




function makeNumberFnc() {
  let randomAry = []
  for (let i = 1; i <= 5; i++) {
    let temp = parseInt(Math.random() * 10) + 11;
    randomAry.push(temp);
  }
  console.log(randomAry);
  let sum = sumAry(randomAry);
  return sum;
}
console.log(`임의의 배열의 합은 ${makeNumberFnc()}입니다.`)
