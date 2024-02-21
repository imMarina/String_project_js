// Задание 12.3
// Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.

// input
// One Two Three
// output
// Прописных: 3, строчных: 8


export function regexpThree(string) { // 'One Two Three';

    const up = string.match(/[A-Z]{1,}/g).join('').length; // 3
    const low = string.match(/[a-z]{1,}/g).join('').length; // 8

    const counter = `Прописных ${up}\nСтрочных ${low}`;
    // Прописных 3
    // Строчных 8
    return counter;
}