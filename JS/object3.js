// object3.js


// parseInt = ex) 10.124152515 일때 10이후의 뒤에 소수점숫자는 버림
let person = {
  name: "박민수",
  birth: "2000-04-05",
  bloodType: 'A',
  showInfo: function () { // 객제(person)에 소속되어 있는 함수 => 메소드.
    console.log(`이름은 ${person.name}이고, 생일은 ${this.birth}입니다.`) // this=person
  }
}

person.showInfo

Math.round(12.5); 
Math.random(); //0 과 1사이에 임의의 실수.(1은포함안됨)
console.log(Math.PI);



for (let i=1; i <= 5; i++) {
  console.log(parseInt(Math.random() * 45 + 1));
}

//반복문의 종류는 2가지이다 for과 while 가있다
//for반복문은 값이 명확할때에 쓰는 반복문이고



let i = 0;
while(i < 5) {
  console.log('i의 값은' + i);
  i++;
}
// 어떤 조건을 만족할 동안에만 반복을 실행하도록 하겠습니다.
while(true) {
  console.log(i++);
  if (parseInt(Math.random() * 10 + 1) == 5) {
    break;
  }
}

// 임의의 문자를 입력 => 콘솔: 당신이 입력한 문자는 ??? 입니다.
// 입력한 문자값이 "종료"라는 문자가 들어오면 반복문을 종료
i = 0;
while (true) {
  let iv = prompt("임의의 문자를 입력");
  console.log(`당신이 입력한 문자는 ${iv} 입니다.`);
  i++; // 횟수체크.
  if (iv == "종료" || i == 5){
    break;
  }
}