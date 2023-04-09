/* menu slider */

$('nav').mouseenter(function(){
  $('.gnbSubWrap').stop().slideDown(500);
})
$('nav').mouseleave(function(){
    $('.gnbSubWrap').stop().slideUp(200);
  })


/* main slider */
$(function(){
  const mainImgWidth = $('.slider img').width();
  const mainImgNember = $('.slider img').length;
  const mainSliderUl = $('.slider > ul');

  mainSliderUl.css({width:mainImgWidth*mainImgNember})

  setInterval(function(){
    mainSliderUl.animate({'margin-left':-mainImgWidth},300, 'swing', function(){
      mainSliderUl.css({'margin-left':0})
      mainSliderUl.find('li:first-child').insertAfter(mainSliderUl.find('li:last-child')); 
    });
  },3000)

const right = function(){
  mainSliderUl.animate({'margin-left':-mainImgWidth},300, 'swing', function(){
    mainSliderUl.css({'margin-left':0})
    mainSliderUl.find('li:first-child').insertAfter(mainSliderUl.find('li:last-child')); 
  });
}

const left = function(){
  mainSliderUl.find('li:last-child').insertBefore(mainSliderUl.find('li:first-child'));
  mainSliderUl.css({'margin-left':-mainImgWidth})
  mainSliderUl.animate({'margin-left':0},300); 
}

$('.next_main').click(right);
$('.prev_main').click(left);
$('.stop_main').click(function(){
  clearInterval(intervalId)
  $('.stop_main > img').hide();
  $('.play_main > img').show();
})
$('.play_main').click(function(){
  intervalId =  setInterval(right,1000)
  $('.stop_main > img').show();
  $('.play_main > img').hide();
})
})

/* event_img banner */
$(function(){
  const imgBannerWidth = $('.event_img img').width();
  const imgBannerNember = $('.event_img img').length;
  const BannerSliderUl = $('.event_img > ul');

  BannerSliderUl.css({width:imgBannerWidth*imgBannerNember})


  setInterval(function(){
    BannerSliderUl.animate({'margin-left':-imgBannerWidth},300, 'swing', function(){
      BannerSliderUl.css({'margin-left':0})
      BannerSliderUl.find('li:first-child').insertAfter(BannerSliderUl.find('li:last-child')); 
      });
    },3000)
})
