const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const start = document.querySelector('#start');
const greeting = document.querySelector('#greeting');
const main = document.querySelector('.main');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  start.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(name) {
  greeting.innerHTML = `
  Welcome Aboard! <span> ${name}</span>`;
  main.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  start.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
