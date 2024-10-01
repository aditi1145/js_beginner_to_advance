const product={
    name:"ballpen",
    rating:4,
    price:270,
    offer:5,
    deal:false
}
const profile={
    name:"Aditi Das",
    id:"@adi1106",
    no_posts:195,
    no_followers:56900,
    following:4,
    isfollow:false,
    about:"python coder|java coder|"

}
console.log(product);
console.log(profile);
//to print keys
for(let i in product){
    console.log(product[i]);
}