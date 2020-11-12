//document.write('hello world);
//alert('hello world');
//console.log('hello world);


// ! Variables

// let name = "John";
 //let address,zip ,state;
// console.log(address);
// console.log(name);

// LET VS CONST VS VAR

// var value = "some value";

// let name = "john";

// const lastName = "jordan"; //cant re assign


// !String Concatenation - combine string values

 const name = "john";
 const lastName = "shaebeake"
 let fullName = name + ' ' + lastName;


// console.log("hello there your full name is : " + name + " " + lastName );
// console.log();

// ! basic numbers
// const number = 34;
// const number2 = 2.456;
// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const divide = number / number2;
// 

//! additional features
// let number = 40;
// number += 5; //add 5
// number += 5; //add 5
// number += 5; //add 5
// number += 5; //add 5
// number += 5; //add 5

// ? Modulus (%) operator returns remainder aftrer integer division
const slices = 10;
const children = 3;
const amount = slices % children;

// ?BIDMAS basiclayy

//!Implicit typer conversion



// const value = name - lastName;  //?cant do string
// console.log(value);

let number3 = 10; // ?string converted if its number thanks to javascript
let number4 = 23;

// 100 line code
number4 = 'pants';

const result2 = number3 + number4;
console.log(result2);

/* add wont work tho */


// ! Data TYPES

// Primitive - String, Number, Boolean , Null,  Undefined, Symbol
// Object - Arrays, Functions, Objects


// ! ARRAYS 

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';
const friend5 = 'anna';

// ? Create an array
const friends = ['john','peter', 'bob', 'susie', 45, null];


//  ? Working arrays
// let bestFriend = friends [2];
// friends [4] = 'anna';
// console.log(friends);
// console.log(bestFriend);


//  ! FUNCTIONS

// Allow to write code and use code through application without duplciation

function hello(){
    // logic
    console.log('Hello there Bob');
    console.log('Hello there John');
    console.log('Hello there Susy');
}

//hello();

// code here
//hello();

// code here

// console.log('Hello there Bob');
// console.log('Hello there John');
// console.log('Hello there Susy'); SAVES WRITING THIS OVER
// code here

// ! PARAMS AND ARGUMENTS

// function greet(name) {
//     console.log('Hello there ' + name);

// }

// // greet bob
// greet("Bob");
// // greet anna 
// greet("Anna");
// // greet susy 
// greet("Susy");

//  ! FUNCTION RETURN - default without get undefined otherwise returns to assigned variable

// 1inch = 2.54 cm

// const wallHeigh = 80;

// const width = calculate(100);
// const height= calculate(wallHeigh);
// const dimensions = [width, height];
// console.log(dimensions);

// function calculate (value) {
//  const newValue = value * 2.54;
//  return newValue;
//  console.log('the value in cm is : ' + (value *2.54) + ' cm');

// }


// !EXPRESSSIONS NOT THE VALUE OF THE FUNCTION BUT THE ACTUAL FUNCTION OF VARIABLE
// function addValues(num1, num2){
//     return num1 +num2;
// }

// // ? another way to define a function
// const firstValue = addValues(3,4);
// const secondValue = addValues(12,34);

// //function expression
// const add = function (num1,num2){
//     return num1 + num2;
// };

// const thirdValue = add(5,6);

// const values = [firstValue, secondValue, thirdValue];
// console.log(values);


// ! OBJECTS
// key/value methods
//dot notation

// const person = {
//     name: 'john',
//     lastName: 'peters',
//     age: 40,
//     education: false,
//     married: true,
//     siblings:['anna', 'susan', 'peter'],
//     greeting: function (){ can remove the function with es6
//     console.log('hello my name is JOHN');
//     },
// };

// const age = person.age;
// console.log(age);

// person.name = 'bob';

// console.log(person.name);
// person.greeting();

// !CONDITIONAL STATEMENTS

//if(//condition ) {
//code block
//}
// const value = 2 > 1;
// const value2 = 1 > 2 ;

// if (value2) {
//     console.log('hello world');
// } else {
//     console.log('hello people');
// }

 //! CONTINUED 

// const num1 = 6;
// const num2 = 6;
// const result = num1 >= num2;

// const value = false;

// if(!value) {
// console.log('value is true');
// }



// if (num1 > num2) {
//     console.log('first num bigger second');
// }
// else if (result) {
//  console.log('first number is equal to second');   
// }
// else {
//     console.log('second num is bigger than first');
// }

// !EQUALITY

