// aryDate1.js
 document.querySelector('#inputValue').remove(); // 요소(element) 삭제
 document.querySelector('#addBtn').remove();  // 요소(element) 삭제
 document.querySelector('span').remove(); // 요소(element) 삭제

 let numAry = [23, 98, 45, 34, 78, 51];
 let sum = 0;
 for (let i=0; i< numAry.length; i++) {
  console.log(`${i} 위치=> ${numAry[i]}`);
  // if(numAry[i] > 50){
  if (numAry[i] % 2 == 0){
    sum += numAry[i];
  };
 }

 console.log(`numAry의 각 요소의 합 => ${sum}`);