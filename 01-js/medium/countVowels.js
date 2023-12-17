/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  if(str.length==0){return 0}
  let vowels=['a','e','i','o','u']
  let s = str.toLowerCase().split("")
  let counter = 0
  for(let i=0;i<5;i++){
    for(let j=0;j<s.length;j++){
      if(vowels[i]==s[j]){
        counter++
      }
    }
  }
  return counter
}

console.log(countVowels('Keep smiling, boo.'))




module.exports = countVowels;