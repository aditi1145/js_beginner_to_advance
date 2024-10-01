const URL="https://cat-fact.herokuapp.com/facts"
const factPara =document.querySelector("#fact");
const btn =document.querySelector("#btn");

/*The Fetch API provides an interface for fetching(sending/receiving) resources.
It uses request and response objects.
the fetch() method is used to fetch a resource(data). 

let promise= fetch(url,[options])
console.log(promise);*/

// const getFacts = async () =>{
//     let response=await fetch(URL);
//     console.log(response);
//     let data =await response.json();
//     factPara.innerText=data[0].text;
// };
// btn.addEventListener("click",getFacts);
