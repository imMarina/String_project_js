// Задача 12.1
// Спросите у пользователя телефонный номер и выведете его в формате: `+79235050505`

export function regexpOne(string) { // '8 (923) 5050505'

    // delete all 'NaN symbols'
    let onlyNum = string.replace(/\D{1,}/g, ""); // 89235050505

    const regexp = /^8/;
    if (regexp.test(onlyNum)) onlyNum = onlyNum.replace(regexp, "7");

    let correctForm = ''; 
    return (onlyNum.length === 11) ? correctForm += `+${onlyNum}` : '';
}
