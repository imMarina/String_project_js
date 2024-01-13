
// Задание 12.9
// На вход подаётся строка вида "12+23-4*5/10+11". Выведете на экран результат выражения. Приоритет знаков не имеет значения.

// input
// 12-10*2
// output
// 4


export function taskNine(string) {

    // let string = '12-10*2';

    let stringToArray = string.split('');  
    // console.log(valueArr); // ['1', '2', '-', '1', '0', '*', '2']

    const mathOperation = ['+', '-', '/', '*'];

    const operationsIncludedArr = [];
    const numArr = [];
    
    for (let item of stringToArray) {
        if (!(parseInt(item) >= 0 && parseInt(item) < 10)) {
            operationsIncludedArr.push(item);
        }
        
        if (parseInt(item) >= 0 && parseInt(item) < 10) {
            numArr.push(item);
        } else {
            numArr.push(' ');
        }
    }

  // console.log(operationsIncluded); // [ '-', '*' ]
  // console.log(numArr); // ['1', '2', ' ', '1', '0', ' ', '2'];


    let onlyNumArr = numArr.reduce(function (strNum1, strNum2) {
        return strNum1 + strNum2;
    }).split(' ');  

    console.log(onlyNumArr); // [ '12', '10', '2' ]
    console.log(operationsIncludedArr); // [ '-', '*' ]

    
    // DRAFTS
    let total;
    
    for (let i = 0; i < onlyNumArr.length; i++) {

        let result;
        let num1 = Number(onlyNumArr[i]);

        for (let i = 0; i < onlyNumArr.length; i++) {
            
            let num2 = Number(onlyNumArr[i+1]);
            
            if (operationsIncludedArr[i] === '+') {
                result = num1 + num2;
            }
            
            if (operationsIncludedArr[i] === '-') {
                result = num1 - num2;
            }
            if (operationsIncludedArr[i] === '/') {
                result = num1 / num2;
            }
            if (operationsIncludedArr[i] === '*') {
                result = num1 * num2;
            }
        }
        
        total = result;
        console.log(total);
    }
    console.log(total);



    const correctForm = 
    return correctForm;
}