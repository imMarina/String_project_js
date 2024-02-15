import './index.scss';

import { taskExample } from './js/task-example.js';
import { regexpOne as taskOne } from './js_regexp/regexp-1.js';
import { regexpTwo as taskTwo } from './js_regexp/regexp-2.js';
import { regexpThree as taskThree } from './js_regexp/regexp-3.js';
import { regexpFour as taskFour } from './js_regexp/regexp-4.js';
import { regexpFive as taskFive } from './js_regexp/regexp-5.js';
import { regexpSix as taskSix } from './js_regexp/regexp-6.js';
import { regexpSeven as taskSeven } from './js_regexp/regexp-7.js';
import { taskEight } from './js/task-8.js';


const tasks = [
  {
    id: 'example',
    title: 'Example',
    subtitle: 'Пользователь вводит предложение. Сделайте reverse каждого слова и выведете на экран результат.',
    function: taskExample,
  },
  {
    id: 1,
    title: 'Задача 12.1',
    subtitle: 'Спросите у пользователя телефонный номер и выведете его в формате: +79235050505',
    function: taskOne,
  },
  {
    id: 2,
    title: 'Задача 12.2',
    subtitle: 'Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.',
    function: taskTwo,
  },
  {
    id: 3,
    title: 'Задача 12.3',
    subtitle: 'Подсчитайте количество строчных и прописных букв в строке. <br/>Считается, что в строке могут быть только английские буквы и пробелы.',
    function: taskThree,
  },
  {
    id: 4,
    title: 'Задача 12.4',
    subtitle: 'Выведете самое длинное слово в предложении (слова разбиты пробелами).',
    function: taskFour,
  },
  {
    id: 5,
    title: 'Задача 12.5',
    subtitle: 'Пользователь вводит слово. Если оно является перевёртышем выведете true иначе false. <br/>Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца. <br/>Слова могут быть как на английском, так и на русском.',
    function: taskFive,
  },
  {
    id: 6,
    title: 'Задача 12.6',
    subtitle: 'Удалите лишние пробелы из строки. <br/>Пробелы лишние если они в начале или в конце строки, а также если между словами больше одного пробела. <br/>Считается, что строка состоит только из букв и пробелов.',
    function: taskSix,
  },
  {
    id: 7,
    title: 'Задача 12.7',
    subtitle: 'Дана строка, сделайте первую букву каждого слова прописной (большой).',
    function: taskSeven,
  },
  {
    id: 8,
    title: 'Задача 12.8',
    subtitle: 'На вход подаётся строка вида "12+23=35". <br/>Выведете на экран true если выражение верно или false если выражение не верно.',
    function: taskEight,
  },
  {
    id: 9,
    title: 'Задача 12.9',
    subtitle: 'На вход подаётся строка вида "12+23-4*5/10+11". Выведете на экран результат выражения. <br/>Приоритет знаков не имеет значения.',
    function: () => {},
  }
]

tasks.forEach( (task) => {

  const taskTemplate = `
    <div class="task-${task.id} task">
      <div class="task-text">
        <h2>${task.title}</h2>
        <p>${task.subtitle || ''}</p>
      </div>

      <div class="input-form">
        <label class="input-text" for="input-${task.id}"></label>
        <input type="text" id="input-${task.id}" placeholder="${task.title}"> 
        <button class="btn" type="button">Отправить</button>
      </div>

      <p class="result"></p>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', taskTemplate);

  const taskElem = document.querySelector(`.task-${task.id}`);
  const input = taskElem.querySelector(`#input-${task.id}`); // поиск по id
  const btn = taskElem.querySelector(".btn");
  const result = taskElem.querySelector('.result');

  btn.addEventListener("click", () => {
      const string = input.value;

      if (string) {
        const correctForm = task.function(string);
        result.textContent = correctForm;
        input.value = "";
      }
  });});