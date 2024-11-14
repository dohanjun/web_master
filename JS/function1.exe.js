// 배열을 매개값으로 받아서 요소중에서 제일 큰 값을 구하는 함수를 만들어라.
// 함수 이름은 getmaxvalue(배열)

let sungmin = [50, 60, 40, 70, 20];
console.log(getMaxvalue(sungmin));

console.log(`제일 큰 값은 ${getMaxvalue(sungmin)}입니다.`);
function getMaxvalue(jongwoo) {
  let max = 0;
  for (let i = 0; i < jongwoo.length; i++) {
    if (max < jongwoo[i]) {
      max = jongwoo[i];
    }
  }
  return max;
}


// console.log(parseInt(Math.random() * 10 + 1));

//

// function makeNumberFnc() {
//   let randomAry = []
//   for (let i = 1; i <= 5; i++) {
//     let temp = parseInt(Math.random() * 10) + 11;
//     randomAry.push(temp);
//   }
//   console.log(randomAry);
//   let sum = sumAry(randomAry);
//   return sum;
// }
// console.log(`임의의 배열의 합은 ${makeNumberFnc()}입니다.`)