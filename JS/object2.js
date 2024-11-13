// object2.js

//함수: function.
//함수 호출 

FriendListFnc();

function FriendListFnc() {
  console.log('FriendListFnc()');
}

let f1 = '홍길동';
let f2 = '김민식';
let f3 = '최홍식';
let f4 = '홍민식';

let myFriends = [f1, f2, f3, f4]


function FriendListFnc() {
  console.log('FriendListFnc()'); //tr>td:홍길동....
  let html = '<table border="2">';
  // 코드작성.
  document.write
  (<table>
    <thead>
      <tr>
        <th>
          이름
        </th>
      </tr>
    </thead>
    <tbody>
      <tr><td>홍길동</td></tr>
      <tr><td>김민식</td></tr>
      <tr><td>최홍식</td></tr>
      <tr><td>홍민식</td></tr>
    </tbody>
  </table>)

  document.querySelector('#show').innerHTML = html;
}