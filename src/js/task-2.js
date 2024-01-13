// Задача 12.2
// Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.

// input 
// 12 Один567два и три78
// output
// [ 12, 567, 78 ]

export function taskTwo(value) {

    const valueArr = value.split(' ');

    // creating extra Array for 'numbers' only
    let newArr = [];

    // checking every String inside The Array and removing 'not number chars'
    valueArr.forEach( (string) => {
        let out = '';
        for (let symbol of string) {
            if (parseInt(symbol) || symbol === '0') {
                out += symbol;
            } 
        }
        newArr.push(parseInt(out)); // [ 12, 0, 567, NaN, 78 ]
    });

    const correctForm = newArr.filter((str) => str || str === 0).join(', '); // [ 12, 0, 567, 78 ]
    return correctForm;
}
