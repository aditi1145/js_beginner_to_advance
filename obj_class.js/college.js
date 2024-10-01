// const student={
//     fullname:"aditi das",
//     marks: 94.4,
//     printmarks:function(){
//         console.log("marks=",this.marks);
//     },
// }

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%")
//     }
// }

// const karanArjun1={
//     salary:50000,

// }
// const karanArjun2={
//     salary:50000,

// } 
// const karanArjun3={
//     salary:50000,

// }
// const karanArjun4={
//     salary:50000,

// }
// karanArjun1.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
// karanArjun4.__proto__=employee;
let data="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
   viewData(){
    console.log("data=",data)
   }

}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="some new value";
    }
}
let student1 = new user("shraddha","abcd@gmail.com");
let student2 = new user("ardha","xyz@gmail.com");
let teacher1 = new user("dean","dean@gmail.com");
let admin1 = new Admin("admin1","admin1@gmail.com");


/*error handling:
try{
    code;
}
catch(err){
    console.log(err);
}
*/
