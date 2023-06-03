function isPalindrome(word) {
  const wordReverseArray = []
  let doesItMatch = false
  
  for (let i = 0; i < word.length; i++) {
    wordReverseArray.unshift(word[i])
  }

  const wordReverse = wordReverseArray.join('')

  if(word === wordReverse) {
    doesItMatch = !doesItMatch
  }

  return doesItMatch
}

/* 
-create a variable that will hold the reversed string array
-make a forOf loop to iterate over the string copy
-push each letter into the reversed array starting with the last letter
-convert the reversed array to a string
-compare the reversed string to the original string
-return true if the strings match, false if not
*/

/*
isPalindrome takes the string, converts it to a reversed array,
converts that array back to a string, then compares it to the original 
and returns true if they match, and false if they don't. I originally
had a variable that held a copy of the string as an array, but got rid 
of it becasue I used a nondestructive method to make the reversed array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log('Expecting: true')
  console.log('=>', isPalindrome('tenet'))

  console.log('Expecting: false')
  console.log('=>', isPalindrome('dunkirk'))

  console.log('')
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

/*Write the problem in my own words:
isPalindrom returns true if the string 
passed to it is a palindrome, and false
if it isn't*/