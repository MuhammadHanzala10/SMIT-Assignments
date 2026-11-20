//Q1
var num1 = +prompt("Enter 1st number:")
var num2 = +prompt("Enter 2nd number:")

var sum = num1 + num2;
document.write("Sum of " + num1 + ' and ' + num2 + ' is ' + sum);

//Q2
var subtraction = num1 - num2;
document.write("<br>Subtracting " + num2 + ' from ' + num1 + ' gives ' + subtraction);

var multiply = num1 * num2;
document.write("<br>Multiplication of " + num1 + ' and ' + num2 + ' is ' + multiply);

var division = num1 / num2;
document.write("<br>Division of " + num1 + ' and ' + num2 + ' is ' + division);

var modulus = num1 % num2;
document.write("<br>With the remainder " + modulus);

//Q3
var num;
console.log("value after variable declaration is: " + num);
num = 3;
console.log("Initial value: " + num);
num++;
console.log("Value after increment is: " + num);
num = num + 7
console.log("Value after addition is: " + num);
num--;
console.log("Value after decrement: " + num);
modulus = num % 3;
console.log("The remainder is: 0");

//Q4
var cost = 600;
console.log("Total cost to buy 5 tickets to a movie is " + cost);

//Q5
console.log('Table of ' + num1);
console.log(num1 + 'x' + 1 + '=' + num1*1);
console.log(num1 + 'x' + 2 + '=' + num1*2);
console.log(num1 + 'x' + 3 + '=' + num1*3);
console.log(num1 + 'x' + 4 + '=' + num1*4);
console.log(num1 + 'x' + 5 + '=' + num1*5);
console.log(num1 + 'x' + 6 + '=' + num1*6);
console.log(num1 + 'x' + 7 + '=' + num1*7);
console.log(num1 + 'x' + 8 + '=' + num1*8);
console.log(num1 + 'x' + 9 + '=' + num1*9);
console.log(num1 + 'x' + 10 + '=' + num1*10);

//Q6
var celcius = 54;
console.log(celcius + 'C is ' + (celcius*9/5)+32 + 'F');
var fahrenheit = 98;
console.log(fahrenheit + 'F is ' + ((fahrenheit - 32) * 5 / 9) + 'C');

//Q7
var price1 = 650;
var price2 = 100;
var quant1 = 3;
var quant2 = 7;
const shipCharge = 100;
let total = (price1*quant1) + (price2*quant2) + shipCharge;

document.write("<h1>Shopping Cart</h1><br><br>")
document.write("Price of item 1 is " + price1);
document.write("<br>Quantity of item 1 is " + quant1);
document.write("<br>Price of item 2 is " + price2);
document.write("<br>Quantity of item 2 is " + quant2);
document.write("<br>Total cost of your order is " + total);

//Q8
var totMarks = 980;
var obtMarks = 804;
var percentage = (obtMarks/totMarks)*100;

document.write("<br><br><h1>Marks Sheet</h1>");
document.write("<br><br>Total marks: " + totMarks);
document.write("<br>Marks obtained: " + obtMarks);
document.write("<br>Percentage: " + percentage);