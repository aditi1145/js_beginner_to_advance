/*to bring changes to all elements in an array. 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let prices=[250,645,300,900,50];
let discount=0.1;
let final_prices=[];
for(let idx=0;idx<prices.length;idx++){
    final_prices[idx]=prices[idx]-discount*prices[idx];
}
console.log(final_prices);

->Array property:array.length
->Array methods:
-----------------
 1.push(): add to end ,changes original array
 2.pop():delete and return the deleted element,chanages original array
 3.toString():converts array to string,NEW STRING RETURNED
 4.concat():returns a new array after concatination.(sequence of concatenation is considered)
 5.unshift():adds at start
 6.shift():fist value deleted and returned
 7.slice():returns a piece of the array slice(startIndx,endIndx)(return new array)[*No Change in original array*]
 8.splice():deletes a adds elements at slice(Indx , no._of_elements_to be deleted from indx , the elements to be added)
            ex:splice(1,2,101,102)

            splice(4) acts as slice(4) i.e delete all elements after that and return deleted array of elemmnts
            *makes changes in the original array*

//program:
~~~~~~~~~~
let prices=[250,645,300,900,50];
console.log(prices.slice(1,3));
console.log(prices.splice(1,2,646,301));
console.log(prices);

Assignment:
~~~~~~~~~~
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"]
console.log(`${companies.shift()} removed`);
console.log(companies);

companies.splice(1,1,"ola");
console.log(companies);

companies.push("amazon");
console.log(companies);


Array.forEach(callBackFunction)

callBackFunction:Here, it is a function to execute for each element in the Array.

A callback is a function passed as argument to  another function.*/