// Задание 12.5
// Пользователь вводит слово. Если оно является перевёртышем выведете true иначе false. Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца. Слова могут быть как на английском, так и на русском.

// input
// мадам
//output
// true

export function taskFive(string) {

    let valueArr = string.split(''); // [ 'м', 'а', 'д', 'а', 'м' ]

    let reverseWord = valueArr.toReversed().join('');

    const result = string.toLowerCase() === reverseWord.toLowerCase() ? true : false;
    return result;
}