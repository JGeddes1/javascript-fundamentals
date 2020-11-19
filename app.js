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
// // unary operator - typeof
// let text = 'some text';
// console.log(typeof text);
// // binary operator - assignment
// let number = 3;
// let number2 = 2+5;
// // ternary operator
// // condition ? (runs if true) : (runs if false)

// const value = 1 < 0;

// value ? console.log('value is true') : console.log('value is false');

// // if (value) {
// //     console.log(`value is true`);
// // } else {
// //     console.log(`value is false`);
// // }


// !global scope vs local scope
// any variable outside code block {} is sadi to be in global scope
// accessed anywhere in program
// gotchas: name collisions, modify by mistake

// let name = 'bobo';
// name = 'peter';

// function calculate(){
//     // some other code....
//     console.log(name);
//     name = 'orange';

//     function inner(){
//         name = 'inner name value';
//         console.log(`this is from inner function ${name}`);
//     }
//     inner();
// }
// calculate();

// if (true) {
//     // some other code....
//     console.log(name);
//     name = 'pants';
// }
// console.log(`my name is ${name} and im awesome`);

// !LOCAL SCOPE
// can not be access from outside code blaock
// // if- not var
// let name = 'bobo';


// function calculate(){
//     // some other code....
//     const name = 'john';
//     const age = 25;
//     //code goes here
//  becomesGlobal = 'global variable';
// }

//  calculate();
//  console.log(becomesGlobal);
// if (true) {
//     const name = 'john';
// }
// console.log(`my name is ${name} and im awesome`);

// !Variable lookup
// {} code block

// const globalNumber = 5; //tehn global

// function add(num1, num2){
//     const globalNumber = 20; //will use local first
//     const result = num1 + num2 + globalNumber;
//     function multiply(){
//         const globalNumber = 100; // works same in this but then moves up to the other function it is enclosed in
//         const multiplyResult = result * globalNumber;
//         console.log(multiplyResult);
//     }

    
//     multiply();
//     return result;
// }


// console.log(add(3,4));


//  !Callback functions, Higher order functions, functions as first class objkects/ciotizens

// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback function - passed to a another function as an an argument and exectued inside taht function


// function greetMorning(name) {
//     const myName = 'Jamie';
//     console.log(`Good morning ${name}, my name is ${myName} `);
// }
// function greetAfternoon(name) {
//     const myName = 'Jamie';
//     console.log(`Good afternoon ${name}, my name is ${myName} `);
// }

// function morning(name){

//     return `good morning ${name.toUpperCase()}`;
// }

// function greet(name, cb) {
    
//     const myName = 'Jamie';
//     console.log(`${cb(name)}, my name is ${myName} `);
// }



// greet('bobo', morning);

// !ARRAY ITERATORS
// Powerful array methods
// forEach, map, find, filter, reduce
// iterate over array - no loop required
// accepts CALLBACK function as argument
const numbers = [0,1,2,3,4];

// show all numbers

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }

// ?forEach
// dopes not return new array

// const people = [
//     {name:'bob', age:20, position:'developer'},
//     {name:'peter', age:25, position:'designer'},
//     {name:'susy', age:30, position:'THEBOSS'},
// ];

// function showPerson(person){
// console.log(person.position.toUpperCase());
// }


// // people.forEach(showPerson);
 
// people.forEach(function(item){
//     console.log(item.position.toUpperCase());
// }
// );

// ?MAP
// returns a new array
// does not change size of original array
// uses values from origianl array when making new one

// const people = [
//     {name:'bob', age:20, position:'developer'},
//     {name:'peter', age:25, position:'designer'},
//     {name:'susy', age:30, position:'THEBOSS'},
// ];

// const ages = people.map(function(person){
    
//     return person.age + 20;
// });
// const newPeople = people.map(function(person){
//     return {
//         firstName: person.name.toUpperCase(),
//         oldAge: person.age + 20,
//     }
// });


// const names = people.map(function(person){
//     return `<h1>${person.name}</h1>`;
// })

// document.body.innerHTML = names.join('');


// console.log(names);


// ? Filter
// does returna  new array
//  can minpulate the size of a new array
// returns based on condition



// const people = [
//     {name:'bob', age:20, position:'developer'},
//     {name:'peter', age:25, position:'designer'},
//     {name:'susy', age:30, position:'THEBOSS'},
// ];

// const youngPeople = people.filter(function (person){
//     return person.age <= 25;
// });

// console.log(youngPeople);


// ?find

// returns an object
// returns first match, if no match undefined
// great for getting unique values

// const people = [
//     {name:'bob', age:20, position:'developer', id: 1},
//     {name:'peter', age:25, position:'designer', id: 2},
//     {name:'susy', age:30, position:'THEBOSS', id: 3},
// ];


// const person = people.find(function(person){
//     return person.id ===3;
// });

// console.log(person);


// ? Reduce
// iterates, callback function
// reduces to a single value - number, aray, object
//  1 paramter ('acc') - total of all calculation
// 2 paramter ('curr') - current iteration/value


// const people = [
//     {name:'bob', age:20, position:'developer', id: 1, salary:200},
//     {name:'peter', age:25, position:'designer', id: 2, salary:300},
//     {name:'susy', age:30, position:'THEBOSS', id: 3, salary:500},
//     {name:'anna', age:30, position:'THEBOSS', id: 4, salary:500},
// ];


// const total = people.reduce(function(acc,currItem) {
//     console.log(`total ${acc}`);
//     console.log(`current money ${currItem.salary}`);
//     acc += currItem.salary;


//     return acc;
// }, 0);

// console.log(total);

// !MATH 
// standard built in objects - always available
// nifty global objects to use without extra setup

// const number = 4.56789;
// const result = Math.floor(number) // rounds number down

// const number = 4.1222;
// const result = Math.ceil(number) // rounds number up

// const number = 25;
// const result = Math.sqrt(number) // sqaure root

// const result = Math.PI // PI
// const result = Math.min(4,6,5,7,9) ;// min number
// const result = Math.max(4,6,5,7,9) ;// max number

// const result = Math.floor( Math.random()*10 + 1);

// console.log(result);


// ! date

// const months = [
// 'January',
// 'Feb',
// 'March',
// 'April',
// 'June',
// 'July',
// 'August',
// 'Sept',
// 'Oct',
// 'Novemb',
// 'December',
// ];

// const days = [
// 'Sunday',
// 'Monday',
// 'Tuesday',
// 'Wednesday',
// 'Thursday',
// 'Friday',
// 'Saturday'
// ];
// const date = new Date('1/12/2004')
// const date = new Date();
// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());

// const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

// document.body.innerHTML = sentence;

// console.log(sentence);



// ! DOM
// ? select elements
// traverse DOM
// insert/remove elements
// apply styling
// add/remove css classes
// .....

// Document object model

// similar to css
// select the element or gourp of elements the you want ot affect
// decide the effect we want to applyt o the selection
// Many different ways

//  document.body.style.backgroundColor = 'blue';
//  document.body.style.color = 'yellow';
//  document.getElementById('btn').style.color = 'red';

// // assign to a variable

// const element = document.getElementById('element');
// // do something

// document.querySelector('element'); //Do someting

// // window object
// // console.log(window);

// // returns a node object or a node list, which is an array like object

// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn);
// console.log(name);
// console.log(css);


// ! WINDOW OBJECT = browser api
//the tab you are on is the window
// !GetElementById

// const h1 = document.getElementById('title');
// h1.style.color = 'red';

// const btn = document.getElementById('btn');

// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';


// !GET Elements By Tag Name
// getElementsByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods

// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red';
// // console.log(headings.length);

// const items = document.getElementsByTagName('li');

// // items.forEach(function(item){
// //     console.log(item);
// // })
// items[2].style.color = 'orange';
// const betterItems = [...items];

// betterItems.forEach(function(item){
// // console.log(item);
// });

// console.log(items);
// console.log(betterItems);

// ! getElementsByClassName('classname')'
// node-list = array-like object
// index, length property but not array methods

// const listItems = document.getElementsByClassName('special');
// // console.log(listItems);
// listItems[1].style.color = 'blue';


// ! querySelector('any css') - slects single element
// !querySelectorAll('any css') - selects all

// can use forEach method


// const  result = document.querySelector('#result');
// result.style.backgroundColor = 'blue';

// const item = document.querySelector('.special');
// // console.log(item);

// const lastItem = document.querySelector('li:last-child');
// // console.log(lastItem);

// const list = document.querySelectorAll('.special');
// console.log(list);

// list.forEach(function(item){
//     console.log(item);
//     item.style.color = 'yellow';
// });


// ! Naviagte the DOM - Children
// ?select the element or goupr of elements the we WebAuthentication
// decide the ffect we want to apply to the section

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

// const result = document.querySelector('#result');
// const allChildren = result.childNodes;
// // console.log(allChildren);

// const childrens = result.children
// console.log(childrens);
// console.log(result.firstChild);
// console.log(result.lastChild);


// !PARENT ELEMENT

// const heading = document.querySelector('h2');
// const parent = heading.parentElement;
// parent.style.color = 'red';


// !previousSibling
// nextSibling
// return whitespace


//!nodeValue
// !textContent

// const item = document.getElementById('special');
// const value = item.firstChild.nodeValue;


// const easyValue = item.textContent
// console.log(easyValue);



// !~getArttibute();
// !setAttribute();


// const first = document.querySelector('.first');
// const idValue = first.getAttribute('id');
// // console.log(idValue);


// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);

// const links = document.querySelectorAll('.first');
// console.log(links);

// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'i also have a class of first';
// console.log(last);


//! className
//! classList

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// // const classValue = first.className;

// // console.log(classValue);


// second.className = 'colors';




// // third.classList.add('colors');
// // third.classList.add('text');
// third.classList.add('text', 'colors');
// third.classList.remove('text');

// let result = third.classList.contains('colors');
// if (result) {
//     console.log('hello world');
// }else{
//     console.log('doesnt have class');
// }

// const classValue = third.classList;
// console.log(classValue);

//! CreateElement
// createElement('element')
// createTextNode('text content')
// ALWAYS DO THE TWO ABOVE THEN CHOSE FROM BLUE ONES
// ?element.appendChild(childElement)


//? insertBefore('element', 'location');

// const result = document.querySelector('#result');
// const first = document.querySelector('.red');
// // create empty element
// const bodyDiv = document.createElement('div');
// // create textNode
// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);


// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.insertBefore(heading, first)


// console.log(result.children);

// ? replaceChild('new', 'old');

// const result = document.querySelector('#result');
// const first = document.querySelector('.red');
// // create empty element
// const bodyDiv = document.createElement('div');
// // create textNode
// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);


// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.insertBefore(heading, first)

// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode(`I am small heading text`);
// smallHeading.classList.add('red');
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading,bodyDiv);

// console.log(result.children);

// !prepend
// !innerText

// const heading = document.createElement('h2');
// heading.innerText = `i am a dynamic heading`;
// document.body.prepend(heading);



// !remove
// removeChild

// const result = document.querySelector('#result');
// // result.remove();
// const heading = result.querySelector('h1');
// result.removeChild(heading);


//! innerHTML
// textContent

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');
// console.log(div.textContent);
// console.log(list.innerHTML);

// const ul = document.createElement('ul');
// ul.innerHTML = `  <li class="item">list item</li>
// <li>list item</li>`;

// document.body.appendChild(ul);



// !CSS

// const random = document.querySelector('.random');
// // random.style.backgroundColor = 'blue';
// // random.style.color = 'white';
// // random.style.fontSize = '3rem';
// // random.style.textTransform = 'capitalize';

// random.classList.add('title');



// !events overview
// select element
// addEventListener()
// what event, what to do


// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// btn.addEventListener('click', function(){
//     heading.classList.add('red');
// });


// !function reference


// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// function changeColors(){
   
//     let hasClass = heading.classList.contains('red');

//     if (hasClass) {
//         heading.classList.remove('red');
//     } else {
//         heading.classList.add('red');
//     }

// }
// btn.addEventListener('click', changeColors);



//!Mouse Events

