// sentence sapitalization

// step
// 1. Make the string lowercase (toLowerCase method)
// 2. Convert string to array (split method)
// 3. capitalize each word (map method)
// 4. convert array to string (join method)

const capitalize = str =>{
    return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("hello world shakib"))