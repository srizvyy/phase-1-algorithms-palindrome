function isPalindrome(word) {
  // Write your algorithm here
  
  for (let i=0; i < word.length / 2; i++) {
    const endIndex = word.length - 1 - i;
    if (word[i] !== word[endIndex]) {
    return false
    } else {
    return true 
    }
  
  }
}

/* 
  Add your pseudocode here
  function isPalidrome (){
    a, b, c
    c, b, a
  }


*/

/*
  Add written explanation of your solution here

  if the word is palidrome ex. mom 
  then return TRUE 
  if it is NOT palidrome 
  then return FALSE 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
