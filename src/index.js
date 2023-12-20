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
const input1 = task1.querySelector("#input-1"); // поиск по id
const btn1 = task1.querySelector(".btn-1");
const result1 = task1.querySelector('.result-1');

btn1.addEventListener("click", () => {

  const value = input1.value;
  
  // delete all spaces
  let valueNoSpace = value.replaceAll(' ', '')
  
  // String to Array conversion
  let valueArr = valueNoSpace.split(''); 
  
  // remove not numbers chars
  let onlyNumbers = valueArr.filter( (str) => {
      let num = Number(str);
      return num >= 0 && num < 10;
  });
  
  // add char '+7'
  onlyNumbers.splice(0, 1, '+7');
  console.log(onlyNumbers); 
  
  if (onlyNumbers.length === 11) {
  // Array to String conversion
  const correctForm = onlyNumbers.join("");
  result1.textContent = correctForm;
  // очищаем поле ввода
  input1.value = "";
  }
});


// Задача 12.2
// Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.

// input 
// 12 Один567два и три78
// output
// [ 12, 567, 78 ]

// DOM elements
const task2 = document.querySelector('.task-2');
const input2 = task2.querySelector("#input-2"); // поиск по id
const btn2 = task2.querySelector(".btn-2");
const result2 = task2.querySelector('.result-2');

btn2.addEventListener('click', () => {

  const value = input2.value;

  // String to Array conversion
  const valueArr = value.split(' ');

  // creating extra Array for 'numbers' only
  let newArr = [];

  // checking every Atring inside Array and removing not number chars
  valueArr.forEach( (string) => {

          let out = '';
          for (let symbol of string) {
              let num = Number(symbol);
              
              // checking if num isn't NaN
              if (num) {
                  out += num;
              }
          }
      newArr.push(out);
  });

console.log(newArr); // [ '12', '567', '', '78' ]

// deleting empty strings
const noEmptyStrings = newArr.filter((str) => str);
console.log(noEmptyStrings); // [ '12', '567', '78' ]

// creating Array witn Numbers only
const correctForm = noEmptyStrings.map((str) => Number(str));
console.log(result2); // [ 12, 567, 78 ]

result2.textContent = correctForm;
// очищаем поле ввода
input2.value = "";

});



// Задание 12.3
// Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.

// DOM elements
const task3 = document.querySelector('.task-3');
const input3 = task3.querySelector("#input-3"); // поиск по id
const btn3 = task3.querySelector(".btn-3");
const result3 = task3.querySelector('.result-3');

btn3.addEventListener('click', () => {

  let value = input3.value;

  // String to Array conversion
  let valueArr = value.split(' ');
  console.log(valueArr); // [ 'One', 'Two', 'Three' ]

  let arrUpper =[];
  let arrLower =[];

  valueArr.forEach( (string) => {
      
      let countUpper = 0;
      let countLower = 0;
      
      for (let symbol of string) {
          // console.log(symbol);
              
          if (symbol === symbol.toUpperCase()) {
              countUpper += 1;
          }

          if (symbol === symbol.toLowerCase()) {
              countLower += 1;
          }
      }
      arrUpper.push(countUpper);
      arrLower.push(countLower);
  });

  // console.log(arrUpper); // [ 1, 1, 1 ]
  // console.log(arrLower); // [ 2, 2, 4 ]

  let totalUpper = arrUpper.reduce( (sum, elem) => {
    return sum + elem;
  }, 0);

  let totalLower = arrLower.reduce( (sum, elem) => {
    return sum + elem;
  }, 0);

  let counter = `Прописных ${totalUpper}\nСтрочных ${totalLower}`;


  result3.textContent = counter;
  // очищаем поле ввода
  input3.value = "";

});