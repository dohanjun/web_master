// exe3.js
// 1. 태어난 년도 입력 -> 나이계산.
// 2. 직사각형의 너비를 계산 -> 가로길이, 세로길이 입력.
// 3. 최고값, 최소값 -> 입력숫자는 3개.


let question = 2;






if (question == 1) {
  //1번 코드.
  const year = 2024
  let age = prompt('태어난 년도를 입력하세요');
  result = (year - age );
  document.write(result)
}
else if (question == 2) {
  //2번 코드.
 let width = prompt('가로길이를 입력하세요');
 let height = prompt('세로길이를 입력하세요');
 result = (width * height)
 document.write(result)
}
else if (question == 3) {
 //3번 코드.
}