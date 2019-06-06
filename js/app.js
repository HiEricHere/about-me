'use strict';
//questions 1 - 5 variables
var question1 = 'Did I take last year off traveling to remote regions of the world to experience new foods, connections and joys that the trappings of modern life can\'t provide, discover new perspectives and reflections about what\'s truly important in life and ultimately find inner peace in learning my place in this world?';
var question2 = 'Am I from around here?';
var question3 = 'Am I over 20?';
var question4 = 'Am I under 30?';
var question5 = 'Do I prefer a perfect medium rare steak or a big breakfast on a beautiful sunday morning?';
var answer1Y = 'Actually I spent last year behind a desk in a corporate office doing corporate things for corporate people.';
var answer1N = 'Thanks for the vote of confidence! :(';
var answer2Y = 'Sure wish, I moved here from Texas just a couple weeks ago!';
var answer2N = 'That\'s right, I come from a strange land many may know as \'Texas\'';
var answer3Y = 'Yup';
var answer3N = 'Wayyyy over 20';
var answer4Y = 'Unfortunately those days have passed... :\'(';
var answer4N = 'Don\'t have to remind me :(';
var answer5Y = 'right on.';
var answer5N = 'cold tasteless noodles with a side of cardboard is my go to.';
var questionList = [question1, question2, question3, question4, question5];
var answerList = [[answer1Y,answer1N] , [answer2Y,answer2N] , [answer3Y,answer3N] , [answer4Y,answer4N], [answer5Y,answer5N]];
var userReminder = 'It\'s a Y/N question, by the way.';
var inputYN;
var inputAdjust;
var i;
//question 6 variables
//formula for random number between 0 - 20 inclusive taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//var answer6 = Math.floor(Math.random() * (21));
var answer6 = 5;
var guessq6 = 0;
var userNum6;
var userReminder6 = 'Has to be a whole number and between 0 and 20, by the way.';
var numberProper;
var responseGreater = 'Shooting too high! ';
var responseLower = 'Need to go higher than that';
var responseWin = 'Hey congrats you\'re like a psychic or something. Go again? (Y/N)';
var responseLose = 'Looks like you\'re not going to be bending spoons anytime soon. Try again? (Y/N)';
var playAgain6 = true;
//question 7 variables
var playAgain7 = true;
var answer7 = [];
var preNum7;
var n;
var dupeCount = 0;
var userAnswer7 = [];
var userPreNum7;
var userName;
var welcome1 = 'What was your name again? I forgot. Maybe again. I hope it\'s not too long or difficult.';
var userReminder7 = 'Give me different numbers that are between 0 and 10';
var score = 0;

var playGame;
playGame = confirm('Press OK to guess some silly things about me!');
console.log('User decided to play: ', playGame);

/* Guessing Game
Question 1 - 5
Uses an array of questions and a nested array of responses to user input answers - a nested array of 2 responses (for y and n) per array index.
So each question has a matching answer in the answer array with responses for both yes/no replies.
A for loop on the outside will run for the length of the question array. Each iteration of the for loop determines the question/answer by current index number.
Inside this is a while loop that will run while the user's input is improper. An if statement checks if it's improper by seeing if the answer is not Y or N. 
If its improper an alert is given, the while loop is still true and loops again. If a good answer is given the rest of the if statement executes and sets the
answerProper variable to true which breaks the while loop. The outside for loop runs again and resets the answerProper loop to false.
while(answerProper = false this while loop is true)
   prompt for a proper response
     if (answerProper is improper)
     answerProper = false
     alert user to input proper answer
     else
     take answer and run yes no replies
     lastly set answerProper = true which breaks out of while loop

Question 6 
While loop runs while there are still tries remaining starting with 6 and if playAgain is true.
Randomly generate a number 0 - 20. Prompt user for input. Convert answer to integer and check if valid: is integer and is 0 - 20.
If improper, alert user and prompt again. If proper, check if correct. If not then check if answer is greater or lower and alert user. If correct, 
give win message and ask if they want to play again. If not, set playAgain false and move on to question 7. If they run out of guesses, give lose message
and ask if they want to play again. If not, set playAgain false and move to question 7. For all Y/N questions reuse the Y/N checker while loop and variables
from questions 1-5.
*/


// this function takes in a string and check if that string starts with a y or n. THen either return false or the letter y or n

var stringCheck = function(string) { 
  var stringAdjust = string.toUpperCase().charAt(0);
  if (stringAdjust === 'Y' || stringAdjust ==='N') { 
    return stringAdjust;
  } else { 
    return false;
  }
}

// Use a for loop to loop through questions 1 and 5 
var q1to5 = function() { 
  for (var i = 0; i < questionList.length; i++) { 
    inputYN = stringCheck(prompt(questionList[i]));
    if (inputYN === false) { 
      alert(userReminder);
    } else if (inputYN === 'Y') { 
      alert(answerList[i][0]);
    } else { 
      alert(answerList[i][1]);
    }
  }
}

// check user input to see if they get the right random number or not. Tell them if the guess is too high or low or NaN or more than 20. THen ask if they want to play again after the game is over. 
var q6 = function() { 
  while (guessq6 < 5 && playAgain6 === true) {
    userNum6 = prompt('Pretend you\'re 5 years old for a sec and guess a number between 0 and 20: ');
    numberProper = parseInt(userNum6, 10);
    console.log('adjusted number: ', numberProper);
    if (isNaN(numberProper) || numberProper > 20) {
      guessq6++;
      alert(userReminder6);
    } else if (numberProper === answer6) {
      answerProper = false;
      while (answerProper === false) {
        inputYN = prompt(responseWin);
        inputAdjust = inputYN.toUpperCase().charAt(0);
        if (inputAdjust !== 'Y' && inputAdjust !== 'N'){
          alert(userReminder);
        } else if (inputAdjust === 'Y') {
          guessq6 = 0;
          answer6 = Math.floor(Math.random() * (21));
          console.log('new number is :', answer6);
          answerProper = true;
        } else {
          playAgain6 = false;
          answerProper = true;
        }
      }
    } else if (numberProper > answer6) {
      guessq6++;
      alert(responseGreater);
    } else {
      guessq6++;
      alert(responseLower);
    }
    if (guessq6 === 5) {
      answerProper = false;
      while (answerProper === false) {
        inputYN = prompt(responseLose);
        inputAdjust = inputYN.toUpperCase().charAt(0);
        if (inputAdjust !== 'Y' && inputAdjust !== 'N'){
          alert(userReminder);
        } else if (inputAdjust === 'Y') {
          guessq6 = 0;
          answer6 = Math.floor(Math.random() * (21));
          console.log('new number is :', answer6);
          answerProper = true;
        } else {
          playAgain6 = false;
          answerProper = true;
        }
      }
    }
  }
}

var q7 = function() { 
   //question 7
  /*
  generate 5 numbers between 0 and 10 using a for loop and push into an array. check if a number is being double counted.
  prompt user for name and 5 numbers between 0 and 10. check if number is valid: integer and between 0 and 10.
  push user numbers into an array and match against winning number array. +1 score for each correct guess.
  Give user score report with their name and score. Ask if they want to play again.*/
  while (playAgain7 === true) {
    //create hidden answer array
    while (answer7.length < 5) {
      preNum7 = Math.floor(Math.random() * 11);
      for (n = 0; n <= answer7.length; n++) {
        if (preNum7 === answer7[n]) {
          dupeCount++;
        }
      }
      if (dupeCount > 0) {
        dupeCount = 0;
      } else {
        answer7.push(preNum7);
      }
    }
    console.log(answer7);
    //create user answer array
    //userName = prompt(welcome1);
    userName = prompt(welcome1);
    console.log(userName);
    alert('Thanks, ' + userName + ', I totally won\'t stalk your social media now. I\'m thinking of 5 numbers between 0 and 10. Give me 5 different numbers one at a time, and we\'ll see how many you can get right.');
    while (userAnswer7.length < 5) {
      userPreNum7 = prompt('I have ' + userAnswer7.length + ' number(s) right now, need ' + (5 - userAnswer7.length) + ' more: ');
      numberProper = parseInt(userPreNum7, 10);
      if (isNaN(numberProper) || numberProper > 10) {
        alert(userReminder7);
      } else {
        for (n = 0; n <= userAnswer7.length; n++) {
          if (numberProper === userAnswer7[n]) {
            dupeCount++;
          }
        }
        if (dupeCount > 0) {
          dupeCount = 0;
          alert(userReminder7);
        } else {
          userAnswer7.push(numberProper);
        }
      }
    }
    /* testing array for loop
    var x;
    for (x = 0; x < userAnswer7.length; x++) {
      console.log(userAnswer7[x]);
    }
    */
    //check hidden answers against user answers
    for(n = 0; n < answer7.length; n++) {
      for (var x = 0; x < userAnswer7.length; x++) {
        if(answer7[n] === userAnswer7[x]) {
          score = score + 1;
        }
      }
    }
    console.log(score);
    //show score results and restart
    answerProper = false;
    while (answerProper === false) {
      inputYN = prompt('So, ' + userName + ', it looks like you got ' + score + ' out of ' + answer7.length + ' right. Whoever coded me is too tired to check if that\'s impressive or not so pat yourself on the back for a participation reward. Do you want to play again? (Y/N): ');
      inputAdjust = inputYN.toUpperCase().charAt(0);
      if (inputAdjust !== 'Y' && inputAdjust !== 'N'){
        alert(userReminder);
      } else if (inputAdjust === 'Y') {
        for(n = 0; n < 5; n++) {
          answer7.shift();
          userAnswer7.shift();
        }
        answerProper = true;
      } else {
        playAgain7 = false;
        answerProper = true;
      }
    }
  }
}

var answerProper;

if (playGame) {
  
  //question 1 - 5
  q1to5();
  
  // //question 6
  q6();
  q7();
 
}
