// 문제 1 : 변수num1과 str1을 선언한 후
// num1에는 100의 값을 str1에는 문자값을 100을
//  저장한 후 두 변수의 값을 +연산자를 통하여 연산하고 그
// 결과값을 콘솔에 출력하도록 코드를 작성하세요

// let num1 = 100;
// let str1 = '100';
// result = num1 + parseInt(str1)
// console.log(result)

//문제 2 : 변수 num에 17을 대입한 후 
//num값을 3으로 나눈 값을 num1에 
//num값을 3으로 나눈 나머지를 num2에 
//저장하는 코드를 작성하세요.

// let num = 17;
// let num1 = (num/3)
// let num2 = num%3
// console.log(num1)

//문제 3 : 1부터 100까지의 숫자의 
//합을 구하는 코드를 작성하세요.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i
// };
// console.log(sum);

//문제 4 51에서 100사이의 임의의 수를 
//생성하는 작업을 5번 실행하도록 코드를 작성하세요

// let numAry = [];

// for(let i = 0; i < 5; i++) {
//   let temp = parseInt(Math.random() * 50) + 51 
//   numAry.push(temp);
// };
// console.log(numAry);

//문제 5 : 문제4에서 작성한 코드를 참고하여 
//5개의 값을 배열에 저장한 후 가장 
//큰 값과 가장 작은 값을 구하는 코드를 작성하세요.

// let max = 0;
// let min = numAry[0];
// for(let i = 0; i < numAry.length; i++) {
//   if(max < numAry[i]) {
//     max = numAry[i]
//   }
//   if(numAry > min) {
//     min = numAry[i]
//   }
//   };

//   console.log(max, min);

 // 문제 6 : 
 // 배열friends = ['홍김동','김민수','박창석','고민형','김형식']을 
 // 선언한 후 '김'씨 성을 가진 친구만 kimsAry에 
 // 저장하도록 코드를 작성하세요

//  let friends = ['홍김동','김민수','박창석','고민형','김형식']

//  let efriends = friends.filter(function (elem){
//   console.log(elem)
//   if(elem[0] == '김' ) {
//     return true
//   }
//   return false
//  });
//  console.log(efriends)