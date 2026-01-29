//single ton objects -->automatic create constructor
const user = new Object;
console.log(user);
user.name="Ankita";
console.log(user)


const user1 = {};//non single ton object

user1.id = 1;
user1.name = "Anu";
user1.isLogin = true;
console.log(user1.id);
console.log(user1.name);
console.log(user1.isLogin);

//object inside the the object
const reguser = {
    email:"anu@123",
    username:{
        fullname:{
            fname:"Anu Mudhale"
        }

    }
}
console.log(reguser);
console.log(reguser.username.fullname.fname);//nested object