// what is palindrome?
// A palindrome is a word, phrase, number, or other sequence 
// of characters which reads the same backward as forward, such as madam or racecar. 

/* 
    if the reverse string is equal to the original string,
    then it is a palindrome. 
*/

//intruction
// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array to string (join method)
// 4. Compare the reversed string with the original string

const palindrome = (str) => str.split("").reverse().join("") === str;
console.log(palindrome("madam"));
console.log(palindrome("racecar"));
console.log(palindrome("hello"));
