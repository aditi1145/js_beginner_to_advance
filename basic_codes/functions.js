/*
functions: block of code thyat performs a specific task.

-function defination:
        function work(param1,param2,param3){
            *perform some task*or logic
        }
-function call:
        work()

note:  function prevents redundancy to become better coder

ex1:Greetings function

function greet(name){
    console.log(`Hello!Good morning ${name}`)
}
greet("meera");
greet("shweta");
greet("rita");


ex2:Addition function
function Add(x,y)
{
    console.log(`${x} + ${y} = ${x+y}`);
}
Add(1,2)
Add(2,3)
Add(3,4)
Add(4,5)

ex3:return in a function: return returns only one value,after return no more code written after return
function sum(x,y){ //x,y are local variables
    return x+y
}
console.log(sum(4,5))

ARROW FUNCTIONS:
~~~~~~~~~~~~~~~~~~~~
const arrow_func_name=(param1,param2)=>{
    return result;
}

like x=5;
x
>5
similarly:
arrow_func_name  //returns the function defination 
>(param1,param2)=>{
    return result;
}

arrowSum(3,4)
>7

const printHello =()=> console.log("hello")

//create a function takes string argument and return count of vowels in it:


function no_of_vowels(word){
    word=word.toLowerCase()
    for(let i of word){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            count+=1;
        }
    }
    return count;
}

no_of_vowels("hello");





//create a function takes string argument and return count of vowels in it(using arrow function):

const no_of_vowels=(word)=>{
    let count=0;
    word=word.toLowerCase()
    for(let i of word){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            count+=1;
        }
    }
    return count;
}

function no_of_vowels(word){
    let count=0;
    word=word.toLowerCase()
    for(let i of word)
    {
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
        {
            count+=1;
        }
    }
    return count;
}

console.log(no_of_vowels("Aditi"));
*/