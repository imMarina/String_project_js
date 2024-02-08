// Задание 12.4
// Выведете самое длинное слово в предложении (слова разбиты пробелами).

// input
// Один два три
// output
// Один

export function taskFour(string) {

    // let string = 'Один English englishРус';

    let max = 0;
    let longestWord = '';
    
    let arr = string.split(' ').forEach( (word) => {
    // console.log(arr); // [ 'Один', 'English', 'englishРус' ]
    
        const regexp = /[a-zA-Z\D]{1,}/g;
        const result = word.match(regexp).forEach( (str) => {
            if (str.length > max) {
            max = str.length;
            longestWord = str;
        } 
        });
    });
    
    const correctForm = `Слово: "${longestWord}", длина: ${max}`;
    
    // console.log(correctForm); // Слово: "englishРус", длина: 10
    return correctForm;
}
