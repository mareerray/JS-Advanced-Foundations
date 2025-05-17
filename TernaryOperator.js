const playerGuess = 8
const correctAnswer = 6

/* Refactor the if else statement to use a ternary operator */

// let message = ''
// if (playerGuess === correctAnswer) {
//     message = 'Correct!'
// } else {
//     message = 'Wrong!'
// }

const message = playerGuess === correctAnswer ? 'Correct!' : 'Wrong!'

console.log(message)

//------------------------------------------------------------------//

/* Improve the functionality of this code by
letting the player know if their guess was too hight, 
too low, or exactly right. */

const message2 = playerGuess === correctAnswer ? 'Exactly right!' 
: playerGuess > correctAnswer ? 'Too hight!' 
: 'Too low!'

console.log(message2)