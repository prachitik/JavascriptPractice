/* call : To invoke a function directly by passing the reference.
**
*/

/*Apply : exactly same as call method with difference in the way of passing its arguments.
** The second argument should be array list of parameters which needs to be passed to the method.
*/

/*Bind : Does not directly invoke the method,
* but gives the copy of exact same method which can be invoked later
**
*/

let name = {
    firstname : "Prachiti",
    lastname : "Kulkarni",

    // printFullName : function(hometown){
    //     console.log(this.firstname+" "+ this.lastname +" from "+ hometown);
    // }
}

let printFullName = function (hometown, state) {
    console.log(this.firstname+" "+ this.lastname + " from " + hometown + ", "+state);
}

printFullName.call(name, "Pune","Maharashtra");

let name2 = {
    firstname : "Lata",
    lastname : "Mangeshkar" 
}

// If we want to use printFullName method of name, for name2 without defining it for name2: 
//we can do it by borrowing it from name object

//name.printFullName.call(name2)   //to pass name2 as a reference to method.

printFullName.call(name2, "Mumbai","Maharashtra");
 
//The only difference between call and apply method is the way the arguments are passed

printFullName.apply(name2, ["Mumbai","Maharashtra"]);

//Instead of calling a method directly, bind method binds the method with a object
// and returns the copy of method which can be used later. 

let printMyName = printFullName.bind(name2, "Mumbai","Maharashtra");
console.log(printMyName);
printMyName();