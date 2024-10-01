/*
let newbtn =document.createElement("button");
newbtn.innerText="click me!";

let div=document.querySelector("div");//inside element
div.append(newbtn);

div=document.querySelector("div"); //inside element
div.prepend(newbtn);

div=document.querySelector("div");//outside element
div.before(newbtn);


div=document.querySelector("div");//outside element
div.after(newbtn);

div=document.querySelector("div");//remove the element
div.remove(newbtn);


let newheading=document.createElement("h1");
newheading.innerHTML="<i>welcome to Peace section</i>";

document.querySelector("body").prepend(newheading);  

//Assignment:
//Create a new button element.Give it a text "click me",background color of red & text color of white.
//Insert the button as first element inside the body tag

let newbtn=document.createElement("button");
newbtn.innerText="Click Me!";

let body=document.querySelector("body");
body.prepend(newbtn);

newbtn.style.backgroundColor="red";
newbtn.style.color="white";

Q2.Create a <p> tag in html,give it a class and some styling.
Now create a new class in css and try to append this class to the <p> element.
Did you notice,how you overwrite the classname when you add a new one.
solve this problem using classList.

ans:
*/
let el=document.querySelector("p");
//el.setAttribute("class","box");//removes the old css completely
el.classList.add("box");

 
 