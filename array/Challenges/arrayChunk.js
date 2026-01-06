//chunk array
// create an empty array to store chunks
// set a starting index to 0


const chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while(index <array.length){
        const chunk = array.slice(index, index + size);
        console.log("----------------------",chunk);
        chunked.push(chunk);
        index += size;
    }
    return chunked;
}   


console.log(chunk([1,2,3,4,5,6,7,8], 3));