/*for(let i=0;i<=100;i+=2){
    console.log(i)
}

methods:
1.forEach():
 ~~~~~~~~~~~
(associated to arrays only)
Array.forEach(callBackFunction)

callBackFunction:Here, it is a function to execute for each element in the Array.

A callback is a function passed as argument to  another function.

For a given array of Numbers,print the square of each value using the forEach loop

let arr=[9,8,7,6];
arr.forEach((val) => {
    console.log(val * val);
});

let nums=[67,52,39];
let calcSquare = (num) =>
{
    console.log(num*num);
}
nums.forEach(calcSquare);

2.map method():
  ~~~~~~~~~~~~~
 map also works similar to forEach but creates a new array with the results of some opertaion.
 The value its callback returns are ued to form new array.

 arr.map(callbackFnx(value,index,array))

let nums=[67,52,39];
let calcSquare = (num) =>
{
    return num*num;
}
console.log(nums.maps(calcSquare)); //returns array

whereas:
let nums=[67,52,39];
let calcSquare = (num) =>
{
    return num*num;
}
console.log(nums.forEach(calcSquare)); //returns 'undefined'

3.filter method():
~~~~~~~~~~~~~~~~~~
let nums=[3,6,7,52,39,2,1];
let func = (num) =>
{
    return num > 3;
}
console.log(nums.filter(func)); //returns array containing elements greater than 3

4.arr.reduce():
~~~~~~~~~~~~~
ex:calculate sum of the numbers in the array
let nums=[67,52,39];
let output = nums.reduce((result,current)=> {return result+current;});
console.log(output);


practise questions:
q1.To find largest element in an array.

ans:
~~~

method1:
~~~~~~~~
let arr=[5,6,2,1,3,8];
const output =arr.reduce((res,current)=>
{
    if(res<current){
        res=current;}
    return res
})
console.log(output);

method2:
~~~~~~~~~
let arr=[5,6,2,1,3,8];
const output =arr.reduce((res,current)=>
{
    return res>current?res:current;
})
console.log(output);

q1.To find smallest element in an array:
ans: same as finding largest just change to less than.

Q.we are given array of marks of students.filter out the marks of students that scored 90+:
ans:
let arr=[24,67,90,91,101,10]
const output=arr.filter((val)=>{
    return val>90;
})
console.log(output)

Q.take a number n as input from user.create an array of numbers from 1 to n.Use the reduce method to calculate
sum of all numbers in array.use reduce methods to calculate product of all numbers in the array. 
ans: 
let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
const sum=arr.reduce((res1,cur1)=>{return res1+cur1;})
const prod=arr.reduce((res2,cur2)=>{return res2*cur2;})
console.log("the sum is",sum);
console.log("the prod is",prod);
*/



