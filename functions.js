function greet(){
    console.log("Welcome to Javascript!");
}
greet();

let sayHello = function(name){
    console.log("Hello" + " "+ name+ "!!");
}
sayHello('John');

function getCar(carName) {
    console.log("I have a" + " " + carName);
  }
getCar('volvo');

function mult(p1, p2) {
    return p1 * p2;
  }

  // if funstion returns a value, you have to assign it to some variable and then print that variable of make the function call inside console.log
  let multres = mult(4,5); 
  console.log(multres);

  function fahToCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  console.log(fahToCelsius(100));
