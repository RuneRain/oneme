const plusBtn = document.querySelector(".plus_button");
const plusBtnClose = document.querySelector(".plus_button_close");
const editSet = document.querySelector(".edit_set");
const whiteMode = document.querySelector(".white_mode");
const setForm = document.querySelector(".set_form");
const setFormOpen = document.querySelector(".set_form_open");

plusBtn.addEventListener("click", (e) => {
  //플러스 버튼 누름
  editSet.style.display = "block";
  plusBtn.style.display = "none";
  plusBtnClose.style.display = "block";
});
plusBtnClose.addEventListener("click", (e) => {
  //플러스 버튼 닫힘
  editSet.style.display = "none";
  plusBtn.style.display = "block";
  plusBtnClose.style.display = "none";
});

setFormOpen.addEventListener("click", (e) => {
  //폼 버튼 누름
  setForm.style.display = "block";
  whiteMode.style.display = "block";
});
whiteMode.addEventListener("click", (e) => {
  //폼 버튼 닫힘
  setForm.style.display = "none";
  whiteMode.style.display = "none";
});

// 알람 설정
const currentTime = document.querySelector(".current");
//현재시간 담고 있는 곳
const time = document.querySelector(".time");
//선택한 시간을 담는 곳

const content = document.querySelector(".timer");
//시간 만드는걸 담고있는 div
const selectMenu = document.querySelectorAll("select");
//시간,분,apm option을 담고있는 select

let Hour = document.getElementsByTagName("select")[0].value;
let Minute = document.getElementsByTagName("select")[1].value;
let Ampm = document.getElementsByTagName("select")[2].value;
let catagory = document.getElementsByTagName("select")[3].value;
//선생님께 select랑 input에 있는 거 가져오는 법 물어보기

time.innerHTML = `${Hour}:${Minute}:${Ampm}`;

let alarmTime;
let alarmsArray = [];

//input 안의 내용 생성
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

//시간 설정 관련
setInterval(() => {
  //현재 시간 불러오는 부분
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  //if hour value is 0, set this value to 12
  h = h == 0 ? (h = 12) : h;
  //adding 0 before hr, min, sec if this value is less than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTime.innerHTML = `${h}:${m}:${s} ${ampm}`;
  //여기까지가 현재시간 설정.

  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

/*
const deleteBtn = document.querySelector(".deleted");

deleteBtn.addEventListener("click", removeItem);

//삭제해주는 함수 지정
const removeItem = () => {
  const lists = document.querySelector(".list");
  lists.forEach((lists) => {
    lists.remove();
  });
};

function createTodo(todoData) {
  //선택한 카테고리 내에 들어가도록 하는 방법??
  //클릭한 카테고리의 이름을 알아온다> 그 카테고리에 넣는다
  //input에 입력한 글자 알아와야하고, 그걸 변수로 지정해서 넣고.
  //선택했던 시간 가져와서 담아주는 것도 해야함
  //li를 만드는 거 하나 생성했으면 반복하는 것도 해줘야 하나..?

  const list = document.createElement("div");

  let createTodoList = `
  <div class="checkbox">
    <input type="checkbox" />
  </div>
  <div class="info">
    <p class="clock">${todoData}</p>
    <span>${todoData}</span>
    <span class="edit">
      <i class="fa-regular fa-pen-to-square"></i>
    </span>
  </div>
  <div class="deleted">
    <span>
      <i class="fa-regular fa-square-minus"></i>
    </span>
  </div>
`;

  list.className = "list";
  list.innerHTML = createTodo;
  ??.append(hotel);
}

*/
