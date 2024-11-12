// forexe2.js
let sum2 = 0, sum3 = 0;
for (let i = 1; i <= 10; i++ ) {
  if (i % 2 == 0) {
    sum2 = sum2 + i;
  }
  if (i % 3 == 0) {
    sum3 = sum3 + i;
  }
}
console.log('2의 배수의 합은' + sum2 + '이고 3의 배수의 합은' + sum3 + '이다');