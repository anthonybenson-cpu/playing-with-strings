/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    result = result + "x"
  }
  return result
}

function yellingChars(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    result = result + (str[i] + "!")
  }
  return result
}

function indexedChars(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    result = result + i + str[i]
  }
  return result
}

function numberedChars(str) {
  for (let i = 0; i < str.length; i++) {
    result = result + '(' + (i + 1) + ')' + str[i]
  }
  return result
}

function exclaim(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.' || str[i] === '?'){
      result = result + '!'
    }else{
      result = result + str[i]
    }
  }
  return result
}

function repeatIt(str, n){
  let result = ""
  for(let i = 0; i < n; i++){
    result = result + str
  }
  return result
}

function truncate(str) {
  if(str.length <= 18) return str
  let result = ""
  for (let i = 0; i < 15; i++ ) {
    result = result + str[i]
  }
  return result + "..."
}

function emailify(firstname, lastname) {
  let parts = str.toLowerCase().split("")
  return parts[0][0] + parts[1] + "Bensonwilliams.com"
}

function reverse(str) {
  let result = ""
  for(let i = str.length - 1; i >= 0; i--){
    result = result + str[i]
  }
  return result
}

function onlyVowels(str){
  let vowels = "aeiouAEIOU"
  let result = ""
  for (let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      result = result + str[i]
    }
  }
  return result
}
































































/********************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
