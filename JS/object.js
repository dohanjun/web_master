// object.js
// 객체.
// ary(배열) = [];
// obj(객체) ={}; <=====abp로 적어놓은것


document.querySelector('#inputValue').remove(); // 요소(element) 삭제
document.querySelector('#addBtn').remove();  // 요소(element) 삭제
document.querySelector('span').remove(); // 요소(element) 삭제

//object타입에서 속성을 반환하는 반복문이 가능.
// for...in 반복문 (23번줄예시) <==== 무조건 기억해놔야됨

let ary = [];
let abp = {
   name: '홍길동',
   age: 20,
   height: 169.4
};
abp.age = 21;
console.log(`이름: ${abp.name}, 나이는${abp['age']}이다.`);

for (let prop in abp) {
   console.log(`prop => ${prop}, 값 => ${abp[prop]}`);
}

//홍길동, 김민식, 최홍식.
ary.push(abp); //홍길동의 정보를 배열추가.
ary.push({name: '김민식', age: 25, height: 190}); // 김민식의 정보를 배열추가.
ary.push({name: '최홍식', age: 21, height: 110}); // 최홍식의 정보를 배열추가.

let searchName = '홍길동';
let searchAge = 25;
let sum = 0;
// for(let i = 0; i < ary.length; i++) {
//   if(ary[i]['name'] == searchName){
//     console.log(`이름은${ary[i]['name']}, 나이는 ${ary[i]['age']}, 키는 ${ary[i]['height']}`);
//     // console.log(ary[i]['height']);
//   }
// };
    //홍길동의 나이를 알고싶을때
for (let i = 0; i < ary.length; i++) {
  // if(ary[i]['height'] >= avgheight){
    // console.log(`이름은${ary[i]['name']}, 나이는 ${ary[i]['age']}, 키는 ${ary[i]['height']}`);
    // console.log(ary[i]['height']);
  // }
  sum += ary[i].height;
}
console.log(Math.round(sum / ary.length * 10) / 10);


