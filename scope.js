// let is used to define variables and const for constants
/*
*In newer versions of javascript, it is recommended that variable is declared with var 
only if you want to declare it globally otherwise don't.
*/
let a = "something";   // As it is declared outside if block, can be accessed inside 'if' block also as it behaves as global variable.
if( true ){
    let b = "local";  // It has scope only inside if block, otherwise gives error
    a = "changed";    //This change reflects everywhere 
    var c = "localVar";  //c is declared with var so can be accessed outside if block
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(c);
