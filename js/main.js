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

const searchBox = document.querySelector(".search_box");
const projectBox = document.querySelectorAll(".project_box");

searchBox.addEventListener("keyup", (e) => {
  const searchFilter = e.target.value.toLowerCase().trim();

  projectBox.forEach((item) => {
    if (item.textContent.includes(searchFilter)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
