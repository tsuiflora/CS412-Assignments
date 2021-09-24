//CS 412 A1 Problem Set 1
//Hoi Man (Flora) Tsui
//htsui@bu.edu

//Problem 3

const output = (str, func) =>{
    return func(str);
}
const lambda = str =>{
    str = str.toLowerCase();
    return str.split(/(?=c)/g);
}

const lambda2 = str => {
    let count = 0;
    for (let i = 0; i< str.length-1 ; i++){
        if (str[i] == 'a'){
            count++;
        }
    }
    let replaced = str.replaceAll('a','A');

    return {
        "originalString": str,
        "modifiedString": str.replaceAll("a","A"),
        "numberReplaced": count,
        "length": str.length
}
}
const exp1 = output("supercalifragilisticexpialidocious",lambda); //expression 1
const exp2 = output("supercalifragilisticexpialidocious", lambda2) //expression 2

console.log(exp1) //prints exp1
console.log(exp2) //prints exp2
