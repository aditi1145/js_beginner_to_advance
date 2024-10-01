/* Program to check if candidate can vote or not.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let age=prompt("enter your age:")

function checkAge(age){
    if(age>=18 && age<=100){
        return "Eligible";
    }
    return "Not Eligible";
}

console.log(checkAge(age));

write a program to change color of background:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let mode=promt("enter 1 for dark mode,2 for light mode:");
let bg_color;
if(mode === 1){
    bg_color="black";
}
bg_color="white";



if  -- else if -- else
~~~~~~~~~~~~~~~~~~~~~~
let mark=prompt("enter your mark");
let grade="";
if(mark >=90 && mark<=100){
    grade="A";
}
else if(mark >=70 && mark<=89){
    grade="B";
}
else if(mark >=60 && mark<=69){
    grade="C";
}
else if(mark >=50 && mark<=59){
    grade="D";
}
else if(mark >=0 && mark<=49){
    grade="F";
}
console.log(grade);

ternary operator:
~~~~~~~~~~~~~~~~

let age=25;

age>=18?console.log("adult"):console.log("not adult");

switch statement:
~~~~~~~~~~~~~~~~~~

let expr = prompt("enter oranges or mangoes or papayas:")
switch(expr){
    case 'oranges':
        console.log("oranges are 5 pieces for 30 rupees");
        break;
    case 'mangoes':
    case 'papayas':
        console.log('mangoes and papayas are 5 pieces for 50 rupees');
        break;
    default:
        console.log(`sorry,we are out of ${expr}.`)
}
*/