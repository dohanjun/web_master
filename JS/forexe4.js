// forexe4.js
let fname1 = '';
let fname2 = '';     // 이러면 찾기 힘드니까
let fname3 = '';
// 원시자료형 vs. 복합자료형.

let fnames = []; // 배열 변수 선언.
  // fnames.push('이종우');
// 배열의 크기를 반환: length

function addFriendFnc() {
  // 사용자 입력값을 확인 => 목록으로 출력.
  let fname = document.querySelector('#inputValue').value;
  console.log('친구이름', fname); // sum= sum + i
  fnames.push(`<p>${fname}</p>`);

//출력.
let str = '';
for(let i= 0; i<fnames.length; i++){
   str += fnames[i];
}
document.querySelector('#show').innerHTML = str;
//  console.log(fnames[1]);
}