// 스크롤 되면 헤더 모양이 바뀜
const header = document.querySelector(".header");
const sticker = document.querySelector(".sticker");
const rect = header.getBoundingClientRect();

const headerTop = rect.bottom;

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (headerTop < scroll) {
    sticker.style = `transform:translateY(0)`;
  } else {
    sticker.style = `transform:translateY(-50px)`;
  }
});

//클릭하면 about이 튀어나옴.
const aboutMe = document.querySelector('.about_me')
const profile = document.querySelector('.profile_wrap')

aboutMe.addEventListener('click', (e)=>{
  profile.style.display='block';
})
profile.addEventListener('click',(e)=>{
  profile.style.display='none';
})


//libray filter
const projectTagBtn = document.querySelectorAll(".project_nav > button");
const projectBoxs = document.querySelectorAll(".project_box");

projectTagBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    projectBoxs.forEach((item) => {
      if (filter === "all") {
        item.style.display = "flex";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

//animation script
$(window).scroll(function(){
  var sct = $(this).scrollTop();

  $('section').each(function(){
    var sectionOST = $(this).offset().top - 500;
    if(sct >= sectionOST){
      $(this).addClass('animate__animated');
    }
  });
});
