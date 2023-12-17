function addtwonumber(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}
const result = addtwonumber(5, 7);
// console.log(result);


function loginuser(username) {
    if (!username) {
        console.log("please enter a usernaems");
        return
    }
    return `${username} ,is logged in`
}
let myloginuser = (" ");
// console.log(myloginuser);
// console.log(loginuser("qadri"));

const user = {
    name: "Shohra qadri",
    age: 23,
    number: 9089876544,
}
function handelobject(anyobject) {
    // console.log(`user name is ${anyobject.name} and numberis ${anyobject.number} and age is ${anyobject.age}`);

}
// console.log(user);
handelobject({
    name: "shohra",
    age: 23,
    number: 9089876544,
})

function one(){
const username = "shohra";

function two(){
    const fullname = "qadri"
    console.log(username);
}
two()
// console.log(fullname);
}
one()