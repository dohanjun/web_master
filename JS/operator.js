// //operator.js 계산기


// //id값이 있을때
// let addFnc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.getElementById('num2').value;
//   let result = parseInt(v1) + parseInt(v2);
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('#add').addEventListener('click', addFnc);


// //id값이 없을때

// let subFnc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.getElementById('num2').value;
//   let result = parseInt(v1) - parseInt(v2);
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('button:nth-of-type(2)').addEventListener('click', subFnc);



// let mulFnc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.getElementById('num2').value;
//   let result = parseInt(v1) * parseInt(v2);
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('button:nth-of-type(3)').addEventListener('click', mulFnc);


// let divFnc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.getElementById('num2').value;
//   let result = parseInt(v1) / parseInt(v2);
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('#divid').addEventListener('click', divFnc);




//예시-----------------------------------------------------
let jongwoo = (e) => {
  console.log(e.target.innerHTML);
  let v1 = document.getElementById('num1').value;
  let v2 = document.querySelector('#num2').value;
  if (!v1 || !v2) {
    alert('값을 입력하세요');
    return;
  }
  let result;// 변수 선언
  if (e.target.innerHTML == '더하기') {
     result = parseInt(v1) + parseInt(v2);
  }
  else if (e.target.innerHTML == '빼기') {
     result = parseInt(v1) - parseInt(v2);
  }
  else if (e.target.innerHTML == '곱하기') {
     result = parseInt(v1) * parseInt(v2);
  }
  else if (e.target.innerHTML == '나누기') {
     result = parseInt(v1) / parseInt(v2);
  }
  document.querySelector('#result').value = result;
}
document.querySelector('#add').addEventListener('click', jongwoo);

document.querySelector('#add').addEventListener('click', jongwoo);// 이벤트 핸들러함수()
document.querySelector('#sub').addEventListener('click', jongwoo);// 이벤트 핸들러함수()
document.querySelector('#multy').addEventListener('click', jongwoo);// 이벤트 핸들러함수()
document.querySelector('#divid').addEventListener('click', jongwoo);// 이벤트 핸들러함수()
