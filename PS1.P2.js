//CS 412 A1 Problem Set 1
//Hoi Man (Flora) Tsui
//htsui@bu.edu

//Problem 2

const solve = (left, right, operator) => {
    if (operator == '+') {
        return left + right;}
    else if (operator == "*"){
        return left * right}
    else if (operator == "-"){
        return left - right}
    else if (operator == "^"){
        return left ** right}
    else if (operator == "/"){
        return left / right}
    }

const solveit = input => {
    let left = parseInt(input[0]);
    let operator = input[1];
    let right = parseInt(input[2]);

    return solve(left, right, operator)
}
console.log(solveit('6+3')) //prints 9
console.log(solveit('2*5')) //prints 10
console.log(solveit('7-2')) //prints 5
console.log(solveit('5^2')) //prints 25
console.log(solveit('6/3')) //prints 2
console.log(solveit('9/2')) //prints 4.5
