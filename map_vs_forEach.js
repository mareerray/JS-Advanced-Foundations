import { playlistArr } from '/playlist.js'


// USE .map() IF YOU NEED TO MAKE USE OF
// THE NEW ARAY IT RETURNS

const playlistHtml = playlistArr.map(function(track){
    return `
    <section class="card">
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

document.getElementById('container').innerHTML = playlistHtml

//-----------------------------------------------------------------------

/////// forEach DOES NOT RETURN A NEW ARRAY 

// USE .forEach() IF YOU DON'T NEED
// TO CREATE A NEW ARRAY

// Create an empty string to hold our HTML
let playlistHtml2 = [];

// Use forEach to append HTML for each track
playlistArr.forEach(function(track) {
    playlistHtml.push(`
    <section class="card">
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
    `);
});

// Set the innerHTML with our built string
document.getElementById('container').innerHTML = playlistHtml2.join('');
