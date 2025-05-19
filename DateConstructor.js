const dateSnapshot = new Date()

console.log(typeof dateSnapshot)
// object
console.log(dateSnapshot.toString())
// Mon May 19 2025 00:36:44 GMT+0300 (Eastern European Summer Time)

console.log(dateSnapshot.getFullYear())
// 2025

console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`)
// Copyright 2025 all rights reserved.

/*
Challenge:
    1. Search online to find out how we can get just the year
        using the Date() constructor. Then update the code in 
        the console.log.
*/
