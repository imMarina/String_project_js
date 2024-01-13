// Задача 12.1
// Спросите у пользователя телефонный номер и выведете его в формате: `+79235050505`

export function taskOne(string) {

    let correctForm = '';

    for (let symbol of string) {
        if (symbol === '8' && correctForm.length === 0) {
            correctForm += '7';
        } else if (parseInt(symbol) || symbol === '0') {
            correctForm += symbol;
        }
    }

    return correctForm.length === 11 ? `+${correctForm}` : '';
}