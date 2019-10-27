//data-type Array
const avengers = ["Ironman", "Captain America","Hulk","Spiderman"];

console.log(avengers);
console.log(avengers[0]); //aray index always start with 0

var cars = ['volvo','BMW','Honda'];
console.log(cars.length); //returns length of array

var myArray = [1,2,3,4];
console.log(myArray[0]);
console.log(myArray[3]);
console.log(myArray[5]); // this index is not present so returns undefined
console.log(myArray);
console.log(myArray[myArray.length-1]);
console.log(`We have ${myArray.length} number of cars`);

myArray[0] = 0;
console.log(myArray);
var arLen = myArray.length, i;
// Iterate over array
for(i=0;i<arLen;i++){
    console.log(myArray[i]);
}

//Add elemnets to existing array
myArray.push(5);
myArray.push(6);
console.log(myArray.length);
myArray[myArray.length] = 7;
console.log(myArray);

//Remove element from array
myArray.pop(myArray.length-1);
console.log(myArray);

//arrays are considered as javascript objects
// typeof opearatoron arrays returns object

console.log(typeof(myArray));

//To fix this problem, we can use
//solution 1:
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(myArray));
//solution 2:
console.log(myArray instanceof Array);


/* Few of the methods that can be used on array
*
*/
//converts array to a string of values separated by commas
console.log("toString: "+myArray.toString); 

//behaves like toString but separated can be specified
console.log(myArray.join(" * "));

//removes first element from array
console.log(myArray);
myArray.shift();
console.log(myArray);
var a = myArray.shift();
console.log(a);

//adds a new element to array and unshift older elements
myArray.unshift(10);
console.log(myArray);

//deletes element from array
delete myArray[0]; // first element to undefined 
console.log(myArray);
console.log(myArray[0]);
