'use strict'

var userName = prompt('enter your name?');
alert('Wellcome ' + userName);

var q1 = prompt('does yazan from jordan?');
var q2 = prompt('does yazan likes swimming?');
var q3 = prompt('does yazan still student?');
var q4 = prompt('Is yazan studying in cis department? ');
var q5 = prompt('does yazan live in syria? ');



q1 = q1.toLowerCase();
if (q1 == 'true' || q1 == 't') {
    console.log('question 1 is false');
}
else {
    console.log('question 1 is true ');
}

q2 = q2.toLowerCase();
if (q2 == 'true' || q2 == 't') {
    console.log('question 2 is false');
}
else {
    console.log('question 2 is true ');
}

q3 = q3.toLowerCase();
if (q3 == 'true' || q3 == 't') {
    console.log('question 3 is false');
}
else {
    console.log('question 3 is true ');
}

q4 = q4.toLowerCase();
if (q4 == 'true' || q4 == 't') {
    console.log('question 4 is true');
}
else {
    console.log('question 4 is false ');
}


q5 = q5.toLowerCase();
if (q5 == 'true' || q5 == 't') {
    console.log('question 5 is false');
}
else {
    console.log('question 5 is true ');
}


alert('you can see results in the console ');