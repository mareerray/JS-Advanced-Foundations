/* forEach 
A method for iterating over arrays */

const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

// the followings for...of and .forEach() give exactly the same results
// we're logging out each individal object with  console.log(character)
// we can access the individual properties in each character object with dot notation 
// ex. console.log(character.title)


for (let character of characters){
    // console.log(character) 
    // console.log(character.powers)

}

characters.forEach(function(character){
    // console.log(character)
    console.log(character.powers)
    character.powers.forEach(function(power){
        console.log(power)
    })
})

/*
Challenge:
1. Nest a forEach to log out each individual
   power in each characters powers array.
*/

// we can also log out the index of the elements in an array as well
characters.forEach(function(character, index){
    console.log(index, character.title)
})
/*output
0 Ninja
1 Sorcerer
2 Ogre
3 Unicorn
*/