var readlineSync = require("readline-sync");
var userName=readlineSync.question("What's Your Name ? \n");
console.log('\n');
var start=readlineSync.question("Hi!" +userName+","+" Do You Know Harshika ? ");
// console.log('\n');
var start1= 'yes';
if(start.toUpperCase() === start1.toUpperCase()){
  console.log("Great :)");
}
else
{
  console.log("You are missing a good person :(");
}
//console.log("Hi! " +userName+','+ " Do You Know Harshika ? ");
console.log('\n');
var result=readlineSync.question("Would you like to play a Quiz ? \n");
var result1 ='Yes';
if(result.toUpperCase === result1.toUpperCase){
var score = 0;
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right.. ");
    score = score+1;
    // console.log("current score is "+score)
  }
  else {
    console.log("Wrong.. ");
    // score= score-1;
    // console.log("current score is "+score);
  }
}

var arr = [{
  question : "What is national song of India? ",
  answer:  "Vande Mataram"
},
{
  question : "What is the capital of India? ",
  answer:  "Delhi"
  
},
{
  question : "Most literate state of India? ",
  answer:  "Kerala"
  
},
{
  question : "Who wrote the constitution of India? ",
  answer:  "Prem Behari Narain Raizada"
},
{
  question : "Who is the first president of India? ",
  answer:  "Dr. Rajendra Prasad"
             
}];

for(var i = 0 ; i < arr.length; i++){
  var currentQuestion = arr[i];
  play(currentQuestion.question,currentQuestion.answer);
  if(i == arr.length-1) continue;
  else console.log("current score "+ score);
  console.log('\n');
}
  console.log(" \n Your Max Score is "+score);
  let maxScore =5 ;
  if(score == maxScore){
    console.log("\n");
    console.log("Congratulations !! You really know  her well. ");
  }
  console.log("\n");
  console.log("Thanks for giving your time !!");
}
else
{
  console.log("Thanks for giving your time !!");
}