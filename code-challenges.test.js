// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]



// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Psuedo Code:
// first make a test to test the function to see if a number is divisible by three
// start with a describe statement
// Describe the divideBYThree function, "itll be a function that returns true if the number is divisible by 3"
// Next we will use the expect statement to call the function
// Make three different expect statments 
// Run the test and watch it fail



// a) Create a test with expect statements for each of the variables provided.

// describe ("divideByThree", () => {
//     it("returns true if the mumber is divisible by 3 ", () => {
//     expect(divideByThree({ 15 })).toBe("15 is divisible by 3")
//     expect(divideByThree({ 0 })).toBe ("0 is divisible by 3")
//     expect(divideByThree({ -7 })).toBe("-7 is not divisble by 3")
//     })
// })

// ran test: 1 test failed

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Psuedo code:
// Start on the function by naming a function divideByThree
// Write out all the syntax for the function
// Use two if else statments
// use the % modulator to check if a number is divisible by 3
// return is divisible by 3 if true
// return is not divisible by 3 if not true

// const divideBYThree = () => {
//     if( object.number % === 0){
//         return `${object.number} is divisible by three.`
//     } else {
//         return`${object.number} is not divisibly by three`
//     }
// }

// console.log(divideByThree(object1))

// I couldnt get the test to pass. It says unexpected number when I console.logged it. I think something is wrong with my test i dont think its in my actual function. 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Psuedo code:
// Start with describe a function
// "It" will return all the words in the array capitalized
// Make two expect statements one for the first const one for the second
// run test using $yarn jest watch it fail

// describe("capitilizer", () => {
//     it(returns every string in the array in capital letters, () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         expect(capitilizer(randomNouns1)).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"])
//         expect(capitilizer(randomNouns2)).toEqual(["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"])


//     })
// })


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Psuedocode: 
// name a function "capitilizer"
// put array as the argument we are inputting
// use the .map property to iterate through each value
// use the .toUpperCase to return the strings capitilized

// const capitilizer = (array) => {
//     return array.map(words()){
//         return words.toUpperCase()
//     })
// }

// console.log(capitalizer(randomNouns1))

// I got as far as I could. Also could not get this one to work. My terminal says I am missin a paranthesis somewhere.
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//Psuedo code
// Start with a function named first vowel index
// It "will take in a string and return the index of the first vowel"
// expect "learn" to equal 1
// expect "acadamy" to equal 0
// expect "challanges" to equal 2

// describe("firstVowelIndex", () => { 
//     it("function will take in a string and log the location of the index of the first vowel"), () => {
//         expect(firstVowelIndex("learn")).toBe(1)
//         expect(firstVowelIndex("academy")).toBe(0)
//         expect(firstVowelIndex("challenges")).toBe(2)
//     }

// }
// )
// ran test, it failed 


const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

//psuedo code 

//Start with the function we named above
// set up the syntax for the funtion
// use a loop set up the paramaters for the looop
// use a const with the vowels in it
// make sure you include capital letters also
// create a loop with 0 at the start
// make the lenght i< string lenght
// make it go through the loop by 1
// use .includes to check for the value of vowels 
// make it return the value of i where it finds the vowel

// function firstVowelIndex(string) {
//     const vowels = "aeiouAEIOU";
//     for (let i = 0; i < string.length; i++) {
//       if (vowels.includes(string[i])) {
//         return i
//       }
//     }
//   }



  // my test isnt working, im really not sure why. Everything seems right to me