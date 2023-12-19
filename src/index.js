import './index.scss';

// находим "главный" элемент нашей страницы и сохраняем ссылку на него в константу
const taskExample = document.querySelector(".task-example"); // поиск по class

// находим другие необходимые эелменты внутри "главного" элементы
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