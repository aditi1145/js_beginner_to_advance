/*the change in the state of an object is known as event.
events are fired to notify code of "interesting changes" that may affect code execution.

~mouse events(click,double click etc)
~keyboard events(keypress,keyup,keydown)
~form events(Submit etc.)
~print event & many more

eg: button onclick/ondblclick/onmouseover(can be done inline in html.)

*/
let a=35;

let el=document.querySelector("button");
el.onclick=()=>{
    console.log("btn clicked once");
    a++;
    console.log(a);
}

