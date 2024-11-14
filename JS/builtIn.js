// builtIn (내장 객체)
// 날짜 (Date객체)

let today = new Date(); // Date객체.
today.setFullYear(2023);
today.setMonth(4);
today.setDate(31);

console.log(today.getFullYear());// 년도
console.log(showTime(today));// 년도

console.log(`월: ${today.getMonth() +1 }, 날짜: ${today.getDate()}, 요일: ${today.getDay()}`);// 년도
// today.getHours()+today.getMinutes()+today.getSeconds();

function showTime(time = new Date()) {
  // 2024-11-13 14:22:23 포맷.
  let yyyy = time.getFullYear(); // 2024
  let MM = time.getMonth() + 1; //11 <- 10
  let dd = time.getDate(); // 14

  let HH = time.getHours(); 
  let mm = time.getMinutes();
  let ss = time.getSeconds();
  // console.log((' ' + ss).length);
  HH = (' ' + HH).length == 1 ? '0' + HH : HH;
  mm = (' ' + mm).length == 1 ? '0' + mm : mm;
  ss = (' ' + ss).length == 1 ? '0' + ss : ss;
  let day = time.getDay();

  let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];


  return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss + ' ' + days[day];
}

// 메소드 설명 사이트 https://developer.mozilla.org/ko/