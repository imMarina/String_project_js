// Задание 12.3
// Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.

export function regexpThree(string) {

    let countUpper = 0;
    let countLower = 0;

    const regexpUpper = /[A-Z]{1,}/g;
    string.match(regexpUpper).forEach( (str) => {
        countUpper += str.length;
    });
    // console.log(countUpper); // 3
    
    
    const regexpLower = /[a-z]{1,}/g;
    string.match(regexpLower).forEach( (str) => {
        countLower += str.length;
    });
    // console.log(countLower); // 8

    const counter = `Прописных ${countUpper}\nСтрочных ${countLower}`;
    // console.log(counter); 
    // Прописных 3
    // Строчных 8
    return counter;

}
