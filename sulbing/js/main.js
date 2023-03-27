
$('nav').mouseenter(function(){
  $('.gnbSubWrap').stop().slideDown(500);
})
$('nav').mouseleave(function(){
    $('.gnbSubWrap').stop().slideUp(200);
  })


  const sildes = document.querySelector('#slider>ul'); //ul 슬라이드 컨테이너
  const sildeImg = document.querySelectorAll('#slider>ul li'); //슬라이드들
  const imgWidth = sildeImg[0].children[0].offsetWidth; //이미지 가로길이(css적용 후)
  const slideCount =  sildeImg.length;  //슬라이드 개수
  const prev = document.querySelector('.prev') //이전버튼
  const next = document.querySelector('.next') //다음버튼
  
  sildes.style.width = `${imgWidth*(slideCount+2)}px`
  
  function makeClone(){
    let clone_first = sildeImg[0].cloneNode(true);
    let clone_last = sildes.lastElementChild.cloneNode(true);
    sildes.append(clone_first);
    sildes.firstElementChild.before(clone_last);
  
    console.log('clone_last',clone_first)
  }
  makeClone();