// event.js
// 버튼 클릭 후 나타내기와 다시 숨기기
//클릭일 경우에만 사용 가능한 줄이기
// ~~.addEventListener('click', function()~~ => ~~.onclick =function()~~
console.dir(document);
document.querySelector('#showBtn').addEventListener('click', function() {
  console.log('버튼이 클릭되었습니다');
  document.querySelector('#desc').style.display = 'block';
});


// document.querySelector('#hideBtn').addEventListener('click', function() {
//   console.log('버튼을 숨겼습니다.')
//   document.querySelector('#desc').style.display = 'none';
// })


//12열과 같은식

document.querySelector('#hideBtn').onclick = function() {
  console.log('버튼을 숨겼습니다.')
  document.querySelector('#desc').style.display = 'none';
};


//이미지에 이벤트 등록.
//마우스를 올리면 설명이 나왔다 사라지는것
document.querySelector('img').addEventListener('mouseover', function() {
  document.querySelector('#desc').style.display = 'block';
});

document.querySelector('img').addEventListener('mouseout', function() {
  document.querySelector('#desc').style.display = 'none';
});


//이미지바꾸기
let imgAry = ['시츄.jpg', '래브라도 리트리버.PMG', '포메라니안.jpg', '퍼그.jpg']
let idx = 0;
document.querySelector('#changeImg').onclick = function() {
  if(idx > 3) {
    idx = 0;
  }
  let imgName = imgAry[idx++];
  document.querySelector('img').src = 'git-img/' + imgName;
};

// document.onclick = function () {
//   document.location.href = 'https://www.naver.com'
// }



