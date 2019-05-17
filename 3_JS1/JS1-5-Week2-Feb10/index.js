// This is my first js code
let name= 'Hanim';
console.log (name);

//cannot be a reserved keyword

//should be meaningful

//cannot start with a number

//cannot contain a space or hyphen (-)

//are case-sensetive

let firstName='Hanim' ;
let lastName='Kapusuz';

const interestRate= 0.3;
// interestRate= 1;
console.log (interestRate);

// let name= 'Hanim'; //string literal
// let age=32; //number literal
let isApproved= true; //boolean literal
let middleName= undefined;
let selectColor= null;
let person = {
    name: 'Hanim',
    age: 33
};
//dot notation
person.name= 'zeynep';

//braket notation 
let selection= 'name';
person[selection]='Hanim'; 
//person['name']= 'Hanim';
console.log (person);

let selectedColors = ['red', 'blue'];
selectedColors[2]='1';
console.log (selectedColors);
console.log (selectedColors.length);

//performing a task
function greet (name, lastname) {
    console.log ('hello '+ name + ' ' + lastname);
}
greet ('John', 'Smith');
greet ('Hanim');

//calculating a value 
function square (number) {
    return number * number;
}
let number=square(2);
console.log(number);
console.log (square(4));

