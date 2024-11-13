i = 0;
while (true) {
  let iv = prompt("임의의 문자를 입력");
  console.log(`당신이 입력한 문자는 ${iv} 입니다.`);
  i++; // 횟수체크.
  if (iv == "종료" || i == 5){
    break;
  }
}


//스무고개 만들기 소스;