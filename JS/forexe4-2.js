// forexe4.js
let fname1 = '';
let fname2 = '';     // 이러면 찾기 힘드니까
let fname3 = '';
// 원시자료형 vs. 복합자료형.

let fnames = []; // 배열 변수 선언.
// fnames[0] = '홍길동';
// fnames[1] = '김민식';
// fnames[2] = '장충동';
// fnames[3] = '김민기';
// push(값)

// fnames.push('이종우');
// 배열의 크기를 반환: length

function addFriendFnc() {
  // 사용자 입력값을 확인 => 목록으로 출력.
  let fname = document.querySelector('#inputValue').value;
  console.log('친구이름', fname); // sum= sum + i
  // '<p>홍길동</p>,<p>김민수</p>,<p>최창기</p>'
  // document.querySelector('#show').innerHTML = document.querySelector('#show').innerHTML + `<p>${fname}</p>`;
  // document.querySelector('#show').innerHTML = '<p>홍길동</p>,<p>김민수</p>,<p>최창기</p>'----불편함예시
  fnames.push(`<p>${fname}</p>`);

//출력.
let str = '';
for(let i= 0; i<fnames.length; i++){
   str += fnames[i];
}
document.querySelector('#show').innerHTML = str;
//  console.log(fnames[1]);
}