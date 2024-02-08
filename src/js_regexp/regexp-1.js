// Задача 12.1
// Спросите у пользователя телефонный номер и выведете его в формате: `+79235050505`

export function regexpOne(string) { // '8 (923) 5050505'

    const regexp = /\d{1,}/g;
    const result = string.match(regexp); // [ '8', '923', '5050505' ]

    if (result[0] === '8') {
        result[0] = '7';
    }

    let correctForm = ''; 
    for (let i = 0; i < result.length; i++) {
        correctForm += parseInt(result[i])
    }
    // console.log(correctForm); // 79235050505

    return correctForm.length === 11 ? `+${correctForm}` : '';
}
