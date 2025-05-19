/* .map() method
iterating over arrays 
and giving us a new array */

//Convert these Miles to KM! 
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function(distanceMiles) {
    return (distanceMiles * conversionFactorMilesToKm)
})
console.log(distanceWalkedKmArr)

//-------------------------------------------------------------------------


// we can also add index parameter of each element in the map array
const distanceWalkedKmArrWithIndex = distanceWalkedMilesArr.map(function(distanceMiles, index) {
    return `Month ${index}: ${(distanceMiles * conversionFactorMilesToKm)} KM`
})
console.log(distanceWalkedKmArrWithIndex)

//-------------------------------------------------------------------------

// we don't always need to store a new array in a const
// just put all the logic in the function and call it
function convertMilesToKms() {
    const distanceWalkedKmArrWithIndex = distanceWalkedMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${(distanceMiles * conversionFactorMilesToKm)}KM`
    })
    console.log(distanceWalkedKmArrWithIndex)
}

convertMilesToKms() 

//-------------------------------------------------------------------------

// how to replace for loop with .map()

const playlistHtml = playlistArr.map(function(track){
    return `<section class="card">
        <div class="card-start">
            <img src="/images/${track.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `
}) 
document.getElementById('container').innerHTML = playlistHtml.join('')
/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.

import { playlistArr } from '/playlist.js'

const playlistHtml = []

for (let i = 0; i < playlistArr.length; i++) {
    playlistHtml.push(
`<section class="card">
    <div class="card-start">
        <img src="/images/${playlistArr[i].albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${playlistArr[i].title}</h4>
            <p class="card-artist">${playlistArr[i].artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
    )
}

document.getElementById('container').innerHTML = playlistHtml
*/

