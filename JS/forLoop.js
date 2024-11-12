// forLoop.js
// 1~5까지 합 => sum 변수 누적.
let sum = 0;
sum = sum + 1;
sum = sum + 2;
sum = sum + 3;
sum = sum + 4;
sum = sum + 5;

// let i = 0;
// // i = i + 1;

sum = 10 % 2;

// console.log('1 ~ 5 까지의 합: ' + sum);
sum = 0; //초기화.
// let i = 1;
for (let i = 1; i <= 10; i++) {
  sum = sum + i; // i값 : 1,
  console.log('sum=> ' + sum + ', i=>' + i );
  if (i == 7){
    break;
  }
}
console.log('1 ~ 5 까지의 합: ' + sum);



for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1){
    console.log('sum=> ' + sum + ', i=>' + i );
    sum = sum + i;
  }
}
console.log('1 ~ 5 까지의 합: ' + sum);