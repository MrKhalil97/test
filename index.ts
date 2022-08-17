import { question } from 'readline-sync';

type Operator = '+'| '-' | '*' | '/';   // creating specific type for operators to limit options

function main(): void
{
    const firtstr: string = question('Enter first number:\n')    //becuse question method always return a string.
    const operator: string =question('Enter operator:\n')
    const secondstr: string = question('Enter second number:\n')

    //const op = isOperator(operator)   check if operator is valid
    //console.log(op);                  
    //const firstnum = isNumber(firtstr) check if first number is valid
    //console.log(firstnum);
    //const secondnum =isNumber(secondstr) check if first number is valid
    //console.log(secondnum);

    //to check evertything is valid >>>>>>>
    const validInput: boolean = isNumber(firtstr) && isOperator(operator) && isNumber(secondstr);
    
    if (validInput) 
    {
        console.log('is valid.')
        const firstnum: number = parseInt(firtstr)
        const secondnum: number = parseInt(secondstr)
        const result:number = calculate(firstnum, operator as Operator, secondnum)  
        console.log(result);
    }
    else 
    {
        console.log('\n invalid input\n'); //we say it's not valid and start over(re-run main())
        main()
    }
}

function calculate(firstNum: number,operator:Operator, secondnum:number)  //function to calculate input based on operators.
{
    switch(operator)
    {
        case'+':
        return firstNum+secondnum;
        case'-':
        return firstNum-secondnum;
        case'*':
        return firstNum*secondnum;
        case'/':
        return firstNum/secondnum;
    }
}

function isOperator(operator: string): boolean
{
    switch(operator)  //check if plus/minus/divide/ multiply using switch statement
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

function isNumber(str: string): boolean    //function to check this is a number
{
    const maybeNum = parseInt(str);      //easier to apply and check, ex: 33 or NaN, //parseInt parses a string argument and returns an integer.
    const isNum: boolean = !isNaN(maybeNum); // to check if something is not a number in javascript you use isNaN() function
    return isNum; 
}

main()
