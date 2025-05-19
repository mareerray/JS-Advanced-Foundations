function displayTrafficLight(light){
    console.log(light)
}

displayTrafficLight('🔴')

setTimeout(displayTrafficLight, 3000, '🟢')

//-----------------------------------------------------------------------------

function logAnswer(param1, param2) {
    console.log(`The answer is ${param1} of course! If you got that right, giver yourself ${param2} points.`)
}

console.log('What is the capital of Peru?')

setTimeout (logAnswer, 3000, 'Lima', 10)
/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs. 
       The answer is 'Lima' and it's 10 points for getting it right. 
*/