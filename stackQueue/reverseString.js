//reverse string using array as stack
function reverseString(str){
    const stack = [];

    for(let char of str){
        stack.push(char);
    }

    let reverseStr = "";
    while(stack.length > 0){
        reverseStr += stack.pop();
    }
    return reverseStr;
}

const reverseStringResult = reverseString("Hello World");
console.log(reverseStringResult)// output: dlroW olleH