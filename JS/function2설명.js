// function2.js

// let sum = 0;

// //function이란것이 함수 선언식이다.

// function sum(teahong, yechan) {
//   return teahong + yechan;
// }


// 느낌표(!) 는  not 라는 단어이다


// 함수 표현식(위에 식을 밑에 식으로 표현한것)
// let sum = function (teahong , yechan) {
//   // falsy => 0, '', null, undefined
//   if (!teahong || yechan) {
//       return 0;
//   }
  
//   return teahong + yechan;
// }
// console.log(sum());



// // function안에 이름에 값이 있으면 밑에 if절을 쓸 필요없음.
// let sum = function (teahong = 0, yechan = 0) {
//   // falsy => 0, '', null, undefined
//   // if (!teahong || yechan) {
//   //     return 0;
//   // }
  
//   return teahong + yechan;
// }
// console.log(sum(3, 6));

// // 화살표 함수.

// let getMaxFunc = function (num1 =0, num = 0) {
//   if (num1 >= num2) {
//       return num1;
//   }else{
//     return num2;
//   }
// }




// // 화살표 함수 표현식
// // function을 지우고 뒤에 화살표를 표현함 (function이랑 같은식)
// let getMaxFunc = (num1 =0, num = 0) => {
//   if (num1 >= num2) {
//       return num1;
//   }else{
//     return num2;
//   }
// }


// //if, else를 간단히 표현하는 방식
// //  num1 > num2 ? nim1 : num2; 글로 표현하자면 
// //  (num1이 num2보다 크다면 ?(물음표가 if) num1을 나타내고
// //    :(콜론이 else)아니라면 num2를 표현해라 )
// let getMaxFunc = function (num1 =0, num = 0) {
//  let result = num1 > num2 ? nim1 : num2;
// }



//화살표 함수를 표현하면
//41~ 47열의 식을 밑에 식으로 표현가능

let getMaxFunc = (num1 = 0, num2 = 0) => num1 >= num2 ? num1 : num2;
console.log(getMaxFunc(10, 17));