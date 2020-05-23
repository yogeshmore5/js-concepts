/**
 * Hoisting is applicable to variables declared using keyword var and function declared as function.
 * Javascript do not hoist let, constant and class
 * Also note, if you declare function as expression OR class as variable
 * with Class then it will not throw <variable> not defined error
 * but will throw error related to function and class constructor
 * based on how you are calling function and class
 */

//Let see example below.

console.log(myName); // This will log 'undefined'

var myName = 'Alien';

console.log(myName); // This will log 'Alien'

//With Block scope

console.log(myAnotherName); // This will log 'undefined'

{
  var myAnotherName = 'Spider';
}

console.log(myAnotherName); // This will log 'Spider'

//inside functions

function sayHello(toWhom) {
  console.log(greeting); // This will log 'undefined'
  var greeting = 'Hello';
  console.log(greeting, toWhom);
}

sayHello('Yogi'); // This will log 'Hello Yogi'

//console.log(greeting); // Throws an error greeting is not defined

function checkLetHoisting(value){
  var myString = 'intial value';
  if(value){
    /**
     * In this block let keyword is used for myString
     * So it will not consider the variable declared in outer block
     * Inside this block it will use it's own scope
     * For let variables it just register the varialbe name but do not assigned any value like undefined
     *
    */
    // Following line will throw ReferenceError: myString is not defined
    //console.log(myString);
    let myString = 'updated value = '+ value;
    // If we remove above line then not throw an ReferenceError as it will take variable myString declared in first line of function
    // End of temporal dead zone for myString
    console.log(myString);
    return;
  }
  console.log(myString);
  return;
}

checkLetHoisting('it works');