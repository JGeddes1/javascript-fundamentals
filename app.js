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

//  const name = "john";
//  const lastName = "shaebeake"
//  let fullName = name + ' ' + lastName;


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
//const amount = slices % children;

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
// const num1 = 6;
// const num2 = '6';

// //const value = num1 == num2; // CHECLKS VALUES SAME
// //const value2 = num1 === num2; // CHECKS VALUE AND TYPE
// const value = num1 != num2; // CHECKS VALUE AND TYPE
// const value2 = num1 !== num2; // CHECKS VALUE AND TYPE

// console.log(value);
// console.log(value2);

// !LOGICAL OPERATORS
// (|| - OR) (&& - AND) , !

// const name = 'peter';
// const age = 24;
// if (name !== 'bob' && age === 24) {
//     console.log('hello there user');
// } else {
//     console.log('wrong values');
// }


// !SWITCH STATEMENTS
// dice values : 1-6
// another way of doign if else
//? <MAYBE COME BACK TOO
// const dice = 1;

// switch (dice) {
//     case 1:
//         console.log('you got one');
//         break;
//     case 2:
//         console.log('you got 2');
//         break;
//     case 3:
//         console.log('you got 3');
//         break;
//     default:
//         console.log('you did not roll the dice');
// }


// if (dice ===1) {
//     console.log('u got 1');
// }
// if (dice ===2) {
//     console.log('u got 2');
// }

// ! WHILE LOOPS
// TURN OFF AUTOSAVE

// let amount = 10;

// while (amount > 0) {
//   console.log('I have ' + amount + "dollars and oging to mall");
//   amount -- ;   
// }

// ! DO WHILE LOOPS
//code block first 
//condition second
//always runs once
// let money = 0;

// do {
//     console.log('yiou have ' + money + 'dollars');
//     money ++;
// }
// while(money < 10);


// ! FOR LOOPS

// let i;

// for(i = 0; i < 10; i++){
//     console.log('and number is : ' + i);
// }

// for (let number = 11; number >= 0; number --) {
//     console.log('and the number is : ' + number);
// } 


//WOOOO COMPLETE FIRST SECTION


//!String properties and methods

// let text = ' Peter Jordan';
// let result = text.length;
// console.log(result);

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(text.length-1));
// console.log(text.indexOf('p'));
// console.log(text);
// console.log(text.trim());
// console.log(text.trim().toLocaleLowerCase().startsWith('peter'));
// console.log(text.includes('eter'));
// console.log(text.slice(0,4));
// console.log(text.slice(-2));


// ! TEMPLATE LITERALS

//ES6 
// Backtick characters ``
//Interpolation $P{} - insert expression(value)


// const name = 'john';
// const age = 25;
// const sentence = "Hey its " + name + ' and he is ' + age + 'years old';


// const value = `Hey its ${name} and he is ${age} years old. And
// here is some simple math ${4 + 4}`;
// console.log(value);

// console.log(sentence);

// ! ARRAY PROPERTIES AND METHODS

// let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

// // length
// console.log(names.length);
// console.log(names[names.length - 1]);

// // concat
// const lastNames = ['pepper', 'onion', 'banana'];
// const allNames = names.concat(lastNames);
// console.log(allNames);
// // reverse 
// console.log(allNames.reverse());


// // unshift
// allNames.unshift('susy');
// allNames.unshift('anna');

// console.log(allNames);

// // shift
// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();

// console.log(allNames);

// // push

// allNames.push('susy');

// console.log(allNames);

// // allNames.pop();
// // // allNames.pop();
// // // allNames.pop();
// // allNames.pop();

// console.log(allNames);

// !splice

//grab items out of Array
//mutates original array

// const specificNames = allNames.splice(2,1);
// console.log(specificNames);
// console.log(allNames);



//! EXERCISE 

//Arrays and for loop combo

// const names = ['anna', 'susy', 'bob', 'john', 'susan'];
// const lastName = 'shakeandbake';
// let newArray = [];


// //for loop 
// for (let i = 0; i < names.length; i++) {
//    console.log(i);
//    console.log(names[i]); 
//    const fullName = `${names[i]} ${lastName}`;
//    newArray.push(fullName);

   
// }
// console.log(newArray);


//! Functions, return, if , arrays , for loops


// const gas  = [20,40,100];
// const food = [10,40,50];

// function calculateTotal(arr) {

//     let total  = 0;
//     for (let i = 0; i< arr.length; i++){
//     total += arr[i];

 
// } 
// return total;   
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200,400,500,1]);

// console.log({
//     gas: gasTotal,
//     food:foodTotal,
//     random:randomTotal,
// });


// !REFERENCE VS VALUE

// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`the first value is ${number}`);
// console.log(`the first value is ${number2}`);

// let person = {name:'bob'};
// let person2 = person;
// person2.name = `susy`;
// console.log(`the name of first person is ${person.name}`);
// console.log(`the name of SECOND person is ${person2.name}`);


//  ! NULL AND UNDEFINED

// undefined = javascirpt can not find value for this

//variuabvle without value
//missing functiona rguments
//missing ovject properties

//null - developoer sets the value

// !TRUTHY AND FALSY

//  "",'',``,0,-0,NaN,false,null,undefined

// const bool1 = true;
// const bool2 = 2>1;


// const text = 'john';

// if (text) {
//     console.log(`hey the value is truthy`);
    
// }else{
//     console.log(`hey the value is falsy`);
// }


// if (true) {
//     console.log(`hey it works`);
// }
// if (2>1) {
//     console.log(`hey also works`);
// }

// !TERNARY OPERATOR

