<<<<<<< HEAD
/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase().trim()
  str2=str2.toLowerCase().trim()
  if(str1.length != str2.length){
    return false
  }else{
    let s1 = str1.split("").sort()
    let s2 = str2.split("").sort()
    // console.log(s1,s2)
    return s1.every((val,index)=> val===s2[index])
  }
}
// console.log(isAnagram('Debit Card', 'Bad Credit'))
module.exports = isAnagram;
=======
/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase().trim()
  str2=str2.toLowerCase().trim()
  if(str1.length != str2.length){
    return false
  }else{
    let s1 = str1.split("").sort()
    let s2 = str2.split("").sort()
    // console.log(s1,s2)
    return s1.every((val,index)=> val===s2[index])
  }
}
// console.log(isAnagram('Debit Card', 'Bad Credit'))
module.exports = isAnagram;
>>>>>>> 597e25c8d9f66232e84d9e2ca0d447fb0463c197
