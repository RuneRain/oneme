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

const welcomeMessage = (day) => {
  const dayMessage = document.querySelector(".message");
  const welcomeMessageH2 = document.createElement("h3");
  welcomeMessageH2.innerHTML = day;
  dayMessage.appendChild(welcomeMessageH2);
};

let dayName = new Date();
switch (dayName.getDay()) {
  case 0:
    welcomeMessage(`일요일,<br>주말 마무리를 잘해보아요~`);
    break;
  case 1:
    welcomeMessage(`월요일,<br>이번주도 열심히 달려보아요!`);
    break;
  case 2:
    welcomeMessage(`화요일,<br>오늘 하루도 힘내요!`);
    break;
  case 3:
    welcomeMessage(`수요일,<br>벌써 이번주의 반을 왔어요!`);
    break;
  case 4:
    welcomeMessage(`목요일,<br>하루만 더 파이팅이에요!`);
    break;
  case 5:
    welcomeMessage(`금요일, 내일이면 주말이에요!`);
    break;
  case 6:
    welcomeMessage(`토요일, 주말이에요!`);
    break;
  default:
    alert("");
}


let alarmListArr = [];

let breakfastList = [];
let lunchList = [];
let dinnerList = [];

let lists = {
  breakfast: breakfastList,
  lunch: lunchList,
  dinner: dinnerList,
};

const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector(".set_alarm");

// input 안의 내용 생성
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

// todo 생성
setAlarmBtn.addEventListener("click",createTodo);

function createTodo(e) {
  e.preventDefault();
  setForm.style.display = "none";
  whiteMode.style.display = "none";

  const categoryList = `${selectMenu[3].value}`;
  const matchingElement = document.getElementById(categoryList);
  const todolist = document.createElement("div");
  todolist.classList.add("todolist");
  
  const clock = document.createElement("div");
  clock.classList.add("clock");

  let time = `${selectMenu[0].value} : ${selectMenu[1].value} : ${selectMenu[2].value}`;
  let span = document.createElement("span");
  span.innerHTML = time;
  clock.appendChild(span);
  
  const text = document.querySelector(".todo_submit input").value;
  const textDiv = document.createElement("div");
  textDiv.classList.add("todo_text");
  textDiv.innerHTML = text;
  
  let checkDiv = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox"
  checkDiv.appendChild(checkbox);

  let editDiv = document.createElement("div");
  editDiv.innerHTML ='<i class="fa-regular fa-pen-to-square"></i>'

  todolist.appendChild(checkDiv);
  todolist.appendChild(clock);
  todolist.appendChild(textDiv);
  todolist.appendChild(editDiv);
  matchingElement.appendChild(todolist);
  
  saveData();
}

function saveData() {
  const listContainer = document.getElementById("list-container");
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const clock = document.getElementById('clock');

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    clock.style.color = '#555';
    clock.style.textDecoration = 'line-through';
  } else {
    clock.style.color = '';
    clock.style.textDecoration = '';
  }
});
