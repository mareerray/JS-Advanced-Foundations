# for...of vs for...in

- They both iterate over object data structure

- Arrays are objects too!
( Note: An array is a type of object,
so arrays are actually objects.)

# for...in
iterates over all enumerable property keys of an object
```
const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

for (let property in character1) {
    console.log(property) 
    
    // use bracket notaton to access the value they hold 
    console.log(character1[property]) 
}
// output: (console.log(property)) access the keys
title
emoji
powers

// output: (console.log(character1[property])) access the values
Ninja
🥷
[ 'agility', 'stealth', 'aggression' ]

```


# for...of
iterates over the values of an iterable object. 
(example of iterable objects include arrays, strings)

```
const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

const character = 'ninja'

for (let letter of character) {
    console.log(letter)
}

//output (console.log(letter)) acccess letters in a string
n
i
n
j
a
```

```
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

for (let character of characters){
    console.log(character)
    console.log(character.powers)
    for (let power of character.powers) {
        console.log(power)
    }
}

//output (console.log(character)) access each character object inside characters
{title: 'Ninja', emoji: '🥷', powers: ['agility', 'stealth', 'aggression']}
{title: 'Sorcerer', emoji: '🧙', powers: ['magic', 'invisibility', 'necromancy']}
{title: 'Ogre', emoji: '👹', powers: ['power', 'stamina', 'shapeshifting']}
{title: 'Unicorn', emoji: '🦄', powers: ['flight', 'power', 'purity']}

//output (console.log(character.powers)) access the values of powers of each character
[ 'agility', 'stealth', 'aggression' ]
[ 'magic', 'invisibility', 'necromancy' ]
[ 'power', 'stamina', 'shapeshifting' ]
[ 'flight', 'power', 'purity' ]

//output (console.log(power)) access each power inside each character's powers using a nested loop (for (let power of character.powers))
agility
stealth
aggression
magic
invisibility
necromancy
power
stamina
shapeshifting
flight
power
purity
```