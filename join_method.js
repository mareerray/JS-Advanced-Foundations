/* .join() method
strings from arrays 
- concatenates elements of arrays into a string
- you choose how elements are separated
- returns the new string
*/

const guestsArr = ['Amy', 'Clare', 'Keith', 'Dan'] 

console.log(guestsArr.join())
// output Amy,Clare,Keith,Dan

console.log(guestsArr.join('.')) // use as a separator by a comma
// output Amy.Clare.Keith.Dan

console.log(guestsArr.join('🐶')) // use as a separator by a doggy emoji
// output Amy🐶Clare🐶Keith🐶Dan

console.log(guestsArr.join(' ')) // use as a separator by a space
// output Amy Clare Keith Dan

console.log(guestsArr.join('')) // no separators
// output AmyClareKeithDan