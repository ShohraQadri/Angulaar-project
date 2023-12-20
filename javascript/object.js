
const user1 = {
    name: "shohra",
    email: "qadri@gmail.com",
    'no': "908765"
}
// console.log(user1['no']);

const mysum = Symbol("keysymbol")

const user = {
    name: "shohra qadri",
    number: 9027328766,
    age: 23,
    [mysum]: "manysymbol"
}
// console.log(user.number);
// console.log(user["age"]);
// console.log(user[mysum]);

user.greeting = function () {
    // console.log(`hello i am ${this.name}`);
}
// console.log(user.greeting());

const myuser = {
    name: "qadri",
    personaldetails: {
        firstname: "shohra",
        lastname: "qadri"
    }
}
// console.log(myuser.personaldetails.lastname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


const Array = [
    {
        name: "ram",
        id: 123
    },
    {
        name: "mohan",
        id: 125
    },
    {
        name: "roman",
        id: 128
    },
    {
        name: "sham",
        id: 1230
    },
]
// console.log(Object.values(Array));

