let name1 = prompt("첫번째 숫자를 입력해 주세요");
let name2 = prompt("두번째 숫자를 입력해 주세요");
let name3 = prompt("세번째 숫자를 입력해 주세요");
let max = 0, min = 0;

if (name1 > name2) {
  if (name2 > name3) {
    max = name1;
    min = name3;
  } else {
    if (name3 > name2) {
      min = name2;
      if (name1 > name3){
        max = name1
      }else {
        max = name3
      }
    }
  }
} else {
  if (name2 > name3) {
    if (name3 > name1)
      max = name2;
      min = name1;
  } else {
    if (name1 > name3) {
      min = name3;
    }
    if(name2 = name1){
      max = name2
    }else {
      
    }
  }
}
console.log("최대값은" + max + "이고 최소값은" + min "이다.");