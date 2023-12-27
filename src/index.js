import './index.scss';

// находим "главный" элемент нашей страницы и сохраняем ссылку на него в константу
const taskExample = document.querySelector(".task-example"); // поиск по class

// находим другие необходимые элeменты внутри "главного" элементы
// и ссылки на них сохраняем в константы
const input = taskExample.querySelector("#input"); // поиск по id
const btn = taskExample.querySelector(".btn");
const result = taskExample.querySelector('.result');


// на элемент <button> по ссылку btn с помощью метода addEventListener
// добавляется обработчик события "click" (нажатие на кнопку) - первый аргумент метода
// второй аргумент - callback-функция, которая будет вызваться каждый раз при клике на кнопку
// в данном случае callback-функция - это анонимная стрелочная функция
btn.addEventListener("click", () => {
    // код, который выполняется при каждом клике на кнопку "Отправить"
});


btn.addEventListener("click", () => {
	// из элемента <input> по ссылке input через свойство value
	// получаем введённые данные из поля ввода 
    const text = input.value;

	// проверяем, ввёл ли какой-либо текст пользователь
    if (text) {
		// разделяем предложение на слова и записываем их в массив words
    const words = text.split(" ");
		// создаём вспомогательный массив, в который будет хранить в себе перевёрнутые слова
    const revWords = [];

		// циклом идём по кадому слову в массиве words
    for (let word of words) {
			// вспомогательная переменная, в которую запишем новое перевёрнутое слово
    let revWord = "";
			// циклом идём по символам с конца слова word
    for (let i = word.length - 1; i >= 0; --i) {
				// записываем каждый символ с конца слова word в начало строки revWord 
        revWord += word[i];
    }
			// добавляем новое первёрнутое слово revWord в массив revWords
    revWords.push(revWord);
    }
		// соединяем все слова массива revWords в одну строку, соединительным символом является пробел " "
    const revText = revWords.join(" ");
		// добавляем в элемент <p> по ссылке result c помощью свойства textContent текст revText
    result.textContent = revText;
		// очищаем поле ввода
    input.value = "";
}
});


// Задача 12.1
// Спросите у пользователя телефонный номер и выведете его в формате: `+79235050505`

// DOM elements
const task1 = document.querySelector('.task-1');
const input1 = task1.querySelector("#input"); // поиск по id
const btn1 = task1.querySelector(".btn");
const result1 = task1.querySelector('.result');

btn1.addEventListener("click", () => {

  const string = input1.value;

  let correctForm = '';
  
  for (let symbol of string) {
    if (symbol === '8' && correctForm.length === 0) {
      correctForm += '7';
    } else if (parseInt(symbol) || symbol === '0') {
      correctForm += symbol;
    }
  }

  if (correctForm.length === 11) {
    // Array to String conversion
    result1.textContent = `+${correctForm}`;
    }
  
  // очищаем поле ввода
  input1.value = "";
});



// Задача 12.2
// Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.

// input 
// 12 Один567два и три78
// output
// [ 12, 567, 78 ]

// DOM elements
const task2 = document.querySelector('.task-2');
const input2 = task2.querySelector("#input"); // поиск по id
const btn2 = task2.querySelector(".btn");
const result2 = task2.querySelector('.result');

btn2.addEventListener('click', () => {

  const value = input2.value; // '12 0 Один567два и три78';

  // String to Array conversion
  const valueArr = value.split(' ');

  // creating extra Array for 'numbers' only
  let newArr = [];

  // checking every Atring inside Array and removing not number chars
  valueArr.forEach( (string) => {
    let out = '';
    for (let symbol of string) {

        if (parseInt(symbol) || symbol === '0') {
          out += symbol;
      } 
    }
    newArr.push(parseInt(out));
  });

console.log(newArr); // [ 12, 0, 567, NaN, 78 ]

// deleting empty strings
const correctForm = newArr.filter((str) => str || str === 0);
console.log(correctForm); // [ 12, 0, 567, 78 ]

result2.textContent = correctForm;
// очищаем поле ввода
input2.value = "";
});



// Задание 12.3
// Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.

// DOM elements
const task3 = document.querySelector('.task-3');
const input3 = task3.querySelector("#input"); // поиск по id
const btn3 = task3.querySelector(".btn");
const result3 = task3.querySelector('.result');

btn3.addEventListener('click', () => {

  let string = input3.value;

  let countUpper = 0;
  let countLower = 0;

  for (let symbol of string) {
          
      if (symbol === symbol.toUpperCase() && symbol !== ' ') {
          countUpper += 1;
      } else if (symbol === symbol.toLowerCase() && symbol !== ' ') {
          countLower += 1;
      }
  }

  let counter = `Прописных ${countUpper}\nСтрочных ${countLower}`;

  result3.textContent = counter;
  // очищаем поле ввода
  input3.value = "";
});



// Задание 12.4
// Выведете самое длинное слово в предложении (слова разбиты пробелами).

// input
// Один два три
// output
// Один

// DOM elements
const task4 = document.querySelector('.task-4');
const input4 = task4.querySelector("#input"); // поиск по id
const btn4 = task4.querySelector(".btn");
const result4 = task4.querySelector('.result');

btn4.addEventListener('click', () => { 

  let value = input4.value;

  // String to Array conversion
  let valueArr = value.split(' ');
  console.log(valueArr); // [ 'Один', 'два', 'три' ]
  
  // find max length
  let max = 0;
  let longestWord = '';
  
  for (let i = 0; i < valueArr.length; i++) {
  
        if (valueArr[i].length > max) {
          max = valueArr[i].length;
          longestWord += valueArr[i];
        } 
  
    }

  result4.textContent = `Слово: "${longestWord}", длина: ${longestWord.length}`;
  // очищаем поле ввода
  input4.value = "";
});



// Задание 12.5
// Пользователь вводит слово. Если оно является перевёртышем выведете true иначе false. Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца. Слова могут быть как на английском, так и на русском.

// input
// мадам
//output
// true

// DOM elements
const task5 = document.querySelector('.task-5');
const input5 = task5.querySelector("#input"); // поиск по id
const btn5 = task5.querySelector(".btn");
const result5 = task5.querySelector('.result');

btn5.addEventListener('click', () => { 

  let value = input5.value;

  // String to Array conversion
  let valueArr = value.split('');
  // console.log(valueArr); // [ 'м', 'а', 'д', 'а', 'м' ]

  // reverse and Array to String conversion
  let reverseWord = valueArr.reverse().join('');

  (value.toLowerCase() === reverseWord.toLowerCase()) ? result5.textContent = true : result5.textContent = false;

  // очищаем поле ввода
  input5.value = "";
});



// Задание 12.6
// Удалите лишние пробелы из строки. Пробелы лишние если они в начале или в конце строки, а также если между словами больше одного пробела. Считается, что строка состоит только из букв и пробелов.

// input
// Один     два  и три
// output
// Один два и три


// DOM elements
const task6 = document.querySelector('.task-6');
const input6 = task6.querySelector("#input"); // поиск по id
const btn6 = task6.querySelector(".btn");
const result6 = task6.querySelector('.result');

btn6.addEventListener('click', () => { 

  let value = input6.value;

  // String to Array conversion
  let valueArr = value.split(' ');

  // Delete all spaces and push string to the new Array without spaces
  let arrNoSpace = [];
  
  valueArr.forEach( (string) => {
      if (string) {
          arrNoSpace.push(string);
      }
  });

  // Array to String conversion
  let result = arrNoSpace.join(' ');
  result6.textContent = result;
  // очищаем поле ввода
  input6.value = "";
});


// Задание 12.7
// Дана строка, сделайте первую букву каждого слова прописной (большой).

// DOM elements
const task7 = document.querySelector('.task-7');
const input7 = task7.querySelector("#input"); // поиск по id
const btn7 = task7.querySelector(".btn");
const result7 = task7.querySelector('.result');

btn7.addEventListener('click', () => { 

  let value = input7.value;

  // String to Array conversion
  let valueArr = value.split(' ');
  console.log(valueArr); // [ 'Один', 'два', 'и', 'три' ]
  
  // change first letter
  let arrToUpperCase = valueArr.map( (string) => {
      
      let firstLetter = string[0].toUpperCase();
      let deleteFirst = string.slice(0, 1);
      let result = string.replace(deleteFirst, firstLetter);
      
      return result;
  });
  // console.log(arrToUpperCase); // [ 'Один', 'Два', 'И', 'Три' ]
  
  // String to Array conversion
  let result = arrToUpperCase.join(' ');

  result7.textContent = result;
  // очищаем поле ввода
  input7.value = "";
});



// Задание 12.8
// На вход подаётся строка вида "12+23=35". Выведете на экран `true` если выражение верно или `false` если выражение не верно.

// DOM elements
const task8 = document.querySelector('.task-8');
const input8 = task8.querySelector("#input"); // поиск по id
const btn8 = task8.querySelector(".btn");
const result8 = task8.querySelector('.result');


btn8.addEventListener('click', () => { 

  let value = input8.value; // let value = '12+23=35';

  let findPlus = value.indexOf('+'); // 2
  let findEqual = value.indexOf('='); // 5

  let num1 = parseInt(value.slice(0, findPlus)); // 12
  let num2 = parseInt(value.slice(findPlus + 1, findEqual)); // 23
  let sum = parseInt(value.slice(findEqual + 1)); // 35
  // console.log(typeof sum); // number

  // let plus = value.slice(findPlus, 3);
  // console.log(plus); // +

  if (num1 + num2 !== sum) {
    result8.textContent = false;
  } else {
    result8.textContent = true;
  }

  // очищаем поле ввода
  input8.value = "";
});
