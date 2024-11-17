// 임의의 숫자를 6개를 생성함 범위는 1~45까지

function lottoNumber() {
  let lottoAry = [temp];
  for (let i = 0; i < lottoAry ) {
    let temp = parseInt(Math.random() * 45) + 1;
  }
  for (let j = 1; j < 6; j++){
    lottoAry.push(temp)
  }
}

//버튼이벤트

document.querySelector("#btn").onclick = function () {
  document.querySelector("#lotto").innerHTML =
    document.querySelector("#lotto").innerHTML + `<span>${lottoAry[i]}<span>` = numary;
};

// parseInt(Math.random('span') * 45 ) + 1

// span 안에 넣을 값만
