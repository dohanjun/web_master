// exe3.js
// 1. 태어난 년도 입력 -> 나이계산.
// 2. 직사각형의 너비를 계산 -> 가로길이, 세로길이 입력.
// 3. 최고값, 최소값 -> 입력숫자는 3개.


let question = 3;






if (question == 1) {
  //1번 코드.
  const year = 2024;
  let age = prompt('태어난 년도를 입력하세요');
  result = (year - age );
  document.write(result);
}
else if (question == 2) {
  //2번 코드.
 let width = prompt('가로길이를 입력하세요');
 let height = prompt('세로길이를 입력하세요');
 result = (width * height);
 document.write(result);
}
else if (question == 3) {
 //3번 코드.
let test1 = prompt("첫번째 숫자를 입력해 주세요");
let test2 = prompt("두번째 숫자를 입력해 주세요");
let test3 = prompt("세번째 숫자를 입력해 주세요");
let max = 0, min = 0;
if (test1 > test2) {
  if (test2 > test3) {
    max = test1;
    min = test3;
  } else if (test3 > test2) {
    if (test1 > test3) {
      max = test1;
      min = test2;
    } else if (test3 > test1) {
      max = test3;
      min = test2;
    }
  }
} 
else if (test2 > test1) {
  if (test1 > test3) {
    max = test2;
    min = test3;
  } else if (test3 > test1) {
    if (test2 > test3) {
      max = test2;
      min = test1;
    } else if (test3 > test2) {
      max = test3;
      min = test1;
    }
  }
}
}
console.log("최대값은" + max "이고 최소값은" + min +"입니다.")




// let num1 = prompt("첫번째 숫자를 입력해 주세요");
// let num2 = prompt("두번째 숫자를 입력해 주세요");
// let num3 = prompt("세번째 숫자를 입력해 주세요");

// if(num1 == num2 || num2 == num3 || num3 == num1) {
//   console.log('동일한 값이 존재합니다.');
// } else {
//   let max, min = 0;
//   if (num1 > num2) {
//     if (num1 > num3) {
//       max = num1;
//       if (num2 > num3) {
//         min = num3;
//       }
//     } else{
//       max = num3;
//       mun = num2;
//     }
//   } 
//   //end of if (num1 == num2 || num2 == num3 || num3 == num1)
// } 




else {
  if 
}