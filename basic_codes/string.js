/*
let name="Aditi Das"
let roll_no=350;
let age=23;
let course="btech";
let sem="7th";

console.log("My name is",name,".My roll_num is",roll_no,".My age is",age,".I study",course,".I am in",sem,"Sem.");
// String Interpolation using template literals inside special strings:`string ${expressions}`
console.log(`My name is ${name}.My roll_num is ${roll_no}.My age is ${age}.I study ${course}.I am in ${sem} Sem.`);
// escacpe characters \n-next line \t-tab space

String methods:(return new string  doesnot change original string because in javascript strings are immutable)
1.str.toUpperCase()
2.str.toLowerCase()
3.str.trim()
4.str1.concat(str2)
5.str1.replace("A","a")//(searchvalue,newvalue)
6.str1.replaceAll("b","B")//(searchvalue,newvalue)
7.str1.charAt(3)
8.str1.slice(start,end?)(atleast)
"+ also used for concat"
*/
let username=prompt("enter ur name:");
console.log(`@${username}${username.length}`);

