/* menu slider */

$('nav').mouseenter(function(){
  $('.gnbSubWrap').stop().slideDown(500);
})
$('nav').mouseleave(function(){
    $('.gnbSubWrap').stop().slideUp(200);
  })

/* */

  const elName = document.getElementById('username');
  const elMsg = document.getElementById('feedback');
  let myName;

  function checkName(myName,minlength){
      myName = elName.value; //입력한 내용을 받아옴
      /*
  if(elName.value.length < minlength){
      elMsg.textContent = `${myName}님, ${minlength}글자 이상 입력해 주세요`
  }*/
  }

  function autoFocus(){
      elName.focus();
  }

  elName.addEventListener('blur',function(){
  checkName(myName,7)
  })

  window.addEventListener('load',autoFocus);