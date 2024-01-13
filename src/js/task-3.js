// Задание 12.3
// Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.


export function taskThree(string) {

    let countUpper = 0;
    let countLower = 0;

    for (let symbol of string) {
        if (symbol === symbol.toUpperCase() && symbol !== ' ') {
            countUpper += 1;
        } else if (symbol === symbol.toLowerCase() && symbol !== ' ') {
            countLower += 1;
        }
    }

    const counter = `Прописных ${countUpper}\nСтрочных ${countLower}`;
    return counter;
}