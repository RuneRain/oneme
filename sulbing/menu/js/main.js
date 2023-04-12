/* main slider */

$('nav').mouseenter(function(){
  $('.gnbSubWrap').stop().slideDown(500);
})
$('nav').mouseleave(function(){
    $('.gnbSubWrap').stop().slideUp(200);
  })


/* img banner */

  $('.img_banner > span:gt(0)').hide();

  $('menu li').click(function(){
      let num=$(this).index()
      console.log(num)
  
      $('menu li').removeClass('active')
      $(this).addClass('active')
  
      $('.img_banner > span').hide();
      $('.img_banner > span').eq(num).show();
  })

  $('.product_wrap > div:gt(0)').hide();

  $('menu li').click(function(){
    let num=$(this).index()

    $('menu li').removeClass('active')
      $(this).addClass('active')
  
      $('.product_wrap > div').hide();
      $('.product_wrap > div').eq(num).show();
  })