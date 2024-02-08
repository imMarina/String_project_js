// Задача 12.2
// Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.

// input 
// 12 Один567два и три78
// output
// [ 12, 567, 78 ]

export function regexpTwo(string) {

    const regexp = /[0-9]{1,}/g;
    const correctForm = string.match(regexp).map((el) => Number(el));

    // console.log(correctForm); // [ 12, 567, 78 ]
    
    return correctForm;
}
