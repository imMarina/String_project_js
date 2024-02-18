// Задание 12.6
// Удалите лишние пробелы из строки. Пробелы лишние если они в начале или в конце строки, а также если между словами больше одного пробела. Считается, что строка состоит только из букв и пробелов.

// input
// Один     два  и три
// output
// Один два и три

export function regexpSix(string) {
    
    const regexp = /\s{1,}/g;
    // const regexp = /\s+/g;
    const correctForm  =  string.trim().replace(regexp, ' ');
    // console.log(typeof correctForm, correctForm); // string  Один два и три
    return correctForm;
}
