// Задание 12.7
// Дана строка, сделайте первую букву каждого слова прописной (большой).


export function taskSeven(value) {
    
    let valueArr = value.split(' ').map( (string) => {
        let firstLetter = string[0].toUpperCase();
        return string.replace(string[0], firstLetter);
    });
    
    const correctForm = valueArr.join(' ');
    return correctForm;
}