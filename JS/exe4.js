// exe4.js
// 2024년 11월 12일 숙제.
// 우리반에는 5명의 친구. 성적을 입력
// 합산 => 평균, 최고점수, 최저점수 구해서
// 우리반 평균은 ??이고, 최고점은 ??이고, 최저점은 ??이다.

document.querySelector('#inputValue').remove(); // 요소(element) 삭제
document.querySelector('#addBtn').remove();  // 요소(element) 삭제
document.querySelector('span').remove(); // 요소(element) 삭제

console.log('exer.js')

let numAry = [];
let max = 0;
let min = 100;
let average = 0;
let sum = 0;

for (let i=1; i <= 5; i++) {
  let numAry = prompt('반친구의 점수를 입력')
  sum = sum + parseInt(numAry);
  if(max < numAry) {
    max = numAry;
  }
  if(min > numAry) {
    min = numAry;
  }
}
average = sum / numAry.length;
document.write(`우리반 평균은${average}이고, 최고점은 ${max}이며 최저점은${min}이다.`)