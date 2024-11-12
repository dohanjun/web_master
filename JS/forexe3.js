// forexe3.js
// 점수를 입력 * 5번.
// 점수의 합(sum), 평균(average) 저장.
// 큰값(max) 저장.


// 합계는 ?? 이고 평균은?? 이고 최고점수는 ??

//"합계는" + sum + "이고 평균은" + average + "이고 최고점수는" + max + "입니다."


let max =0;
let average = 0;
let sum = 0;
let min = 100;
for (let i=1; i <= 5; i++) {
  let score = prompt('점수를 입력');
  sum = sum + parseInt(score);
 if(max < score) {
  max = score;
 }
 if(min > score){
  min = score;
 }   
}
average = sum / 5;
document.write(`합계는${sum}이고 평균은${average}이고 최고점수는${max}이고 최저점수는${min}입니다.`);