'use strict';


var counter = 0;

var userName = prompt('enter your name?');
alert('Wellcome ' + userName);

var q1 = prompt('does yazan from jordan?');
var q2 = prompt('does yazan likes swimming?');
var q3 = prompt('does yazan still student?');
var q4 = prompt('Is yazan studying in cis department? ');
var q5 = prompt('does yazan live in syria? ');

alert(userName + ' you can see results in the console ');


q1 = q1.toLowerCase();
if (q1 == 'yes' || q1 == 'y') {
    console.log('question 1 is false');
}
else {
    counter++;
    console.log('question 1 is true ');
}

q2 = q2.toLowerCase();
if (q2 == 'yes' || q2 == 'y') {
    console.log('question 2 is false');
}
else {
    counter++;
    console.log('question 2 is true ');
}

q3 = q3.toLowerCase();
if (q3 == 'yes' || q3 == 'y') {
    console.log('question 3 is false');
}
else {
    counter++;
    console.log('question 3 is true ');
}

q4 = q4.toLowerCase();
if (q4 == 'yes' || q4 == 'y') {
    counter++;
    console.log('question 4 is true ');
}
else {
    console.log('question 4 is false ');
}


q5 = q5.toLowerCase();
if (q5 == 'yes' || q5 == 'y') {
    console.log('question 5 is false');
}
else {
    counter++;
    console.log('question 5 is true ');
}




var age = prompt('question six: guess my age ');

for (var i = 0; i < 6; i++) {
    if (age == 24) { counter++; break; }
    else if(age>24){ age = prompt('please try again because to hight '); }
    else if(age>24){ age = prompt('please try again because to low '); }    

}


var food=prompt('question seven:guess one of my favorite food  ')

var myFavoritFood=['mansaf','mlo5ea','Grilled chicken breasts']



var j=0
for (i=0;i<6;i++){
    while(j<=myFavoritFood.length){
        if (food==myFavoritFood[j]){
            counter++;
            
        }
        break;
    }
    break;
}
alert(`your score is ${counter} of 7 marks`);
console.log(`your score is ${counter} of 7 marks`);