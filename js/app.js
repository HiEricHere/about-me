'use strict';
//global variables
var userName;
var playGame = confirm('Press OK to waste some time!');

//this function takes in a string and checks if that string starts with a y or n. Then either return false or the letter Y or N
var stringCheck = function(string) {
  var stringAdjust = string.toUpperCase().charAt(0);
  if (stringAdjust === 'Y' || stringAdjust === 'N') {
    return stringAdjust;
  } else {
    return false;
  }
};

//this function takes a question, the answer, and feedback array. It gives user a message and returns a score.
var askQuestion = function( question, answer, feedback ) {
  var guess = stringCheck(prompt(question));
  if (guess === false) {
    alert('It\'s a Y/N question, by the way.');
    return 0;
  } else if (guess === answer) {
    alert(feedback[0]);
    return 1;
  } else {
    alert(feedback[1]);
    return 0;
  }
};

//this function takes score count and gives feedback
var scoreReport1 = function(score) {
  var summary = 'You got ' + score + ' out of 5 right, ' + userName + '.';
  if (score === 0) {
    alert(summary + ' Does that mean I\'m enigmatic and mysterious in a brooding and smoldering kind of way?\n\n9/10 experts say \'Maybe. What\'s for lunch?\'');
  } else if (score > 0 && score <= 2) {
    alert(summary + ' I\'m kind of a big deal so you should try again.');
  } else if (score > 2 && score <= 4) {
    alert(summary + ' Was this your first try? High five!');
  } else {
    alert(summary + ' You know basically everything about me! Great jo--wait is that a good thing? Can my entire existence be neatly summarized into 5 questions?\n\n9/10 experts agree that cash only restaurants are evil.');
  }
};

// question 1 - 5 function. I found the if else code block to be repeating in each question code block
// with no variation so I felt a for loop to be appropriate in this situation.
var q1to5 = function () {
  //question 1
  var question1 = 'Did I take last year off traveling to remote regions of the world to experience new foods, connections and joys that the trappings of modern life can\'t provide, discover new perspectives and reflections about what\'s truly important in life and ultimately find inner peace in learning my place in this world?';
  var answer1Correct = 'Thanks for the vote of confidence! :(';
  var answer1Wrong = 'Actually I spent last year behind a desk in a corporate office doing corporate things for corporate people.';
  //question 2
  var question2 = 'Am I from around here?';
  var answer2Correct = 'That\'s right, I come from a strange land many may know as \'Texas\'';
  var answer2Wrong = 'Sure wish, I moved here from Texas just a couple weeks ago!';
  //question 3
  var question3 = 'Am I over 20?';
  var answer3Correct = 'Yup';
  var answer3Wrong = 'Wayyyy over 20';
  //question 4
  var question4 = 'Am I under 30?';
  var answer4Correct = 'Don\'t have to remind me :(';
  var answer4Wrong = 'Unfortunately those days have passed... :\'(';
  //question 5
  var question5 = 'Do I prefer a perfect medium rare steak or a big breakfast on a beautiful sunday morning?';
  var answer5Correct = 'right on.';
  var answer5Wrong = 'cold tasteless noodles with a side of cardboard is my go to.';
  //an array of all the questions
  var questionList = [[question1,'N'], [question2,'N'], [question3,'Y'], [question4,'N'], [question5,'Y']];
  //an array of the correct and incorrect answers with indexes corresponding to its question index. [0] = correct [1] = wrong
  var feedbackList = [[answer1Correct, answer1Wrong] , [answer2Correct, answer2Wrong] , [answer3Correct, answer3Wrong] , [answer4Correct, answer4Wrong], [answer5Correct, answer5Wrong]];
  var playAgain = true;

  while ( playAgain === true ) {
    var userScore = 0;
    for (var i = 0; i < questionList.length; i++) {
      userScore += askQuestion(questionList[i][0], questionList[i][1], feedbackList[i]);
    }
    scoreReport1(userScore);
    playAgain = confirm('Want to try again?');
  }
};

//take user input and check if it's a number between lowerNum and higherNum and returns false if not a number/outside parameters or the number if it's within rules.
var numberify = function (num, lowerNum, higherNum) {
  var numberified = parseInt(num, 10);
  if (isNaN(numberified) || numberified < lowerNum || numberified > higherNum) {
    return false;
  } else {
    return numberified;
  }
};

var guessTest = function( guess, answer ) {
  if ( guess === false ) {
    alert('Guess a *number* between 0 and 20.');
    return false;
  } else if ( guess > answer ) {
    alert('Shooting too high there, Tex.');
    return false;
  } else if ( guess < answer ) {
    alert('Are your guesses as low as your self esteem or something? Go higher!');
    return false;
  } else if ( guess === answer ) {
    return true;
  }
};

var q6 = function () {
  var guessNum = 5;
  var playAgain = true;
  //formula for random number between 0 - 20 inclusive taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  var answer = Math.floor(Math.random() * (21));
  var userGuess;
  var numberified;
  alert('Let\'s try something different, ' + userName + '. Let\'s test your mind reading skills.');
  while ( guessNum > 0 && playAgain === true ) {
    userGuess = prompt('Guess a number between 0 and 20. You have ' + guessNum + ' tries left: ');
    numberified = numberify( userGuess, 0, 20 );
    if ( guessTest( numberified, answer ) ) {
      guessNum = 5;
      answer = Math.floor(Math.random() * (21));
      playAgain = confirm('Hey congrats you\'re like a psychic or something. Go again?');
    } else {
      guessNum -= 1;
    }
    if ( guessNum === 0 ) {
      guessNum = 5;
      answer = Math.floor(Math.random() * (21));
      playAgain = confirm('Looks like you\'re not going to be bending spoons anytime soon. Try again?');
    }
  }
};

//this function takes a number and an array and checks if the number exists in the array and returns true or false
var checkArray = function ( num, tempArray ) {
  var dupeCount = 0;
  for ( var i = 0; i <= tempArray.length; i++ ) {
    if ( num === tempArray[i] ) {
      dupeCount++;
    }
  }
  if ( dupeCount > 0 ) {
    return false;
  } else {
    return true;
  }
};

//this function takes the user score and returns a different response
var scoreReport2 = function (score) {
  if ( score === 0 ) {
    return ' That\'s either some impressively good luck or really bad luck. Probably the latter. Don\'t worry we\'ve all never been there.';
  } else if ( score > 0 && score <= 2 ) {
    return ' That\'s about right, about average. Give yourself an average pat on the back.';
  } else if ( score > 2 && score <= 4 ) {
    return ' Not bad. Maybe we should go to Vegas and win me some money.';
  } else {
    return ' Wow that\'s a bit scary. Does that mean you *can* read my thoughts?! Don\'t tell anyone else my dirty secrets, kay?';
  }
};

var q7 = function () {
  var playAgain = true;
  var randNum;
  var userNum;
  var numberified;
  alert('Let\'s waste some more time, ' + userName + '. Do you feel lucky? I\'ve got 5 numbers in my head between 0 and 10. How many can you guess right?');
  while ( playAgain === true ) {
    var answerArray = [];
    var userArray = [];
    var userScore = 0;
    //creates the answer array of 5 unique numbers 0-10
    console.log(answerArray.length);
    while ( answerArray.length < 5 ) {
      randNum = Math.floor(Math.random() * 11);
      if ( checkArray(randNum, answerArray) === true ) {
        answerArray.push(randNum);
      }
    }
    //asks user for 5 unique numbers 0-10 and creates an array of them
    console.log(userArray.length);
    while ( userArray.length < 5 ) {
      userNum = prompt('I have ' + userArray.length + ' numbers so far. I need ' + (5 - userArray.length) + ' more, ' + userName + ':');
      numberified = numberify(userNum, 0, 10);
      if ( numberified === false ) {
        alert('I need a *number* between 0 and 10.');
      } else if ( checkArray(numberified, userArray) === false ) {
        alert('You\'ve already given me this number, ' + userName + '.');
      } else {
        userArray.push(numberified);
      }
    }
    //compares user array and answer array and tallies up user score
    for( var i = 0; i < answerArray.length; i++ ) {
      for ( var n = 0; n < userArray.length; n++ ) {
        if ( answerArray[i] === userArray[n] ) {
          userScore++;
        }
      }
    }
    playAgain = confirm('Well, ' + userName + ', it looks like you guessed ' + userScore + ' out of the 5 numbers I was thinking.' + scoreReport2(userScore) + ' Play again?');
    if ( playAgain ) {
      for ( var x = 0; x < 5; x++ ) {
        answerArray.shift();
        userArray.shift();
      }
    }
  }
};

if (playGame) {
  userName = prompt('What\'s your name by the way?');
  q1to5();
  q6();
  q7();
  alert('Thanks for playing!');
}
