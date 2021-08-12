'use strict';

let score = 0;
let totalQuestions = 7;


let userName = prompt('Please Enter Your Name: ');
console.log(userName);
document.write('<h2>' + userName + '</h2>');


let favoriteColor = prompt('Is my favorite color pink?');
console.log(favoriteColor);
if (favoriteColor.toLowerCase() == 'yes'){
  alert('Oh. Maybe you should go...');
  score++
} else {
  alert('Sick. You\'re on the right track!');
}

let favoriteActivity = prompt('Would I rather be outside instead of indoors?');
console.log(favoriteActivity);
if (favoriteActivity.toLowerCase() == 'yes'){
  alert('Nice guess! You got lucky on that one.');
  score++
} else {
  alert('You have quite a bit to learn about me.');
}

let hairColor = prompt('Do I have blonde hair?');
console.log(hairColor);
if (hairColor.toLowerCase() == 'yes'){
  alert('Cool. You\'re paying attention!');
  score++
} else {
  alert('Wow. I hope you study harder on your quizzes...');
}

let favoriteFood = prompt('Is pizza my favorite food?');
console.log(favoriteFood);
if (favoriteFood.toLowerCase() == 'yes'){
  alert('Yes. All food is my favorite food, ' + userName + '.');
  score++
} else {
  alert('All food is my favorite. Equality, ' + userName + '.');
}

let codingJs = prompt('Am I good at coding JavaScript?');
console.log(codingJs);
if (codingJs.toLowerCase() == 'yes'){
  alert('Wrong. You have way too much faith in me.');
  score++
} else {
  alert('Absolutely. I have no idea what I\'m doing.');
}

let correctGuess = Math.floor(Math.random() * 100) + 1;
  console.log(correctGuess)
let userAttempts = 4;
  for(let i = 0; i < userAttempts; i++){
      let userGuess = prompt('Please enter a number 1 - 100.');
      while (userGuess < 1 || userGuess > 100){
          userGuess = prompt('Please enter a number 1 - 100.');
      }
      if (userGuess == correctGuess) {
          alert('Congrats! You may pass.')
          score++
          break;
      } else if(userGuess < correctGuess){
          alert('Too low! Guess again.')
      }  else if(userGuess > correctGuess) {
          alert('To high! Guess again.')
      } else {
          alert('Please type a number.');
      }
      console.log(i);
      if (i == userAttempts - 1){
          alert('Sike. Correct Answer is: ' + correctGuess + `.`);
      }
  }

let attempts = 0;
let correctAnswer = false;
let favoriteFruit = ['pineapple', 'strawberry', 'mango'];

while (attempts < 5 && correctAnswer === false) {
  let fruit = prompt('Guess my favorite fruit!');
  for (let i = 0; i < favoriteFruit.length; i++) {
    let currentFruit = favoriteFruit[i];
    if (fruit === currentFruit) {
      alert('Look at you go!');
      score++
      correctAnswer = true;
    }
  }
  
  attempts++;
  if (correctAnswer === false) {
    alert('Nope. Think harder!');
  }
}

alert(score + ' out of ' + totalQuestions + `. Great job! I guess, ` + userName + '.');

// 