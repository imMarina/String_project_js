// Задание 12.5
// Пользователь вводит слово. Если оно является перевёртышем выведете true иначе false. Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца. Слова могут быть как на английском, так и на русском.

// input
// мадам
//output
// true

export function regexpFive(string) {

    //const regexp = /[a-z\D]{1,}/gi; 
    const regexp = /[a-zа-яё]{1,}/gi;
    const checkedString = string.match(regexp).join(' ');
    // console.log(checkedString); // мадам
    
    if (string !== checkedString) {
        console.log(`Write down in English or Russian and don't use numbers or other symbols`);
    } else {
        // console.log('Everything is ok');
        let boolean = true;
        for (let i = 0; i < string.length; i++) {
            // console.log(string[i]); // m a d a m
            if (checkedString[i] !== string[string.length - 1 - i]) {
                // console.log(checkedString[i], string[string.length - 1 - i]);
                boolean = false;
                break;
            } 
        }
        // console.log(boolean);
        return boolean;
    }
}