"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firtstr = (0, readline_sync_1.question)('Enter first number:\n'); //becuse question method always return a string.
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondstr = (0, readline_sync_1.question)('Enter second number:\n');
    //const op = isOperator(operator)   check if operator is valid
    //console.log(op);                  
    //const firstnum = isNumber(firtstr) check if first number is valid
    //console.log(firstnum);
    //const secondnum =isNumber(secondstr) check if first number is valid
    //console.log(secondnum);
    //to check evertything is valid >>>>>>>
    var validInput = isNumber(firtstr) && isOperator(operator) && isNumber(secondstr);
    if (validInput) {
        console.log('is valid.');
        var firstnum = parseInt(firtstr);
        var secondnum = parseInt(secondstr);
        var result = calculate(firstnum, operator, secondnum);
        console.log(result);
    }
    else {
        console.log('\n invalid input\n'); //we say it's not valid and start over(re-run main())
        main();
    }
}
function calculate(firstNum, operator, secondnum) {
    switch (operator) {
        case '+':
            return firstNum + secondnum;
        case '-':
            return firstNum - secondnum;
        case '*':
            return firstNum * secondnum;
        case '/':
            return firstNum / secondnum;
    }
}
function isOperator(operator) {
    switch (operator) //check if plus/minus/divide/ multiply using switch statement
     {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str); //easier to apply and check, ex: 33 or NaN, //parseInt parses a string argument and returns an integer.
    var isNum = !isNaN(maybeNum); // to check if something is not a number in javascript you use isNaN() function
    return isNum;
}
main();
