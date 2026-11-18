// Q1
var name, age, group;

// Q2
//var ex1 = "3" + 2; //illegal - Cannot add two different datatypes
var num = 3 + 3; // legal

//var ex@2; //illegal - Var names can only have letters, digits, underscores and dollar signs.
var ex2; //legal

//var 3ex; //illegal - Var names may not begin with a number
var ex3; //legal

//var ex4 = EX1; //illegal - var names are case sensitive. ex1 and EX1 are 2 different variables.
var ex4 = num; //legal

//var import; //illegal - var names cannot be keywords.
var imp; //legal

//Q3
document.write('<h1>Rules for naming JS variables</h1>');
document.write('<br>');
document.write('<span>Variable names can only contain lettrs, numbers, # or _. For example: #my_1stVariable</span><br>');
document.write('<span>Variable must begin with a letter, $ or _. For example: #name, _name or name</span><br>');
document.write('<span>Variable names are case sensitive</span><br>');
document.write('<span>Variable names should not be JS keywords</span><br>');