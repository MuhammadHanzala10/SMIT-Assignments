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

//Q5
var num = +prompt("Enter a number");

if (num === 0)
{
    num = 5;
}

