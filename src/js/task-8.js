// Задание 12.8
// На вход подаётся строка вида "12+23=35". Выведете на экран `true` если выражение верно или `false` если выражение не верно.

export function taskEight(value) {

    const valueArr = value.split('=');  // [ '12+23', '35' ]
    
    const mathOperation = ['+', '-', '/', '*', '**'];
    const operation = mathOperation.find((op) => valueArr[0].includes(op)); // +
    const indexOfMathSymbol = valueArr[0].indexOf(operation); // 2

    const num1 = parseInt(value.slice(0, indexOfMathSymbol)); // 12
    const num2 = parseInt(value.slice(indexOfMathSymbol + 1)); // 23
    const total = parseInt(valueArr[valueArr.length - 1]); // 35

    let result;

    switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '**': // doesn't work this way ??? HELP
        result = num1 ** num2;
        break; 
    }

    if (result === total) {
        return true;
    } else {
        return false;
    }
}