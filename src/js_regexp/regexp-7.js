// Задание 12.7
// Дана строка, сделайте первую букву каждого слова прописной (большой).

// const string = 'Один два и три';

export function regexpSeven(string) { // 'one two three'
    const correctForm = string.split(' ').map( (string) => {
        return string.replace(/\b[a-zа-яё]/gi, string[0].toUpperCase())
    }); 
    return correctForm; // [ 'One', 'Two', 'Three' ]
}


