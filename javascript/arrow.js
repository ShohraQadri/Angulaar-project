// const user = {
//   username: "shohra",
//   price: 888,
//   welcomemessage: function () {
//     console.log(`${this.username} , welocme in your account`);
//     console.log(this)
//   }
// }
// user.welcomemessage()
// user.username = "Qadri"
// user.welcomemessage()
// console.log(this);


(function chai() {
  console.log(`databae connected.`);
}
)();

((name) => {
  console.log(`another database connented ${name}`);
}
)("Qadri")