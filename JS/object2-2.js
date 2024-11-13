// object2.js

//함수: function.
//함수 호출 

// FriendListFnc();

// function FriendListFnc() {
//   console.log('FriendListFnc()');
// }

let f1 = {name:'홍길동', age: 20};
let f2 = {name:'김민식', age: 21};
let f3 = {name:'최홍식', age: 22};
let f4 = {name:'홍민식', age: 23};

let myFriends = [f1, f2, f3, f4];
FriendListFnc();


// 함수정의 => 실행은 호출을 통해서 한다.
function FriendListFnc() {
  console.log('FriendListFnc()'); //tr>td:홍길동....
  let newName = document.querySelector('#name').value;
  let newAge = document.querySelector('#age').value;
  // console.log( newName == '' , newAge == '')
  if (newName && newAge ){
    myFriends.push({name: newName, age:newAge});  
  }

  let html = '<table border="2">';
  // myFriends.push({name: newName, age:newAge});
  // 코드작성.
 html += '<thead><tr><th>이름</th><th>나이</th></tr></thead>';
 html += '<tbody>';
 for (let i = 0; i <myFriends.length; i++) {
  html += '<tr><td>' + myFriends[i]['name'] + '</td><td>' + myFriends[i]['age'] + '</td></tr>';

 }
  html += '</tbody></table>';

  document.querySelector('#show').innerHTML = html;
}