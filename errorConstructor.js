function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        // console.log(new Error('No username provided'))

        console.log('I execute')
        throw new Error('No username provided') // this will prevent any following code to be executed
        console.log('I do not execute')

    }
}

checkUsername()

