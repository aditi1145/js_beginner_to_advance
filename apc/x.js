//Asynchronous programming:
// console.log("hello1");
// console.log("hello2");

// function hello(){
//     console.log("hello3");
// }
// setTimeout(hello,2000);
// console.log("hello4");
// console.log("hello5");
                                                                                                                                
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b)
// }
// calculator(1,2,sum)

// const hello=()=>{
//     console.log("hello");
// } 

//CALLBACK HELL

// function getData(dataId ,getNextData){
//     setTimeout(()=> 
//     {
//         console.log('data',dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     }, 2000);

//     }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });
//Promises:
//~~~~~~~~~~

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise");
//     reject("some error occured");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> 
//     {
//         console.log('data',dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     }, 2000);
//     })
// }

//promise catch,promise then
//~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("error caught:",err);
// });
/*
earning promise chains
~~~~~~~~~~~~~~~~~~~~~~~~
function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },6000);
    });
}
console.log("fetching data1")
let p1 = asyncFunc();
p1.then((res)=>{console.log(res);}
console.log("fetching data2")
let p2 = asyncFunc2();
p2.then((res)=>{console.log(res);});

promise chains:
~~~~~~~~~~~~~~
function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },6000);
    });
}
console.log("fetching data1")
let p1 = asyncFunc();
p1.then((res)=>{
    console.log("fetching data2")
    let p2 = asyncFunc2();
    p2.then((res)=>{});
});
*/

//promise chaining ultra pro (".then chaining"):
//~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function getData(dataId){
//         return new Promise((resolve,reject) => {
//             setTimeout(()=>{
//                 console.log("data="+dataId);
//                 resolve("success");
//                     // reject("error");
//                 },4000);
//             });
//         }
       
// getData(1).then((res)=>{
//         return getData(2);
//     })
//     .then((res)=>{
//         return getData(3);
//     })
//     .then((res)=>{
//         return getData(4);
//     })
//     .then((res)=>{
//         console.log(res);
// });

/*Async-await:
~~~~~~~~~~~~~~

-async function always returns a Promise.
async function myFunc(){...}
await pauses the execution of its surrounding async function until the promise is settled.

example1:

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
    },2000);
});
};

async function getWeatherData(){
    await api();
    await api();
}

*/

function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");},2000);
    });
}

// async function fetching_data(){
//     await getData(1);
//     await getData(2);
// }

//shortcut to run function without function calling:IIFE(immediately invoked function execution)

(async function(){
    await getData(1);
    await getData(2);
})();

/*
IIFE :

(function(){...})()
(()=>{...})()
(async()=>{...})()



*/

