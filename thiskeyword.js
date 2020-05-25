/**
 * This file have examples of using keyword this.
 * This will help in understanding how `this` keyword works
*/

/**
 * TOPIC - this with function invoked as function i.e. functionname()
 * If variable is declared using var in global scope
 * then can be accessed using this.<varName>
 * IMP NOTE: if 'use strict' is used then `this` inside function will be undefined.
 *
*/
//'use strict'; //If you enable this console.log in myFunc() will throw error 'Uncaught TypeError: Cannot read property 'myVar' of undefined'
this.myVar = 'Mobile'; // It's same as var myVar = 'Mobile';

console.log( this.myVar );

function myFun() {
  //'use strict'; //if you enable this console.log on next line will throw error 'Uncaught TypeError: Cannot read property 'myVar' of undefined'
  console.log( 'Sub Function -> ', this.myVar );
}

myFun();

/**
 * TOPIC: this with function invoked as method on object
 * In this approach, this inside method refers to own object.
 * However note that if you have regular function inside methos
 * then regular function refers global this. see the console.log output below
 */
num = 5 // this will be available in regular function present in calc() method
let newFun = {
  num : 0,
  add : function() {
    // logs the  [object Object] and valud of object's num i.e. 0
    console.log(this + ' ' + this.num + ' ');

    function innerfunc() {
        // logs the [object Window]
        console.log(this + ' ');
        return this.num;
    }
    return innerfunc();
  }
};

console.log(newFun.add()); // this returns 5 which is in global as innerFunc will refer global

/**
 * TOPIC: this with constructor invocation
 * this with constructor invocation behaves same as method invocation on object
 * this suggests that this is reference to current instance of object
 */
deptName = 'Core';
deptEmpCount = 2;
let Department = function(name, empCount){
  this.name = name;
  this.empCount = empCount;
  this.showDetails = function (){
    console.log(this.name + ' department has '+ empCount + ' Employees');
    function myDefaultDetails(){
      console.log(this.deptName + ' department has '+ deptEmpCount + ' Founder');
    }

    myDefaultDetails();// `this` in this function will refer to global `this` i.e. window object
  }
}

let accountDept = new Department('account', 5);

accountDept.showDetails();