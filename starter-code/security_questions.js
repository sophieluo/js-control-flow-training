console.log("security_questions.js loaded");

var securityQuestions=[{question:"What is your name?",expectedAnswer:"Sophie"},
                       {question:"What is your birth date?",expectedAnswer:"01/21/1992"}]
var answer="";

for (var i=0; i<securityQuestions.length;i++) {
    answer=prompt(securityQuestions[i].question);
    if (answer!==securityQuestions[i].expectedAnswer) {
    alert("Wrong answer!")
    break;
    }
  }
