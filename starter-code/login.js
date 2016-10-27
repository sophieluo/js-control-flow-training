console.log("login.js loaded");

var userLogin ={name:"Sophie",password:"123"};

for (i=0;i<3;i++) {
  var enterPassword=prompt("Enter password for user "+userLogin.name)
  if (enterPassword!==userLogin.password) {
alert("Wrong password!")
}
};
