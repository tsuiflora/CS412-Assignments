//CS 412 A1 Problem Set 1
//Hoi Man (Flora) Tsui
//htsui@bu.edu

//Problem 1
const rev_alph = word => {

    let nopunct = word.replace(/[0123456789.,\/#!$%\^&\*;:{}=\-_`~()?]/g,""); //removes all punctuation and numbers
    let word2 = nopunct.toLowerCase(); //makes all letters lowercase
    let array = word2.split('');    //puts the word into an array
    return array.sort().reverse().join('')  //sorts then reverse and then joins the array to make it back to a string
}
//test cases
console.log(rev_alph("meowmeow"))   //prints "wwoommee"
console.log(rev_alph("meoWmEow"))   //prints "wwoommee"
console.log(rev_alph("m!eo4wmey6o7w??"))    //prints "ywwoommee"
console.log(rev_alph("exioi"))  //prints "xoiie"
console.log(rev_alph("supercalifragilisticexpialidocious")) //prints "xuutsssrrppoollliiiiiiigfeedcccaaa"