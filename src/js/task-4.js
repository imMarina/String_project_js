// Задание 12.4
// Выведете самое длинное слово в предложении (слова разбиты пробелами).

// input
// Один два три
// output
// Один

export function taskFour(value) {

    let valueArr = value.split(' '); // [ 'Один', 'два', 'три' ]

    let max = 0;
    let longestWord = '';

    for (let i = 0; i < valueArr.length; i++) {
        if (valueArr[i].length > max) {
            max = valueArr[i].length;
            longestWord = valueArr[i];
        } 
    }

    const correctForm = `Слово: "${longestWord}", длина: ${max}`;
    return correctForm;
}