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
var answer6 = Math.floor(Math.random() * (21));
var guessq6 = 0;
var userNum6;
var userReminder6 = 'Has to be a whole number and between 0 and 20, by the way.';
var numberProper;
var responseGreater = 'Shooting too high! ';
var responseLower = 'Need to go higher than that';
var responseWin = 'Hey congrats you\'re like a psychic or something. Go again? (Y/N)';
var responseLose = 'Looks like you\'re not going to be bending spoons anytime soon. Try again? (Y/N)';
var playAgain = true;
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

if (playGame) {
  //question 1 - 5
  for (i = 0; i < questionList.length; i++) {
    var answerProper = false;
    while (answerProper === false) {
      inputYN = prompt(questionList[i]);
      inputAdjust = inputYN.toUpperCase().charAt(0);
      if (inputAdjust !== 'Y' && inputAdjust !== 'N'){
        alert(userReminder);
      } else if (inputAdjust === 'Y') {
        alert(answerList[i][0]);
        answerProper = true;
      } else {
        alert(answerList[i][1]);
        answerProper = true;
      }
    }
  }
  //question 6
  while (guessq6 < 5 && playAgain === true) {
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
          playAgain = false;
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
          playAgain = false;
          answerProper = true;
        }
      }
    }
  }
}



