// FizzBuzz

// 1. Loop from 1 to n
// 2. If the number is divisible by 3, print "Fizz"
// 3. If the number is divisible by 5, print "Buzz"
// 4. If the number is divisible by both 3 and 5, print "FizzBuzz"
// 5. Otherwise, print the number

const fizzbuzz = n =>{
    for(let i=1; i<n; i++){
        if(i%3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }
        else if(i%3 === 0){
            console.log("Fizz")
        }
        else if(i%5 === 0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}

console.log(fizzbuzz(5));