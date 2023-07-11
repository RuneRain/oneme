// 스크롤 되면 헤더 모양이 바뀜
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.add("on");
  if (window.scrollY == 0) {
    header.classList.remove("on");
  }
});


//libray filter

const libraryTagBtn = document.querySelectorAll(".library_nav > button");
const libraryBoxs = document.querySelectorAll(".library_box");

libraryTagBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    libraryBoxs.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});
