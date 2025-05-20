/* .reduce() method
give me just one thing! */

const rainJanuaryByWeek = [ 10, 20, 0, 122 ]

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, currentElement){
    console.log('total: ' + total, 'currentElement: ' + currentElement)

    return total + currentElement
})

console.log(totalRainfallJanuary)

// total: 10,"currentElement: 20"
// ›total: 30,"currentElement: 0"
// ›total: 30,"currentElement: 122"
// ›152

//----------------------------------------------------------
const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/
const totalGrades = grades.reduce(function(total, currentGrade) {
    // console.log('total: ' + total, 'currentGrade: ' + currentGrade)

    return total + currentGrade
})

console.log(`The class average is ${(totalGrades/grades.length).toFixed(2)}`)

//----------------------------------------------------------

// The .reduce() Method with Objects

const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))