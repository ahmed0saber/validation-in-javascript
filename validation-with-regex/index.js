let str = "Ahmed is a frontend web developer, ahmed was born in 2001. Ahmed is egyptian."

// gets the index of first word that matches the word "Ahmed"
console.log(str.search("Ahmed"))

// gets the index of first word that matches the regular expression /Ahmed/
console.log(str.match(/Ahmed/))

// gets the index of all words that match the regular expression /Ahmed/
console.log(str.match(/Ahmed/g))

// gets the index of all words that match the regular expression /Ahmed/ in a cate-insensitive way
console.log(str.match(/Ahmed/ig))
// for example, we can use it to count how many times the writer mentioned his name in the story

// gets the index of all words that match the regular expression /Ahmed/ in a cate-insensitive way
console.log(str.replace(/Ahmed/ig, "Ali"))

// checks if the string contains /Ahmed/ or not (returns true or false)
console.log(/Ahmed/.test(str))

// what can we do with regular expressions
// 1 - test
// 2 - search / match
// 3 - replace

// then how to write regular expressions ?

// let's write a code that removes bad words from a string, suppose "aaa", "bbb" and "ccc" are bad words
let stringWithBadWords = "You are aaa because you bbb the ccc."
let filteredString = stringWithBadWords.replace(/(aaa|bbb|ccc)/ig, "***")
console.log(filteredString)

// what if I want to replace all numbers from 0 to 9 with * ?
let stringWithNumbers = "I was born in 2001."
// let stringWithoutNumbers = stringWithNumbers.replace(/(0|1|2|3|4|5|6|7|8|9)/g, "*")
// let stringWithoutNumbers = stringWithNumbers.replace(/[0123456789]/g, "*")
let stringWithoutNumbers = stringWithNumbers.replace(/[0-9]/g, "*")
console.log(stringWithoutNumbers)

// what if I want to replace all characters except numbers from 0 to 9 with * ?
let stringWithoutCharsExceptNumbers = stringWithNumbers.replace(/[^0-9]/g, "*")
console.log(stringWithoutCharsExceptNumbers)

// we can use the same way with [a-z], [A-Z], [abcde]

// Metacharacters \w, \d, \s, \b and \W, \D, \S, \B
// \d matches numbers from 0 to 9, \D matches everything except numbers
// \w matches numbers, letters and underscore, \W matches everything except numbers, letters and underscore

let strWithAtLeastOneNumber = "ahmed0saber"
console.log(/\d/.test(strWithAtLeastOneNumber))

// in a certain website we are allowed to use only numbers, letters and _ for username, how can we verify that the last entered character is valid ?
let lastEnteredChar = "a"
console.log(/\w/.test(lastEnteredChar))

// let's check if the entered pin code includes 4 number digits
let enteredPin = "1234"
console.log(/\d\d\d\d/.test(enteredPin))

// is there a better way ?
let enteredPinAgain = "1234"
console.log(/\d{4}/.test(enteredPinAgain))
// any 4 numbers next to each others will give true, so A1234B gives true, but it's not valid

// we can solve this by determining the beginning and end of required pin code by using ^ for the beginning and $ for the end
console.log(/^\d{4}$/.test(enteredPinAgain))
// now it must begin and end with the same 4 digit characters, so length of pin code is always 4

// now we are ready to validate phone numbers, let's validate egypt phone numbers that begins with +20 then 10, 11, 12 or 15
let myPhoneNumber = "+201208611892"
console.log(/^\+201[0125]\d{8}$/.test(myPhoneNumber))

// how to validate username ?
let username = "ahmed0saber"
console.log(/^([a-z]|[A-Z])\w{5,}$/.test(username))

// how to validate email ?
let email = "ahmed0saber33@gmail.com"
console.log(/^[a-z]\w{2,}@\w{2,}\.\w{2,}$/.test(email))

// how to validate url ?
let url = "https://github.com/ahmed0saber"
console.log(/^(https?):\/\/(www\.)?\w{2,}\.\w{2,}\S*$/.test(url))

// how to get all valid emails from a portfolio website ?
let htmlContent = "<div><span>ahmed0saber33@gmail.com</span><span>ahmed0saber11@gmail.com</span></div>"
console.log(htmlContent.match(/[a-z]\w{2,}@\w{2,}\.\w{2,}/g))

// how do games change the story and use your name inside it ?
let storyWithoutUsername = "Hello #username, how are you ? Someone told me that your name is #username, is that true ?"
console.log(storyWithoutUsername.replaceAll("#username", "Ahmed"))

// we can use regex to search for keywords such as HTML, CSS and JavaScript in resumes
