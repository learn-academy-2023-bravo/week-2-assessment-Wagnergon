// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

//const cohort = "Bravo 2023"
//console.log(cohort.split(""))

// a) Your answer: This will log all the letters split like this "B", "r" and so on
// b) Verify and explain: It did what I explained above. The split property does that.

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log undefined 
// b) Verify and explain: It logs undefined because were using the function wrong were not giving it a name to call. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 console.log(multipliedByTwo)

// a) Your answer: itll go multiply all the numbers by 2
// b) Verify and explain: Youre taking the array using the map property to get a new array the same lenght that is the numbers inside multiplied by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer:Itll return the odd numbers
// b) Verify and explain: Youre using the filter method to take out the numbers that meet the criteria, this one will take out the off numbers and makea new array

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: This will look at the coding skill object find languages and itll return the string at index 0
// b) Verify and explain: It returned javascript, I just explained above

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: It  would make a new student george. Were using the constructor using the name and then filling in bravo and the year. You 
// b) Verify and explain: { student: 'George', cohort: 'Bravo', year: 2023 }
// it fills in whatever name we want into the rest of the object. We told it to with the constructor