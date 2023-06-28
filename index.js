//Welcome
//Play
//Scoring
var readlineSync = require('readline-sync');
var score = 0;

var questions = [{ question: "Is amanda nunes a double champ? (yes/no)", answer: "yes" },
{ question: "What's the ranking of dusting porier?", answer: "2" },
{ question: "Is John Jones playing LW division now? (yes/no)", answer: "no" },
{ question: "Is ezzy the current champion in welter weight? (yes/no)", answer: "yes" }]

function welcome() {
  console.log("Welcome to the game, \"Are you a true UFC fann!\"");
  var userName = readlineSync.question('Enter your name ?');
  var welcomeMessage = "Welcome " + userName + ". Let's play.";
  console.log(welcomeMessage);
}

function play()
{
  for(var i =0; i < questions.length;i++)
  {
    var answer = readlineSync.question(questions[i].question);
    if(answer == questions[i].answer)
    {
      console.log("Right");
      score++;
    }else
    {
      console.log("Wrong");
    }
    console.log("Current score: " + score);
  }
}

function showScore()
{
  console.log("Hey yeaa!" + "Your final score is:" + score);
  if(score ==4)
  {
    console.log("Damn! that's amazing.");
  }else if(score ==3)
  {
    console.log("You are getting there.");
  }else
  {
    console.log("Better luck next time.");
  }
}

welcome();
play();
showScore();