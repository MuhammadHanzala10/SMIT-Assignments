// Q1
var a = 10;

console.log("The value of a is: " + a);
console.log("-----------------------");
console.log("");
console.log("The value of ++a is: " + (++a));
console.log("The new value of a is: " + a);
console.log("");
console.log("The value of a++ is: " + (a++));
console.log("The new value of a is: " + a);
console.log("");
console.log("The value of --a is: " + (--a));
console.log("The new value of a is: " + a);
console.log("");
console.log("The value of a-- is: " + (a--));
console.log("The new value of a is: " + a);

// Q2
a = 2;
let b = 1;
let calculation = --a - --b + ++b + b--;

// At --a the value of a gets a decrement and then 1 is returned.
// At --a - --b the value of b gets a decrement and 0 is returned for b. Making the calculation 1 - 0.
// At --a - --b + ++b the value of b gets an increment and 1 is returned. Making the calculation 1 - 0 + 1.
// At --a - --b + ++b + b-- the value of b(1) is returned and then b gets a decrement. Making the calculation 1 - 0 + 1 + 1.

console.log("a is: " + a);
console.log("b is: " + b);
console.log("The result is: " + calculation);

// Q3
let name = prompt("Enter your name");
console.log("Welcome, " + name);

// Q4
// MISSING QUESTION

// Q5
var num = +prompt("Enter a number");

if (num === 0)
{
    num = 5;
}

console.log(' ');
console.log(num + ' x ' + 1 + ' = ' + num * 1);
console.log(num + ' x ' + 2 + ' = ' + num * 2);
console.log(num + ' x ' + 3 + ' = ' + num * 3);
console.log(num + ' x ' + 4 + ' = ' + num * 4);
console.log(num + ' x ' + 5 + ' = ' + num * 5);
console.log(num + ' x ' + 6 + ' = ' + num * 6);
console.log(num + ' x ' + 7 + ' = ' + num * 7);
console.log(num + ' x ' + 8 + ' = ' + num * 8);
console.log(num + ' x ' + 9 + ' = ' + num * 9);
console.log(num + ' x ' + 10 + ' = ' + num * 10);

// Q6
var subject1 = prompt('Enter first subject');
var subject2 = prompt('Enter second subject');
var subject3 = prompt('Enter third subject');
var sub1Mark = +prompt('Enter marks obtained for first subject');
var sub2Mark = +prompt('Enter marks obtained for second subject');
var sub3Mark = +prompt('Enter marks obtained for third subject');
const totMark = 100;

