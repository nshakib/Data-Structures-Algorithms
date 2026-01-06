// Reverse Integer

// 1. Convert integer to string (toString method)
// 2. convert string to array (split method)
// 3. reverse the string (reverse method)
// 4. convert array to string (join method)
// 5. convert string to integer (parseInt method)
// 6. return the integer

const reverseInteger = (num) => {
    const reversed = num.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(num);
}
console.log(reverseInteger(321));