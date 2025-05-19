/*
Object destructuring enables us to
extract properties from objects into
distinct variables */

const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 

//example NOT DRY ❌

// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director

//better example DRY ✅
const {title, year, genre, star, director} = favouriteFilm

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)

// ----------------------------------------------------------------------------------

const dreamHoliday = {
    companion: 'Thailer',
    destination: 'Åland Islands',
    activity: 'travel around the islands',
    accommodation: 'my new home in Mariehamn',
    time: 'summer'
}

/* 
Challenge
1. Complete the object dreamHoliday with whatever
    information is true for you. Feel free to add 
    extra properties or change the existing ones. 
2. Destructure the object and use the individual 
    variables to log out one or more sentences about 
    your dream holiday. 
    
E.g. "I would love to go to Austin, Texas to visit the Tesla HQ. 
        I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/

const {companion, time, destination, accommodation, activity} = dreamHoliday

console.log(`I would like ${companion} to come to visit me in ${destination} during ${time}. We'd stay at ${accommodation} and ${activity}.`)