const user = {
  username: "shohra",
  price: 888,
  welcomemessage: function () {
    console.log(`${this.username} , welocme in your account`);
    console.log(this)
  } 
}
user.welcomemessage()
user.username ="Qadri"
user.welcomemessage()
