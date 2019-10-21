//variables in jvascript 
var carname;      //variable declaration, if not assigned any value, it has value of undefined
console.log(carname);
carname = "volvo";
console.log(carname);
var carname;      //variable doesn't loose its value if redeclare
console.log("after redeclaring variable carname: "+carname);
var x = 5;   // assignment operator, assigns value to variable
var y = 6;
var z = x+y;  // addition operator
console.log(z);

/* Likewise javascript has aithmetic operators as:
'-' subtraction , * multiplication, ** exponentiation, / division,
%	Modulus (Division Remainder),   ++	Increment
--	Decrement */

var fname = 'John';
var lname = 'Mathew';
var fullname = fname + ' ' +lname;
console.log("string concatenation: "+ fullname);

var a = 2 + 'abc';  //here the number will be treated as string and concatenated
console.log(a);

var b ="5" + 2 + 2; //if a number is put in quotes, rest is treated as string and concatenated

// javascript variables can hold many data types. 
//Same variable can hold different data types but the variable value will be overidden by most recent one.
var temp = 'Prachiti';  // string value
var temp = 10;
console.log("dynamic variable: "+ temp);

// Javascript types
var c;
console.log(typeof(c));

c ="Prachiti";
console.log(typeof(c));

c = 100;
console.log(typeof(c));

c = true;
console.log(typeof(c));

c = null;
console.log(typeof(c));

//difference between undefined and null
console.log("difference between undefined and null");
console.log(typeof undefined);   //undefined
console.log(typeof null);        //object
console.log(null === undefined);  // false
console.log(null == undefined);    //true

//Complex data types
console.log(typeof {name:'John', age:34}); // Returns "object"
console.log(typeof [1,2,3,4]);             // Returns "object" (not "array") because in JS arrays are objects.
console.log(typeof function myFunc(){})  // Returns "function"
