const gnbBtn = document.querySelector('.gnbBtn');
const gnb_open = document.querySelector('.gnb_open');
const dark = document.querySelector('.dark');

const btn_subs = document.querySelectorAll('.btn_sub');
const btn_subArrows = document.querySelectorAll('.ico_arrow_down');
const list_sub_wraps = document.querySelectorAll('.gnb_sub');

//gnb가 왼쪽에서 튀어나옴
gnbBtn.addEventListener('click',()=>{
  gnb_open.style= `transform:translateX(0)`;
  dark.style.display = 'block';
})

//gnb가 왼쪽으로 들어감
dark.addEventListener('click',()=>{
  gnb_open.style= `transform:translateX(-100%)`;
  dark.style.display = 'none';
  loginPop.style.display = 'none';
})

//gnb내부의 서브(여러개)
btn_subs.forEach(function(item,index){
  item.addEventListener('click',function(){
    btn_subArrows[index].classList.toggle('on')
    if(btn_subArrows[index].classList.contains('on')){
      list_sub_wraps[index].style.height = 'auto';
    } else {
      list_sub_wraps[index].style.height = '0';
    }
  })
})

/* main slider */
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
