// Задание 12.7
// Дана строка, сделайте первую букву каждого слова прописной (большой).

// const string = 'Один два и три';

const string = 'one two three'

const regexp = /\b[a-z]/gi;
let result = string.match(regexp);
console.log(result); // [ 'o', 't', '' ]
