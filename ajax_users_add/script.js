/*Создать форму добавления пользователя состоящую из следующих полей name, email, phone, website.
При сабмите формы сделать POST запрос на сервер https://jsonplaceholder.typicode.com/users

После ответа от сервера добавлять полученного пользователя на страницу в список.
Для визуализации формы и списка можете использовать произвольные стили.*/

const getBtn = document.querySelector("#getBtn");
let addBtn = document.querySelector("#addBtn");
const container = document.querySelector(".container");
this.form = document.querySelector(".form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let websiteInput = document.querySelector("#website");

function getPosts(cb) {
  const xhr = new XMLHttpRequest(); //создаем новый запрос
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //настраиваем
  xhr.addEventListener("load", () => {
    //и слушаем ответ
    const response = JSON.parse(xhr.responseText); // получив ответ - парсим
    cb(response); //отправляем распарсенный ответ в КолБэк
  });

  xhr.addEventListener("error", () => {
    // в случае ошибки - выводим ошибку
    console.error;
  });
  xhr.send(); //отправляем запрос на сервер
}

function createPost(body, cb) {
  const xhr = new XMLHttpRequest(); //создаем новый запрос
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users"); //настраиваем
  xhr.addEventListener("load", () => {
    //и слушаем ответ
    const response = JSON.parse(xhr.responseText); // получив ответ - парсим
    cb(response); //отправляем распарсенный ответ в КолБэк
    // console.log(response);
  });
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.addEventListener("error", () => {
    // в случае ошибки - выводим ошибку
    console.error;
  });
  xhr.send(JSON.stringify(body)); //отправляем запрос на сервер
}

function cardTemplate(post) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let name = document.createElement("h5");
  name.classList.add("card-title");
  name.textContent = post.name;

  let email = document.createElement("a");
  email.classList.add("card-link");
  email.setAttribute("href", `mailto:${post.email}`);
  email.textContent = post.email;

  let phone = document.createElement("p");
  phone.classList.add("card-text");
  phone.textContent = post.phone;

  let website = document.createElement("a");
  website.setAttribute("class", "card-link");
  website.setAttribute("href", post.website);
  website.classList.add("card-link");
  website.textContent = post.website;

  cardBody.appendChild(name);
  cardBody.appendChild(email);
  cardBody.appendChild(phone);
  cardBody.appendChild(website);
  card.appendChild(cardBody);
  return card;
}

function renderPosts(response) {
  let fragment = document.createDocumentFragment();
  response.forEach((post) => {
    let card = cardTemplate(post);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

getBtn.addEventListener("click", (event) => {
  getPosts(renderPosts);
});

addBtn.addEventListener("click", (e) => {
  const newUser = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    website: websiteInput.value,
  };

  createPost(newUser, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card);
  });
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  websiteInput.value = "";
});
